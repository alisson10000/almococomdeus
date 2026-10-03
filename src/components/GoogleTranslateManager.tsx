import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const googleTranslateElementId = 'google_translate_element'
const supportedLanguages = 'pt,it,en,es,fr,de,ru'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string
            includedLanguages: string
            autoDisplay: boolean
          },
          elementId: string,
        ) => void
      }
    }
  }
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/;max-age=31536000`

  const hostnameParts = window.location.hostname.split('.')
  if (hostnameParts.length > 1) {
    document.cookie = `${name}=${value};path=/;domain=.${hostnameParts.slice(-2).join('.')};max-age=31536000`
  }
}

function applyGoogleLanguage(language: string) {
  const translateValue = language === 'pt' ? '/pt/pt' : `/pt/${language}`
  setCookie('googtrans', translateValue)

  const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo')
  if (!combo) return false

  combo.value = language === 'pt' ? '' : language
  combo.dispatchEvent(new Event('change', { bubbles: true }))
  return true
}

export default function GoogleTranslateManager() {
  const { i18n } = useTranslation()

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'pt',
          includedLanguages: supportedLanguages,
          autoDisplay: false,
        },
        googleTranslateElementId,
      )

      window.setTimeout(() => applyGoogleLanguage(i18n.resolvedLanguage ?? i18n.language), 500)
    }

    if (document.getElementById('google-translate-script')) return

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
  }, [i18n.language, i18n.resolvedLanguage])

  useEffect(() => {
    const language = i18n.resolvedLanguage ?? i18n.language
    let attempts = 0

    const timer = window.setInterval(() => {
      attempts += 1

      if (applyGoogleLanguage(language) || attempts >= 12) {
        window.clearInterval(timer)
      }
    }, 300)

    return () => window.clearInterval(timer)
  }, [i18n.language, i18n.resolvedLanguage])

  return <div id={googleTranslateElementId} className="google-translate-host" aria-hidden="true" />
}
