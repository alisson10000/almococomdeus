import { useTranslation } from 'react-i18next'

import germanEnvelopeDocx from '../../assets/images/6-CONVITE-ENVELOPE-ALEMAO.docx?url'
import spanishEnvelopeDocx from '../../assets/images/ESPANHOL/6 convite-envelope alisson ESPANHOL.docx?url'
import frenchEnvelopeDocx from '../../assets/images/FRANCA/CONVITE-ENVELOPE-FRANCES.docx?url'
import englishEnvelopeDocx from '../../assets/images/INGLES/6-CONVITE-ENVELOPE-INGLES.docx?url'
import italianEnvelopeDocx from '../../assets/images/ITALIANO/6-CONVITE-ITALIANO.docx?url'
import russianEnvelopeDocx from '../../assets/images/RUSSO/6-ENVELOPE-WORD-RUSSO.docx?url'
import InvitationCard from '../../components/InvitationCard/InvitationCard'
import InvitationLanguages from '../../components/InvitationLanguages/InvitationLanguages'
import { englishInvitations, frenchInvitations, germanInvitations, invitations, italianInvitations, russianInvitations, spanishInvitations } from '../../data/invitations'
import type { Invitation } from '../../types'

const germanVersionsByCard = new Map<number, Partial<Omit<Invitation, 'id'>>>(
  germanInvitations.map(({ id, ...version }) => [
    id,
    {
      ...version,
      ...(id === 5 && {
        title: 'Einladung — Brasilianische Feijoada',
        description: 'Rückseite der Einladung „An die Königin des Hauses“.',
      }),
      downloadLabel: 'PDF herunterladen',
    },
  ]),
)

germanVersionsByCard.set(7, {
  downloadUrl: germanEnvelopeDocx,
  downloadName: '6-CONVITE-ENVELOPE-ALEMAO.docx',
  downloadLabel: 'Word-Dokument herunterladen',
})

const spanishVersionsByCard = new Map<number, Partial<Omit<Invitation, 'id'>>>(
  spanishInvitations.map(({ id, ...version }) => [
    id,
    { ...version, downloadLabel: 'Descargar PDF' },
  ]),
)

spanishVersionsByCard.set(7, {
  downloadUrl: spanishEnvelopeDocx,
  downloadName: '6 convite-envelope alisson ESPANHOL.docx',
  downloadLabel: 'Descargar documento de Word',
})

const frenchVersionsByCard = new Map<number, Partial<Omit<Invitation, 'id'>>>(
  frenchInvitations.map(({ id, ...version }) => [
    id,
    { ...version, downloadLabel: 'Télécharger le PDF' },
  ]),
)

frenchVersionsByCard.set(7, {
  downloadUrl: frenchEnvelopeDocx,
  downloadName: 'CONVITE-ENVELOPE-FRANCES.docx',
  downloadLabel: 'Télécharger le document Word',
})

const englishVersionsByCard = new Map<number, Partial<Omit<Invitation, 'id'>>>(
  englishInvitations.map(({ id, ...version }) => [
    id,
    { ...version, downloadLabel: 'Download PDF' },
  ]),
)

englishVersionsByCard.set(7, {
  downloadUrl: englishEnvelopeDocx,
  downloadName: '6-CONVITE-ENVELOPE-INGLES.docx',
  downloadLabel: 'Download Word document',
})

const italianVersionsByCard = new Map<number, Partial<Omit<Invitation, 'id'>>>(
  italianInvitations.map(({ id, ...version }) => [
    id,
    { ...version, downloadLabel: 'Scarica il PDF' },
  ]),
)

italianVersionsByCard.set(7, {
  downloadUrl: italianEnvelopeDocx,
  downloadName: '6-CONVITE-ITALIANO.docx',
  downloadLabel: 'Scarica il documento Word',
})

const russianVersionsByCard = new Map<number, Partial<Omit<Invitation, 'id'>>>(
  russianInvitations.map(({ id, ...version }) => [
    id,
    { ...version, downloadLabel: 'Скачать PDF' },
  ]),
)

russianVersionsByCard.set(7, {
  downloadUrl: russianEnvelopeDocx,
  downloadName: '6-ENVELOPE-WORD-RUSSO.docx',
  downloadLabel: 'Скачать документ Word',
})

export default function Invitations() {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage ?? i18n.language)?.split('-')[0]
  const isGerman = language === 'de'
  const isSpanish = language === 'es'
  const isFrench = language === 'fr'
  const isEnglish = language === 'en'
  const isItalian = language === 'it'
  const isRussian = language === 'ru'
  const versionsByCard = isRussian ? russianVersionsByCard
    : isItalian ? italianVersionsByCard
    : isEnglish ? englishVersionsByCard
    : isFrench ? frenchVersionsByCard
    : isSpanish ? spanishVersionsByCard
    : isGerman ? germanVersionsByCard
    : undefined

  return (
    <section className="section" id="convites">
      <div className="container">
        <div className="invitation-authorization">
          <h3>
            AUTORIZAÇÃO PARA IMPRESSÃO GRATUITA DE CONVITES.
          </h3>

          <p>
            <strong>
              Eu, Ev. Mister Gandhi (Anathan Gandhi Geththx), brasileiro, neto de indiano (Ásia), autor deste projeto, autorizo qualquer pessoa ou igreja a reproduzir ou imprimir gratuitamente estes convites para evangelização e divulgação do evangelho no Brasil e no mundo. Deus vos abençoe.
            </strong>
          </p>

          <p>
            <strong>
              As medidas do convite são 14,85cm x 10,5cm, ou seja, metade de uma folha A4 (29,7 x 21cm). O papel recomendado é o fotográfico brilhoso, dupla face de 150 ou 180 gramas. Uma folha A4 rende dois convites e o pacote com 20 folhas pode ser adquirido na shopee ao preço de 14,99 Reais, gerando um total de 40 convites, saindo a 0,38 Reais cada convite (além do custo da tinta, claro). Procure imprimir com alta qualidade. Deus vos abençoe.
            </strong>
          </p>

          <p>
            <strong>
              As medidas do papel fotográfico auto adesivo, alto brilho para o envelope do convite são 14,85cm x 10,5cm, ou seja, metade de uma folha A4 (29,7 x 21cm), 130g e custam cerca de 25,80 Reais por 50 folhas. Rende 100 adesivos para 100 envelopes.
            </strong>
          </p>

          <InvitationLanguages />
        </div>

        <div className="invitation-grid" key={language}>
          {invitations.map((invitation) => (
            <InvitationCard
              key={invitation.id}
              manualTextTranslation={((isSpanish || isFrench || isEnglish || isItalian || isRussian) && invitation.id !== 7) || (invitation.id === 5 && (language === 'pt' || isGerman))}
              invitation={versionsByCard ? { ...invitation, ...versionsByCard.get(invitation.id) } : invitation}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
