import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoByPath, type SeoData } from '../data/seo'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url
}

function createStructuredData(data: SeoData, canonicalUrl: string, imageUrl?: string) {
  const page = {
    '@context': 'https://schema.org',
    '@type': data.type === 'article' ? 'Article' : 'WebPage',
    name: data.title,
    headline: data.title,
    description: data.description,
    url: canonicalUrl,
    inLanguage: 'pt-BR',
    ...(imageUrl ? { image: imageUrl } : {}),
    author: {
      '@type': 'Person',
      name: 'Ev. Mister Gandhi',
      alternateName: 'Gandhi Compositor',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Almoço com Deus',
      url: new URL('/', canonicalUrl).href,
    },
  }

  if (canonicalUrl.endsWith('/')) {
    return {
      ...page,
      '@type': 'WebSite',
      alternateName: 'Almoço com Deus / Jantar com Deus',
    }
  }

  return page
}

export default function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const knownPage = seoByPath[location.pathname]
    const data = knownPage ?? {
      title: 'Página não encontrada | Almoço com Deus',
      description: 'A página solicitada não foi encontrada.',
      noIndex: true,
    }
    const configuredUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')
    const origin = configuredUrl || window.location.origin
    const canonicalUrl = new URL(location.pathname, `${origin}/`).href
    const imageUrl = data.image ? new URL(data.image, window.location.origin).href : undefined

    document.title = data.title
    document.documentElement.lang = 'pt-BR'
    setCanonical(canonicalUrl)
    setMeta('meta[name="description"]', 'name', 'description', data.description)
    setMeta('meta[name="robots"]', 'name', 'robots', data.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    setMeta('meta[property="og:title"]', 'property', 'og:title', data.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', data.description)
    setMeta('meta[property="og:type"]', 'property', 'og:type', data.type ?? 'website')
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'pt_BR')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Almoço com Deus')
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', data.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', data.description)

    if (imageUrl) {
      setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
      setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', data.title)
      setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)
    }

    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-schema]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seoSchema = 'true'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(createStructuredData(data, canonicalUrl, imageUrl))
  }, [location.pathname])

  return null
}
