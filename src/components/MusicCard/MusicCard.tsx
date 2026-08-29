import { ExternalLink, Play } from 'lucide-react'
import { useState } from 'react'
import type { Song } from '../../types'
import YouTubeModal from '../YouTubeModal/YouTubeModal'

export default function MusicCard({ song }: { song: Song }) {
  const [playing, setPlaying] = useState(false)
  const thumb = song.youtubeId ? `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg` : null
  return (
    <article className="music-card">
      <div className="music-thumb">
        {thumb ? <img src={thumb} alt={`Capa do vídeo ${song.title}`} loading="lazy" /> : <div className="music-placeholder">♪</div>}
        {song.youtubeId && <button aria-label={`Reproduzir ${song.title}`} onClick={() => setPlaying(true)}><Play fill="currentColor" /></button>}
      </div>
      <div className="music-body">
        <span className="music-kicker">Gandhi Compositor</span>
        <h3>{song.title}</h3>
        {!song.titleVerified && <small>Título não informado no material original.</small>}
        {song.youtubeUrl ? <a href={song.youtubeUrl} target="_blank" rel="noreferrer">Abrir no YouTube <ExternalLink size={15}/></a> : <span className="muted">Link ainda não associado.</span>}
      </div>
      {playing && song.youtubeId && <YouTubeModal youtubeId={song.youtubeId} title={song.title} onClose={() => setPlaying(false)} />}
    </article>
  )
}
