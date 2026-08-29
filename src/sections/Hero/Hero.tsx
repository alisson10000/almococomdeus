import { HeartHandshake, Music2, Users } from 'lucide-react'
import heroImage from '../../assets/images/rainha-do-lar.jpeg'
import Button from '../../components/Button/Button'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Projeto evangelístico de acolhimento</span>
          <h1>Almoço <em>com Deus</em></h1>
          <p className="hero-lead">Uma mesa preparada para receber famílias, compartilhar alegria, música, comunhão e a Palavra de Deus.</p>
          <p>Conheça uma iniciativa criada para aproximar pessoas, famílias e igrejas por meio de momentos especiais de acolhimento e confraternização.</p>
          <div className="hero-actions"><Button to="/projeto">Conheça o projeto</Button><Button to="/contato" variant="ghost">Quero participar</Button></div>
          <div className="hero-points"><span><Users/> Famílias</span><span><Music2/> Música</span><span><HeartHandshake/> Comunhão</span></div>
        </div>
        <div className="hero-art">
          <div className="gold-frame"><img src={heroImage} alt="À Rainha do Lar — com muito amor e carinho" /></div>
          <div className="floating-note">Idealizado por<br/><strong>Ev. Mister Gandhi</strong></div>
        </div>
      </div>
    </section>
  )
}
