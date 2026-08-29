import { Coffee, MoonStar, Sandwich, Sun, UtensilsCrossed } from 'lucide-react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { modalities } from '../../data/project'
const icons = [UtensilsCrossed, MoonStar, Sandwich, Coffee, Sun]
export default function Modalities(){return <section className="section"><div className="container"><SectionTitle eyebrow="Formatos" title="Um projeto, várias possibilidades" text="Cada igreja pode adaptar o encontro à sua realidade e estrutura."/><div className="card-grid">{modalities.map((m,i)=>{const Icon=icons[i];return <article className="feature-card" key={m.title}><Icon/><h3>{m.title}</h3><p>{m.text}</p></article>})}</div></div></section>}
