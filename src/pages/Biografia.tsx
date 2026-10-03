import fotoGandhi from '../assets/images/foto-gandhi.png'

export default function Biografia() {
  return (
    <main id="inicio" className="page">
      <section className="page-hero biography-hero">
        <div className="container biography-layout">
          <div>
            <span className="eyebrow">Biografia do Autor</span>
            <h1>Ev. Mister Gandhi</h1>
            <p>Anathan Gandhi Geththx</p>
          </div>

          <figure className="biography-photo">
            <img src={fotoGandhi} alt="Ev. Mister Gandhi" loading="eager" />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container biography-content">
          <p>
            O autor destes projetos, <strong>Ev. Mister Gandhi</strong> (Anathan Gandhi Geththx), brasileiro,
            neto de indiano (Ásia) e residente no Rio de Janeiro, Brasil, cristão evangélico desde 1974,
            professor da Escola Dominical, multe instrumentista sendo seus instrumentos bateria, guitarra,
            violão, pandeiro e maraca, e é presidente da <strong>Associação A.G.G.A.P.E.</strong> (
            <strong>A</strong>ssociação <strong>A</strong>nathan <strong>G</strong>andhi <strong>G</strong>eththx
            de <strong>A</strong>prendizagem e <strong>P</strong>ropagação do <strong>E</strong>vangelho),
            fundada em Portugal.
          </p>

          <p>
            Foi ungido evangelista em Portugal, onde viveu e trabalhou durante cerca de 20 anos, exercendo a
            profissão de motorista de autocarro (ônibus) e motorista internacional (TIR). É estudante de grego
            e hebraico, fala português do Brasil e comunica-se em espanhol, italiano e um pouco em inglês e
            francês, havendo estudado 6 meses de alemão na Suíça, onde viveu por três anos, quando oportunamente
            conheceu sete países europeus (Portugal, Espanha, Itália, França, Alemanha, Luxemburgo e Inglaterra).
          </p>

          <p>
            Amados pastores, reverendíssimos evangelistas e obreiros, a paz do Senhor Jesus seja convosco. O
            Ev. Mister Gandhi aceita convites para, gratuitamente, expor e explicar em detalhes estes projetos
            em vossas igrejas.
          </p>

          <p className="biography-contact">
            <strong>Contato:</strong>{' '}
            <a href="mailto:mistergandhi10@gmail.com">mistergandhi10@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}
