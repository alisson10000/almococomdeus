import type { Invitation } from '../types'
import rainha from '../assets/images/rainha-do-lar.jpeg'
import almoco from '../assets/images/convite-almoco.jpeg'
import hotdog from '../assets/images/convite-hotdog.jpeg'
import rainhaPdf from '../assets/images/rainha-do-lar-pdf.pdf'
import almocoPdf from '../assets/images/convite-almoço-pdf.pdf'
import hotdogPdf from '../assets/images/convite-hotdog-pdf.pdf'
import feijoada from '../assets/images/almoco-feijoada.jpeg'
import cafeDaManha from '../assets/images/cafe-da-manha.jpeg'
import envelope from '../assets/images/convite-envelope.jpeg'
import envelopeDocx from '../assets/images/convite-envelope.docx?url'
import feijoadaPdf from '../assets/images/convite-feijoada-pdf.pdf'
import cafeDaManhaPdf from '../assets/images/convite-cafe-da-manha-pdf.pdf'

export const invitations: Invitation[] = [
  {
    id: 1,
    title: 'À Rainha do Lar',
    description: 'Frente única para todos os convites (Almoço Com Deus, Jantar, café, Cachorro-quente).',
    image: rainha,
    downloadUrl: rainhaPdf,
    downloadName: 'rainha-do-lar-pdf.pdf',
  },

  {
    id: 2,
    title: 'Convite — Almoço Grátis',
    description: 'Verso do convite À Rainha do Lar.',
    image: almoco,
    downloadUrl: almocoPdf,
    downloadName: 'convite-almoco-pdf.pdf',
  },

  {
    id: 3,
    title: 'Convite — Cachorro-Quente',
    description: 'Verso do convite À Rainha do Lar.',
    image: hotdog,
    downloadUrl: hotdogPdf,
    downloadName: 'convite-hotdog-pdf.pdf',
  },

  {
    id: 5,
    title: 'Convite — Almoço com Feijoada',
    description: 'Verso do convite À Rainha do Lar.',
    image: feijoada,
    downloadUrl: feijoadaPdf,
    downloadName: 'convite-feijoada-pdf.pdf',
  },

  {
    id: 6,
    title: 'Convite — Café da Manhã',
    description: 'Verso do convite À Rainha do Lar.',
    image: cafeDaManha,
    downloadUrl: cafeDaManhaPdf,
    downloadName: 'convite-cafe-da-manha-pdf.pdf',
  },

  {
    id: 7,
    title: 'Convite - Imprima no Envelope',
    description: 'Preencha com os dados da sua igreja.',
    image: envelope,
    downloadUrl: envelopeDocx,
    downloadName: 'convite-envelope.docx',
    downloadLabel: 'Baixar documento do word',
  },
]