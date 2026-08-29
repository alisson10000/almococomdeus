import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const links = [
  ['/', 'Início'], ['/projeto', 'O Projeto'], ['/convites', 'Convites'], ['/musicas', 'Músicas'], ['/eventos', 'Eventos'], ['/contato', 'Contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">✦</span>
          <span><strong>Almoço com Deus</strong><small>Comunhão • Música • Esperança</small></span>
        </Link>
        <button className="menu-button" aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
          {links.map(([to,label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
          <Button to="/contato">Quero participar</Button>
        </nav>
      </div>
    </header>
  )
}
