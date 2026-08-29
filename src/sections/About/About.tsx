import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

export default function About() {
  return (
    <section className="section" id="sobre"><div className="container split-section">
      <SectionTitle eyebrow="O projeto" title="Uma mesa que aproxima pessoas" text="O Almoço com Deus propõe encontros gratuitos de confraternização promovidos por igrejas, com refeição, acolhimento, música e uma breve mensagem. A ideia central é receber famílias com carinho e criar oportunidades de convivência." />
      <div className="quote-card"><span>“</span><p>O foco principal é o encontro e a aproximação. Formato, cardápio e detalhes podem ser adaptados por cada igreja.</p><Link to="/projeto">Conheça a história completa <ArrowRight size={17}/></Link></div>
    </div></section>
  )
}
