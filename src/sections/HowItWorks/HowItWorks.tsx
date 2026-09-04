import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { steps } from '../../data/project'

export default function HowItWorks() {
  return (
    <section className="section section-soft" id="como-funciona"><div className="container">
      <SectionTitle eyebrow="Como funciona" title="Do convite à comunhão" text="Um fluxo simples para organizar o encontro e receber cada família com cuidado." />
      <div className="steps-grid">{steps.map((step,i) => <div className="step" key={step}><span>{String(i+1).padStart(2,'0')}</span><p>{step}</p></div>)}</div>
    </div></section>
  )
}
