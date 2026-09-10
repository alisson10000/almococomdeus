import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><h3>Almoço com Deus</h3><p>Projeto evangelístico de confraternização e acolhimento.</p><p><strong>Idealizador:</strong> Ev. Mister Gandhi</p></div>
        <div><h4>Links rápidos</h4><Link to="/projeto">O Projeto</Link><Link to="/convites">Convites</Link><Link to="/musicas">Músicas</Link></div>
        <div><h4>Gandhi Compositor</h4><p>As músicas fornecidas pelo autor estão reunidas na área de músicas do projeto.</p></div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Almoço com Deus. Conteúdo do projeto conforme material fornecido pelo autor.</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo da página">
            <ArrowUp size={17} /> Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  )
}
