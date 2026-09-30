import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import {
  defaultKeywords,
  seoByPath,
  siteAuthor,
  siteAuthorAlias,
  siteName,
  supportedLocales,
  type SeoData,
} from '../data/seo'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function setLink(selector: string, rel: string, href: string, attributes?: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  element.href = href
  Object.entries(attributes ?? {}).forEach(([key, value]) => element.setAttribute(key, value))
}

function removeManagedLinks() {
  document.head.querySelectorAll('link[data-seo-managed="true"]').forEach((element) => element.remove())
}

function addAlternateLinks(pathname: string, origin: string) {
  removeManagedLinks()

  supportedLocales.forEach((locale) => {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = locale.code
    link.href = new URL(pathname, `${origin}/`).href
    link.dataset.seoManaged = 'true'
    document.head.appendChild(link)
  })

  const xDefault = document.createElement('link')
  xDefault.rel = 'alternate'
  xDefault.hreflang = 'x-default'
  xDefault.href = new URL(pathname, `${origin}/`).href
  xDefault.dataset.seoManaged = 'true'
  document.head.appendChild(xDefault)
}

function getOrigin() {
  const configuredUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')
  return configuredUrl || window.location.origin
}

function createStructuredData(data: SeoData, canonicalUrl: string, imageUrl?: string) {
  const websiteUrl = new URL('/', canonicalUrl).href
  const organizationId = `${websiteUrl}#organization`
  const websiteId = `${websiteUrl}#website`
  const pageId = `${canonicalUrl}#webpage`

  const organization = {
    '@type': 'Organization',
    '@id': organizationId,
    name: siteName,
    alternateName: ['Jantar com Deus', siteAuthorAlias],
    url: websiteUrl,
    founder: {
      '@type': 'Person',
      name: siteAuthor,
      alternateName: siteAuthorAlias,
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteName,
    alternateName: 'Almoço com Deus / Jantar com Deus',
    url: websiteUrl,
    inLanguage: 'pt-BR',
    publisher: {
      '@id': organizationId,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${websiteUrl}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  const page = {
    '@type': data.type === 'article' ? 'Article' : 'WebPage',
    '@id': pageId,
    name: data.title,
    headline: data.title,
    description: data.description,
    url: canonicalUrl,
    inLanguage: 'pt-BR',
    isPartOf: {
      '@id': websiteId,
    },
    publisher: {
      '@id': organizationId,
    },
    author: {
      '@type': 'Person',
      name: siteAuthor,
      alternateName: siteAuthorAlias,
    },
    ...(imageUrl ? { image: imageUrl, primaryImageOfPage: imageUrl } : {}),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, page],
  }
}

export default function SeoManager() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const knownPage = seoByPath[location.pathname]
    const data = knownPage ?? {
      title: 'Página não encontrada | Almoço com Deus',
      description: 'A página solicitada não foi encontrada.',
      noIndex: true,
    }
    const origin = getOrigin()
    const canonicalUrl = new URL(location.pathname, `${origin}/`).href
    const imageUrl = data.image ? new URL(data.image, origin).href : undefined
    const keywords = [...defaultKeywords, ...(data.keywords ?? [])]
    const activeLanguage = i18n.resolvedLanguage ?? i18n.language ?? 'pt-BR'

    document.title = data.title
    document.documentElement.lang = activeLanguage.startsWith('pt') ? 'pt-BR' : activeLanguage

    setLink('link[rel="canonical"]', 'canonical', canonicalUrl)
    setLink('link[rel="sitemap"]', 'sitemap', new URL('/sitemap.xml', `${origin}/`).href, {
      type: 'application/xml',
    })
    addAlternateLinks(location.pathname, origin)

    setMeta('meta[name="description"]', 'name', 'description', data.description)
    setMeta('meta[name="keywords"]', 'name', 'keywords', Array.from(new Set(keywords)).join(', '))
    setMeta('meta[name="author"]', 'name', 'author', `${siteAuthor} (${siteAuthorAlias})`)
    setMeta('meta[name="publisher"]', 'name', 'publisher', siteName)
    setMeta('meta[name="robots"]', 'name', 'robots', data.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('meta[name="theme-color"]', 'name', 'theme-color', '#b8860b')
    setMeta('meta[name="application-name"]', 'name', 'application-name', siteName)

    setMeta('meta[property="og:title"]', 'property', 'og:title', data.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', data.description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', data.type ?? 'website')
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'pt_BR')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName)

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.description)

    if (imageUrl) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
      setMeta('meta[property="og:image:secure_url"]', 'property', 'og:image:secure_url', imageUrl)
      setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', data.title)
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)
      setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', data.title)
    }

    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seoSchema = 'true'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(createStructuredData(data, canonicalUrl, imageUrl))
  }, [i18n.language, i18n.resolvedLanguage, location.pathname])

  return null
}
