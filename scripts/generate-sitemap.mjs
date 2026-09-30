import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const publicDir = resolve('public')
const envPath = resolve('.env')
const fallbackSiteUrl = 'http://localhost:5173'

const routes = [
  ['/', 'weekly', '1.0'],
  ['/projeto', 'monthly', '0.9'],
  ['/fundacao-aggape', 'monthly', '0.7'],
  ['/projeto-evangelistico', 'monthly', '0.8'],
  ['/igreja-nas-ruas', 'monthly', '0.8'],
  ['/musicas', 'weekly', '0.8'],
  ['/convites', 'monthly', '0.8'],
  ['/fale-conosco', 'monthly', '0.7'],
]

function readSiteUrl() {
  try {
    const envFile = readFileSync(envPath, 'utf8')
    const configuredUrl = envFile
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.startsWith('VITE_SITE_URL='))
      ?.replace('VITE_SITE_URL=', '')
      .trim()

    return configuredUrl || process.env.VITE_SITE_URL || fallbackSiteUrl
  } catch {
    return process.env.VITE_SITE_URL || fallbackSiteUrl
  }
}

const siteUrl = readSiteUrl().replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(([path, changefreq, priority]) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`)
  .join('\n')}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap)
writeFileSync(resolve(publicDir, 'robots.txt'), robots)
