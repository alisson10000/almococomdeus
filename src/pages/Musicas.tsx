import SectionTitle from '../components/SectionTitle/SectionTitle'
import MusicCard from '../components/MusicCard/MusicCard'
import { songs } from '../data/songs'

export default function Musicas(){
  return <main className="page"><section className="page-hero"><div className="container"><span className="eyebrow">Gandhi Compositor</span><h1>Músicas do projeto</h1><p>Seleção fornecida pelo autor. Os títulos não informados permanecem neutros para não criar associações incorretas.</p></div></section><section className="section"><div className="container"><SectionTitle title="Ouça no YouTube" text="Clique no botão de reprodução para abrir o player sem carregar todos os vídeos ao mesmo tempo."/><div className="music-grid">{songs.map(s=><MusicCard key={s.id} song={s}/>)}</div></div></section></main>
}
