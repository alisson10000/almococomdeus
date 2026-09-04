import { Church, Heart, Handshake, Sparkles } from 'lucide-react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { missions } from '../../data/project'
const icons=[Church,Heart,Handshake,Sparkles]
export default function Objectives(){return <section className="section mission"><div className="container"><SectionTitle eyebrow="Nossa missão" title="Acolher primeiro, caminhar juntos depois"/><div className="mission-grid">{missions.map((m,i)=>{const I=icons[i];return <div key={m}><I/><p>{m}</p></div>})}</div></div></section>}
