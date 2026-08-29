import Button from '../../components/Button/Button'
import InvitationCard from '../../components/InvitationCard/InvitationCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { invitations } from '../../data/invitations'
export default function Invitations(){return <section className="section" id="convites"><div className="container"><div className="section-head-row"><SectionTitle eyebrow="Convites" title="Identidade original do projeto" text="As artes fornecidas pelo autor são apresentadas sem alteração de conteúdo."/><Button to="/convites" variant="ghost">Ver todos</Button></div><div className="invitation-grid">{invitations.slice(0,3).map(i=><InvitationCard key={i.id} invitation={i}/>)}</div></div></section>}
