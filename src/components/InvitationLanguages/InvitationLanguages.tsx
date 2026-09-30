const languages = [
  ['pt', 'Português'],
  ['en', 'Inglês'],
  ['es', 'Espanhol'],
  ['fr', 'Francês'],
  ['de', 'Alemão'],
]

export default function InvitationLanguages() {
  return (
    <div className="invitation-languages" aria-label="Idiomas dos convites">
      <p>
        <strong>Os convites também serão disponibilizados nos seguintes idiomas:</strong>
      </p>

      <div className="invitation-language-flags">
        {languages.map(([code, label]) => (
          <span key={code} className="invitation-language-item">
            <span className={`flag flag-${code}`} aria-hidden="true" />
            <span>{label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
