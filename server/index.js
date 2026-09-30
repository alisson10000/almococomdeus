import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3001)

// ======================================================
// CORS
// ======================================================

const allowedOrigins = (
  process.env.CORS_ORIGIN || 'http://localhost:5173'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, callback) {
      // Permite requisições sem Origin, como Postman/curl,
      // e origens cadastradas no .env
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      console.error(`Origem bloqueada pelo CORS: ${origin}`)

      return callback(new Error('Origem não permitida pelo CORS'))
    },
  }),
)

app.use(express.json({ limit: '20kb' }))
app.use(express.urlencoded({ extended: true }))

// ======================================================
// LOG DAS REQUISIÇÕES
// ======================================================

app.use((request, _response, next) => {
  console.log(`${request.method} ${request.url}`)
  next()
})

// ======================================================
// FUNÇÕES AUXILIARES
// ======================================================

function clean(value) {
  return String(value ?? '').trim()
}

function validateContact(body = {}) {
  const data = {
    nome: clean(body.nome),
    email: clean(body.email),
    whatsapp: clean(body.whatsapp),
    cidade: clean(body.cidade),
    igreja: clean(body.igreja),
    assunto: clean(body.assunto),
    mensagem: clean(body.mensagem),
    privacidade:
      body.privacidade === true ||
      body.privacidade === 'true' ||
      body.privacidade === 'on' ||
      body.privacidade === 1 ||
      body.privacidade === '1',
  }

  const missing = []

  if (!data.nome) {
    missing.push('nome')
  }

  if (!data.email) {
    missing.push('email')
  }

  if (!data.assunto) {
    missing.push('assunto')
  }

  if (!data.mensagem) {
    missing.push('mensagem')
  }

  if (!data.privacidade) {
    missing.push('privacidade')
  }

  const emailLooksValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)

  if (data.email && !emailLooksValid) {
    missing.push('email_valido')
  }

  return {
    data,
    missing,
  }
}

// ======================================================
// NODEMAILER
// ======================================================

function createTransporter() {
  const host = clean(process.env.SMTP_HOST)
  const portNumber = Number(process.env.SMTP_PORT || 465)
  const user = clean(process.env.SMTP_USER)

  // Remove espaços da senha de app do Google
  const pass = clean(process.env.SMTP_PASS).replace(/\s/g, '')

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP não configurado. Verifique SMTP_HOST, SMTP_USER e SMTP_PASS.',
    )
  }

  return nodemailer.createTransport({
    host,
    port: portNumber,
    secure: portNumber === 465,

    auth: {
      user,
      pass,
    },
  })
}

// ======================================================
// HEALTH CHECK
// ======================================================

app.get('/api/health', (_request, response) => {
  return response.json({
    ok: true,
    message: 'API funcionando.',
  })
})

// ======================================================
// TESTE DO SMTP
// ======================================================

app.get('/api/health/smtp', async (_request, response) => {
  try {
    const transporter = createTransporter()

    await transporter.verify()

    console.log('SMTP autenticado com sucesso.')

    return response.json({
      ok: true,
      message: 'Conexão SMTP realizada com sucesso.',
    })
  } catch (error) {
    console.error('Erro na conexão SMTP:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    })

    return response.status(500).json({
      ok: false,
      message: 'Não foi possível conectar ao servidor SMTP.',
    })
  }
})

// ======================================================
// FALE CONOSCO
// ======================================================

app.post('/api/contact', async (request, response) => {
  console.log('Dados recebidos do formulário:', request.body)

  const { data, missing } = validateContact(request.body)

  if (missing.length > 0) {
    console.log('Campos inválidos:', missing)

    return response.status(400).json({
      ok: false,
      message: 'Confira os campos obrigatórios antes de enviar.',
      fields: missing,
    })
  }

  try {
    const transporter = createTransporter()

    const to =
      clean(process.env.CONTACT_TO_EMAIL) ||
      clean(process.env.SMTP_USER)

    // Para Gmail, usamos a própria conta autenticada como remetente.
    const from = clean(process.env.SMTP_USER)

    console.log('Enviando e-mail...')
    console.log('De:', from)
    console.log('Para:', to)
    console.log('Reply-To:', data.email)

    const info = await transporter.sendMail({
      from: `"Almoço com Deus" <${from}>`,
      to,
      replyTo: data.email,

      subject: `Fale Conosco - ${data.assunto}`,

      text: [
        'Nova mensagem recebida pelo site Almoço com Deus.',
        '',
        `Nome: ${data.nome}`,
        `E-mail: ${data.email}`,
        `WhatsApp: ${data.whatsapp || 'Não informado'}`,
        `Cidade: ${data.cidade || 'Não informada'}`,
        `Igreja: ${data.igreja || 'Não informada'}`,
        `Assunto: ${data.assunto}`,
        '',
        'Mensagem:',
        data.mensagem,
        '',
        'Consentimento LGPD: autorizado para retorno sobre esta mensagem e atividades relacionadas ao projeto.',
      ].join('\n'),
    })

    console.log('E-mail enviado com sucesso:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    })

    return response.status(200).json({
      ok: true,
      message: 'Mensagem enviada com sucesso.',
    })
  } catch (error) {
    console.error('Erro ao enviar contato:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    })

    return response.status(500).json({
      ok: false,
      message:
        'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.',
    })
  }
})

// ======================================================
// ROTA NÃO ENCONTRADA
// ======================================================

app.use((request, response) => {
  return response.status(404).json({
    ok: false,
    message: `Rota não encontrada: ${request.method} ${request.originalUrl}`,
  })
})

// ======================================================
// INICIAR SERVIDOR
// ======================================================

app.listen(port, () => {
  console.log('======================================')
  console.log(' API Almoço com Deus')
  console.log('======================================')
  console.log(`Servidor: http://localhost:${port}`)
  console.log(`Health:   http://localhost:${port}/api/health`)
  console.log(`SMTP:     http://localhost:${port}/api/health/smtp`)
  console.log('======================================')
})
