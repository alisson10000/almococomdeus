import { Download, Maximize2 } from 'lucide-react'
import type { Invitation } from '../../types'

export default function InvitationCard({
  invitation,
  manualTextTranslation,
}: {
  invitation: Invitation
  manualTextTranslation?: boolean
}) {
  const textAttributes = manualTextTranslation
    ? { className: 'notranslate', translate: 'no' as const }
    : undefined

  return (
    <article className="invitation-card">
      <button className="image-button" onClick={() => window.open(invitation.image, '_blank')} aria-label={`Ampliar ${invitation.title}`}>
        <img src={invitation.image} alt={invitation.title} loading="lazy" />
        <span><Maximize2 size={18}/> Ampliar</span>
      </button>
      <div>
        <h3 {...textAttributes}>{invitation.title}</h3>
        <p {...textAttributes}>{invitation.description}</p>
        <a className="invitation-download" href={invitation.downloadUrl ?? invitation.image} download={invitation.downloadName}>
          <Download size={18} /> {invitation.downloadLabel ?? (invitation.downloadUrl ? 'Baixar PDF' : 'Baixar imagem')}
        </a>
      </div>
    </article>
  )
}
