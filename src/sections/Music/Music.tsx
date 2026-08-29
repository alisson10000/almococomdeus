import Button from '../../components/Button/Button'
import MusicCard from '../../components/MusicCard/MusicCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { songs } from '../../data/songs'
export default function Music(){const linked=songs.filter(s=>s.youtubeId).slice(0,4);return <section className="section music-section" id="musicas"><div className="container"><div className="section-head-row"><SectionTitle eyebrow="Gandhi Compositor" title="Músicas do projeto" text="Ouça as músicas fornecidas pelo autor. Os players são carregados apenas quando você clicar para reproduzir."/><Button to="/musicas" variant="ghost">Ver músicas</Button></div><div className="music-grid">{linked.map(s=><MusicCard key={s.id} song={s}/>)}</div></div></section>}
