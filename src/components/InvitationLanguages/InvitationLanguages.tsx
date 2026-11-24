import { useTranslation } from 'react-i18next'

const languages = [
  ['pt', 'Português'],
  ['it', 'Italiano'],
  ['en', 'Inglês'],
  ['es', 'Espanhol'],
  ['fr', 'Francês'],
  ['de', 'Alemão'],
  ['ru', 'Russo'],
]

export default function InvitationLanguages() {
  const { i18n } = useTranslation()
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language

  return (
    <div className="invitation-languages" aria-label="Idiomas dos convites">
      <p>
        <strong>Os convites também serão disponibilizados nos seguintes idiomas:</strong>
      </p>

      <div className="invitation-language-flags">
        {languages.map(([code, label]) => (
          <button
            key={code}
            type="button"
            className="invitation-language-item"
            aria-pressed={activeLanguage === code}
            onClick={() => i18n.changeLanguage(code)}
          >
            <span className={`flag flag-${code}`} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
