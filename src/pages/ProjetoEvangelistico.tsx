import { Disc3, Download, Headphones, Languages, Radio } from 'lucide-react'
import heroImage from '../assets/images/evangelizacao-longa-distancia-hero.png'
import capaCd1 from '../assets/images/capa_cd1.png'
import capaCd2 from '../assets/images/capa_cd2.png'

export default function ProjetoEvangelistico() {
  return (
    <main className="page evangelism-page">
      <section className="evangelism-hero">
        <img src={heroImage} alt="CD, aparelho de música e caminhos representando a evangelização à longa distância" />
        <div className="evangelism-hero-overlay" />
        <div className="container evangelism-hero-content">
          <span className="eyebrow">1º Projeto Evangelístico</span>
          <h1>Evangelização Constante <em>à Longa Distância</em></h1>
          <p>Uma mensagem cristã que continuava alcançando pessoas por meio da música, mesmo depois que elas deixavam a igreja.</p>
        </div>
      </section>

      <section className="section">
        <div className="container evangelism-intro">
          <article className="evangelism-copy">
            <span className="eyebrow">O início</span>
            <h2>Uma mensagem que atravessou fronteiras</h2>
            <p>Em <strong>1998</strong>, compus e lancei, na Suíça e em Portugal, um <strong>CD Gospel cantado em português</strong>, intitulado <strong>“O Melhor Presente”</strong>.</p>
            <p>O trabalho reunia músicas, playbacks e um livrete com textos em português e alemão. Esse CD fazia parte do meu primeiro projeto evangelístico, chamado <strong>“Evangelização Constante à Longa Distância”</strong>.</p>
            <p>O conteúdo do projeto foi traduzido para <strong>cinco idiomas: espanhol, italiano, francês, inglês e alemão</strong>, além de incluir mensagens faladas em <strong>português e alemão</strong>.</p>
            <p>Na época, o CD era disponibilizado aos irmãos por apenas <strong>0,65 euros, a preço de custo</strong>, para que pudesse ser oferecido aos visitantes das igrejas.</p>
          </article>
          <div className="evangelism-facts">
            <div><Disc3 /><strong>1998</strong><span>Lançamento na Suíça e em Portugal</span></div>
            <div><Languages /><strong>5 idiomas</strong><span>Além de mensagens em português e alemão</span></div>
            <div><Headphones /><strong>Longa distância</strong><span>Em casa, no carro, no trabalho ou em qualquer lugar</span></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container evangelism-copy narrow-copy">
          <span className="eyebrow">O Melhor Presente</span>
          <h2>O principal instrumento do projeto</h2>
          <p>A proposta era simples: depois do culto, a pessoa poderia continuar ouvindo música Gospel e recebendo uma mensagem cristã <strong>em casa, no carro, no trabalho ou em qualquer outro lugar</strong>.</p>
          <p>Foi justamente daí que surgiu o nome <strong>“Evangelização Constante à Longa Distância”</strong>: a mensagem continuava alcançando as pessoas mesmo depois que elas deixavam a igreja.</p>
          <p>Na Suíça, são falados <strong>quatro idiomas e dialetos nacionais</strong>, além das muitas línguas utilizadas por estrangeiros residentes no país. Essa forma de evangelização permitia que a mensagem alcançasse pessoas de diferentes nacionalidades.</p>
        </div>
      </section>

      <section className="section">
        <div className="container media-callout">
          <div className="media-covers">
            <figure><img src={capaCd1} alt="Capa do CD O Melhor Presente com músicas e playbacks" loading="lazy" /><figcaption>Capa do CD “O Melhor Presente”</figcaption></figure>
            <figure><img src={capaCd2} alt="Contracapa do CD O Melhor Presente com lista de músicas" loading="lazy" /><figcaption>Contracapa e repertório</figcaption></figure>
          </div>
          <div>
            <span className="eyebrow">Músicas e playbacks</span>
            <h2>Ouça “O Melhor Presente”</h2>
            <p>Ouça ou faça o download de “O Melhor Presente” e ajude esta mensagem a chegar mais longe.</p>
            <div className="media-actions" aria-label="Recursos que serão disponibilizados futuramente">
              <span><Headphones size={18} /> Ouvir músicas</span>
              <span><Radio size={18} /> Acessar playbacks</span>
              <span><Download size={18} /> Baixar material</span>
            </div>
            <small>Os arquivos de áudio ainda não foram fornecidos.</small>
          </div>
        </div>
      </section>

      <section className="section church-streets">
        <div className="container evangelism-copy narrow-copy">
          <span className="eyebrow">Situação atual</span>
          <h2>Do CD para “A Igreja nas Ruas”</h2>
          <p><strong>Este projeto ficou no passado</strong>, pois nem CD se fabrica mais; mas se você ouvir as músicas e compartilhá-las para  que outros as ouçam, estará nos ajudando a implantar o 3º grande projeto <strong>“A Igreja nas Ruas”</strong>.<br />... Ou então <strong>faça o download gratuito dos 2 CDs completos</strong> e <strong>playbacks</strong> e contribua conforme o Espírito Santo propuser em seu coração. Deus o abençoe.</p>
          <p>O referido projeto é composto por uma van de passageiros ou carrinha de carroceria fechada, que será equipada com <strong>6.000 watts de som automotivo</strong> e cedida gratuitamente às igrejas para evangelização nas praças. O veículo será acompanhado de <strong>um ou mais cantores</strong>.</p>
        </div>
      </section>
    </main>
  )
}
