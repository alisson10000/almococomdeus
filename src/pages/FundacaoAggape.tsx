import { Mail } from 'lucide-react'
import heroImage from '../assets/images/fundacao-aggape-hero.png'

export default function FundacaoAggape() {
  return (
    <main className="page aggape-page">
      <section className="aggape-hero">
        <img src={heroImage} alt="Bíblia aberta e cruz dourada representando a Fundação AGGAPE" />
        <div className="aggape-hero-overlay" />
        <div className="container aggape-hero-content">
          <span className="eyebrow">Fundação AGGAPE</span>
          <h1>Fundação AGGAPE</h1>
          <p>Fundação Anathan Gandhi Geththx de Aprendizagem e Propagação do Evangelho</p>
          <blockquote>“A serviço da Igreja do Senhor Jesus.”<br />“… E viva a Noiva!”</blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container aggape-layout">
          <article className="aggape-content">
            <span className="eyebrow">Nossa história</span>
            <h2>Uma fundação a serviço do Evangelho</h2>
            <p>Os projetos evangelísticos estarão sob a égide da futura <strong>Fundação AGGAPE — Fundação Anathan Gandhi Geththx de Aprendizagem e Propagação do Evangelho</strong>.</p>
            <p>A instituição foi fundada em Portugal, em <strong>14 de fevereiro de 2003</strong>, inicialmente como <strong>Associação AGGAPE</strong>, à qual foi atribuído o <strong>NIPC P506.313.859</strong>.</p>
            <p>Atualmente encontra-se <strong>inativa</strong>, devido à falta de recursos financeiros e a questões burocráticas.</p>
          </article>

          <aside className="aggape-support">
            <span className="eyebrow">Pedido de apoio profissional</span>
            <h2>Ajude a tornar esta fundação uma realidade</h2>
            <p>Se você é <strong>advogado ou contabilista</strong> e pode ajudar nos procedimentos jurídicos, administrativos e contábeis necessários para tornar a <strong>Fundação AGGAPE</strong> uma realidade, entre em contato:</p>
            <a href="mailto:Almococomdeus10@gmail.com"><Mail size={20} /> Almococomdeus10@gmail.com</a>
            <p className="aggape-praise">Deus seja louvado!</p>
          </aside>
        </div>
      </section>

      <section className="aggape-verse">
        <div className="container">
          <blockquote>“Deus chama as coisas que não são como se já fossem.”</blockquote>
          <cite>Romanos 4:17</cite>
        </div>
      </section>
    </main>
  )
}
