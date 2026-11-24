import { useTranslation } from 'react-i18next'

import InvitationCard from '../components/InvitationCard/InvitationCard'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import { germanInvitations, invitations } from '../data/invitations'

export default function Convites() {
  const { i18n } = useTranslation()
  const isGerman = (i18n.resolvedLanguage ?? i18n.language)?.split('-')[0] === 'de'
  const visibleInvitations = isGerman ? germanInvitations : invitations

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Material visual</span>
          <h1>Convites do projeto</h1>
          <p>Artes originais fornecidas pelo autor para apresentação e divulgação dos encontros.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Modelos disponíveis"
            text="Clique em uma imagem para ampliar ou use o botão correspondente para fazer o download. O conteúdo das artes foi mantido sem alteração."
          />
          <div key={isGerman ? 'de' : 'pt'} className="invitation-grid all notranslate" translate="no">
            {visibleInvitations.map(invitation => (
              <InvitationCard key={invitation.id} invitation={invitation} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
