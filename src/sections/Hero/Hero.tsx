import { HeartHandshake, Music2, Users } from 'lucide-react'
import heroImage from '../../assets/images/almoco-ao-ar-livre-hero.png'
import Button from '../../components/Button/Button'

export default function Hero() {
  function scrollToProject() {
    window.setTimeout(() => {
      document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }

  return (
    <section className="home-hero" id="inicio">
      <img src={heroImage} alt="Famílias e amigos compartilhando um almoço ao ar livre em uma área verde" />
      <div className="home-hero-overlay" />
      <div className="container home-hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Projeto evangelístico de acolhimento</span>
          <h1>Almoço <em>com Deus</em></h1>
          <p className="hero-lead">Uma mesa preparada para receber famílias, compartilhar alegria, música, comunhão e a Palavra de Deus.</p>
          <p>Conheça uma iniciativa criada para aproximar pessoas, famílias e igrejas por meio de momentos especiais de acolhimento e confraternização.</p>
          <div className="hero-actions"><Button onClick={scrollToProject}>Conheça o projeto</Button></div>
          <div className="hero-points"><span><Users/> Famílias</span><span><Music2/> Música</span><span><HeartHandshake/> Comunhão</span></div>
          <p className="home-hero-author">Idealizado por <strong>Ev. Mister Gandhi</strong></p>
        </div>
      </div>
    </section>
  )
}
