import { ChevronDown, Menu, X } from 'lucide-react'
import { type MouseEvent, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['/#inicio', 'Início'], ['/#convites', 'Convites'], ['/musicas#inicio', 'Músicas'],
]

export default function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  function closeMenu() {
    setOpen(false)
    setProjectsOpen(false)
  }

  function openInvitations(event: MouseEvent<HTMLAnchorElement>) {
    closeMenu()
    if (location.pathname !== '/') return
    event.preventDefault()
    window.setTimeout(() => {
      document.getElementById('convites')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }

  function openHome() {
    closeMenu()
    if (location.pathname !== '/') return
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
  }

  function openMusic() {
    closeMenu()
    if (location.pathname !== '/musicas') return
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
  }

  function openProject(target: string) {
    closeMenu()
    const pathname = target.split('#')[0]
    if (location.pathname !== pathname) return
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">✦</span>
          <span><strong>Almoço com Deus</strong><small>Comunhão • Música • Esperança</small></span>
        </Link>
        <button className="menu-button" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
          <NavLink to="/#inicio" onClick={openHome} className={({isActive}) => isActive && location.hash !== '#convites' ? 'active' : ''}>Início</NavLink>
          <div className={`projects-menu ${projectsOpen ? 'open' : ''}`}>
            <button type="button" className="projects-trigger" aria-expanded={projectsOpen} aria-controls="projects-dropdown" onClick={() => setProjectsOpen(!projectsOpen)}>
              Nossos Projetos <ChevronDown size={16} />
            </button>
            <div className="projects-dropdown" id="projects-dropdown">
              <NavLink to="/fundacao-aggape#inicio" onClick={() => openProject('/fundacao-aggape#inicio')}>Fundação AGGAPE</NavLink>
              <NavLink to="/projeto-evangelistico#inicio" onClick={() => openProject('/projeto-evangelistico#inicio')}>Projeto Evangelístico</NavLink>
              <NavLink to="/igreja-nas-ruas#inicio" onClick={() => openProject('/igreja-nas-ruas#inicio')}>A Igreja nas Ruas</NavLink>
            </div>
          </div>
          {links.slice(1).map(([to,label]) => <NavLink key={to} to={to} onClick={to === '/#convites' ? openInvitations : to === '/musicas#inicio' ? openMusic : closeMenu} className={({isActive}) => isActive && to !== '/#convites' ? 'active' : ''}>{label}</NavLink>)}
        </nav>
      </div>
    </header>
  )
}
