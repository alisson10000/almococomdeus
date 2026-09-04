import type { Invitation } from '../types'
import rainha from '../assets/images/rainha-do-lar.jpeg'
import almoco from '../assets/images/convite-almoco.jpeg'
import hotdog from '../assets/images/convite-hotdog.jpeg'
import endereco from '../assets/images/convite-endereco.jpeg'
import rainhaPdf from '../assets/images/rainha-do-lar-pdf.pdf'
import almocoPdf from '../assets/images/convite-almoço-pdf.pdf'
import hotdogPdf from '../assets/images/convite-hotdog-pdf.pdf'

export const invitations: Invitation[] = [
  { id: 1, title: 'À Rainha do Lar', description: 'Frente única para todos os convites (Almoço Com Deus, Jantar, café, Cachorro-quente).', image: rainha, downloadUrl: rainhaPdf, downloadName: 'rainha-do-lar-pdf.pdf' },
  { id: 2, title: 'Convite — Almoço Grátis', description: 'Verso do convite para o Almoço com Deus.', image: almoco, downloadUrl: almocoPdf, downloadName: 'convite-almoco-pdf.pdf' },
  { id: 3, title: 'Convite — Cachorro-Quente', description: 'Verso do convite para o Jantar com Deus / hot dog.', image: hotdog, downloadUrl: hotdogPdf, downloadName: 'convite-hotdog-pdf.pdf' },
  { id: 4, title: 'Envelope / Informações do Evento', description: 'Modelo para preencher endereço, data, horário e confirmação.', image: endereco, downloadName: 'convite-informacoes-evento.jpeg' },
]
