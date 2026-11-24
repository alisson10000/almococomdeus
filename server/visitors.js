import { mkdirSync } from 'node:fs'
import { isIP } from 'node:net'
import { dirname, resolve } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath } from 'node:url'

let database
let rateWindow = 0
const newVisitsByIP = new Map()

function countAllowed(request) {
  const window = Math.floor(Date.now() / 60_000)
  if (window !== rateWindow) {
    newVisitsByIP.clear()
    rateWindow = window
  }

  const peer = request.socket.remoteAddress
  const loopback = ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(peer)
  // O proxy local deve acrescentar o IP do cliente ao fim do cabeçalho.
  const forwarded = loopback && request.get('x-forwarded-for')?.split(',').at(-1)?.trim()
  const address = forwarded && isIP(forwarded) ? forwarded : peer
  const visits = newVisitsByIP.get(address) ?? 0
  if (visits >= 60 || (visits === 0 && newVisitsByIP.size >= 10_000)) return false
  newVisitsByIP.set(address, visits + 1)
  return true
}

function getDatabase() {
  if (database) return database

  const filename = process.env.VISITOR_DB_PATH
    ? resolve(process.env.VISITOR_DB_PATH)
    : fileURLToPath(new URL('../.visitor-data/visitors.sqlite', import.meta.url))

  mkdirSync(dirname(filename), { recursive: true })
  const connection = new DatabaseSync(filename)

  try {
    connection.exec(`
      PRAGMA busy_timeout = 5000;
      CREATE TABLE IF NOT EXISTS visitor_sessions (id TEXT PRIMARY KEY) WITHOUT ROWID;
      CREATE TABLE IF NOT EXISTS visitor_counter (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        total INTEGER NOT NULL
      );
      INSERT OR IGNORE INTO visitor_counter VALUES (1, 0);
      CREATE TRIGGER IF NOT EXISTS count_visitor_session
      AFTER INSERT ON visitor_sessions
      BEGIN
        UPDATE visitor_counter SET total = total + 1 WHERE id = 1;
      END;
    `)
    database = connection
    return database
  } catch (error) {
    connection.close()
    throw error
  }
}

function sendTotal(response, db) {
  return response.json(db.prepare('SELECT total FROM visitor_counter WHERE id = 1').get())
}

export function getVisitorTotal(_request, response) {
  response.set('Cache-Control', 'no-store')
  try {
    return sendTotal(response, getDatabase())
  } catch (error) {
    console.error('Erro ao consultar total de visitas:', error)
    return response.status(503).json({ ok: false })
  }
}

export function registerVisit(request, response) {
  response.set('Cache-Control', 'no-store')
  const agent = request.get('user-agent') ?? ''
  const fetchSite = request.get('sec-fetch-site')
  const host = request.get('host')
  const origin = request.get('origin')
  const sameOrigin = fetchSite === 'same-origin' ||
    (!fetchSite && !!host && (origin === `https://${host}` || origin === `http://${host}`))

  if (!sameOrigin ||
      !request.is('application/json') || !agent || /bot\b|crawler|spider|headless|curl|wget/i.test(agent)) {
    return response.status(403).json({ ok: false })
  }
  const sessionId = request.body?.sessionId
  if (typeof sessionId !== 'string' || !/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/.test(sessionId)) {
    return response.status(400).json({ ok: false })
  }

  try {
    const db = getDatabase()
    if (!db.prepare('SELECT 1 FROM visitor_sessions WHERE id = ?').get(sessionId)) {
      if (!countAllowed(request)) return response.status(429).set('Retry-After', '60').json({ ok: false })
      db.prepare('INSERT OR IGNORE INTO visitor_sessions (id) VALUES (?)').run(sessionId)
    }
    return sendTotal(response, db)
  } catch (error) {
    console.error('Erro ao registrar visita:', error)
    return response.status(503).json({ ok: false })
  }
}
