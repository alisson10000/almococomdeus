import { X } from 'lucide-react'

export default function YouTubeModal({ youtubeId, title, onClose }: { youtubeId: string; title: string; onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Player ${title}`} onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Fechar player"><X /></button>
        <iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      </div>
    </div>
  )
}
