import { HeartHandshake, Mail, MapPin, Truck, Users, Volume2 } from 'lucide-react'
import heroImage from '../assets/images/igreja-nas-ruas-hero.png'
import carro1 from '../assets/images/carro1.png'
import carro2 from '../assets/images/carro2.png'
import qrCode from '../assets/images/qrcode.png'

export default function IgrejaNasRuas() {
  return (
    <main className="page streets-page">
      <section className="streets-hero">
        <img src={heroImage} alt="Equipe evangelística cantando ao lado de uma van em uma praça pública" />
        <div className="streets-hero-overlay" />
        <div className="container streets-hero-content">
          <span className="eyebrow">3º Projeto Evangelístico</span>
          <h1>A Igreja <em>nas Ruas</em></h1>
          <p>Levando a mensagem do Evangelho para praças, ruas e espaços públicos.</p>
        </div>
      </section>

      <section className="section">
        <div className="container streets-intro streets-intro-full">
          <article className="streets-copy streets-project-copy">
            <span className="eyebrow">O projeto</span>
            <h2>O Evangelho mais perto das pessoas</h2>
            <p>O projeto <strong>“A Igreja nas Ruas”</strong> tem como objetivo levar a mensagem do Evangelho para <strong>praças, ruas e espaços públicos</strong>.</p>
            <p>A proposta é disponibilizar gratuitamente o veículo às igrejas para a realização de trabalhos evangelísticos em praças e outros espaços públicos.</p>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="streets-section-heading">
            <span className="eyebrow">O veículo</span>
            <h2>Modelos para apresentar o projeto</h2>
            <p>Uma van de passageiros, Kombi ou veículo de carroceria fechada poderá ser preparado especialmente para evangelização. As caixas de som poderão ocupar praticamente todo o teto, demonstrando visualmente a proposta.</p>
          </div>
          <div className="vehicle-models">
            <figure>
              <div><img src={carro1} alt="Modelo conceitual de van de passageiros sonorizada" loading="lazy" /></div>
              <figcaption><strong>Van de passageiros sonorizada</strong><span>Imagem conceitual do modelo pretendido.</span></figcaption>
            </figure>
            <figure>
              <div><img src={carro2} alt="Modelo conceitual de veículo de carroceria fechada sonorizado" loading="lazy" /></div>
              <figcaption><strong>Veículo de carroceria fechada</strong><span>Imagem conceitual do modelo pretendido.</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section donation-section">
        <div className="container donation-layout">
          <article className="streets-copy">
            <span className="eyebrow">Campanha de doação do veículo</span>
            <h2>Ajude este projeto a chegar às ruas</h2>
            <p>Estamos aceitando a doação de <strong>Kombi, van de carroceria ou van de passageiros para nove ou mais pessoas</strong>, de qualquer <strong>ano ou marca</strong>, desde que possa levar uma pequena equipe para que possamos sonorizá-la.</p>
            <p>O veículo recebido será preparado e sonorizado para utilização no projeto evangelístico <strong>“A Igreja nas Ruas”</strong>.</p>
            <p>Também aceitamos <strong>aparelhagem de som automotiva</strong> para realizar as atividades ao ar livre.</p>
            <div className="donation-vehicle"><Truck size={38} /><span>Caso queira contribuir com qualquer quantia, mesmo que pequena, seremos muito gratos.</span></div>
            <p><strong>Deus vos abençoe.</strong></p>
          </article>

          <aside className="donation-card">
            <HeartHandshake size={38} />
            <h3>Como apoiar</h3>
            <a href="mailto:Almococomdeus10@gmail.com"><Mail size={19} /> Almococomdeus10@gmail.com</a>
            <div className="donation-pix">
              <span>PIX</span>
              <p><strong>Chave:</strong> Almococomdeus10@gmail.com</p>
              <p><strong>Nome:</strong> Anathan Gandhi Geththx</p>
              <p><strong>Banco:</strong> Santander</p>
            </div>
            <div className="donation-bank">
              <span>Conta bancária internacional</span>
              <p><strong>Beneficiary Name:</strong> ANATHAN GANDHI GETHTHX</p>
              <p><strong>Currency:</strong> USD Dolar dos Eua</p>
              <p><strong>Beneficiary Bank:</strong> BANCO SANTANDER (BRASIL) S.A.</p>
              <p><strong>SWIFT - Beneficiary Bank:</strong> BSCHBRSPXXX</p>
              <p><strong>IBAN:</strong> BR5190400888013910010626836C1</p>
              <p><strong>Correspondent Bank:</strong> STANDARD CHARTERED BANK</p>
              <p><strong>SWIFT - Correspondent Bank:</strong> SCBLUS33XXX</p>
            </div>
            <div className="donation-qrcode" id="doacoes">
              <img src={qrCode} alt="QR Code para contribuição via PIX" loading="lazy" />
              <span>Escaneie o QR Code para contribuir</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
