import EventCard from '../components/EventCard/EventCard'
import SectionTitle from '../components/SectionTitle/SectionTitle'
export default function Eventos(){return <main className="page"><section className="page-hero"><div className="container"><span className="eyebrow">Agenda</span><h1>Eventos</h1><p>Área preparada para publicar encontros oficiais com data, horário, local, vagas e confirmação de presença.</p></div></section><section className="section"><div className="container"><SectionTitle title="Próximos eventos"/><EventCard/></div></section></main>}
