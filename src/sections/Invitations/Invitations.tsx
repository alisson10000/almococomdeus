import InvitationCard from '../../components/InvitationCard/InvitationCard'
import InvitationLanguages from '../../components/InvitationLanguages/InvitationLanguages'
import { invitations } from '../../data/invitations'

export default function Invitations() {
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

        <div className="invitation-grid">
          {invitations.map((invitation) => (
            <InvitationCard
              key={invitation.id}
              invitation={invitation}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
