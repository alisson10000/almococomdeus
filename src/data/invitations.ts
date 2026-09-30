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
import almocoSemSorteio from '../assets/images/almoco-sem-sorteio.jpeg'
import cachorroQuenteSemSorteio from '../assets/images/cachorro-quente-sem-sorteio.jpeg'
import cafeSemSorteio from '../assets/images/cafe-sem-sorteio.jpeg'
import feijoadaSemSorteio from '../assets/images/feijoada-sem-sorteio.jpeg'
import almocoSemSorteioPdf from '../assets/images/almoco-sem-sorteio.pdf'
import cachorroQuenteSemSorteioPdf from '../assets/images/cachorro-quente-sem-sorteio.pdf'
import cafeSemSorteioPdf from '../assets/images/cafe-sem-sorteio.pdf'
import feijoadaSemSorteioPdf from '../assets/images/feijoada-sem-sorteio.pdf'

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
    title: 'Convite - imprima no papel adesivo e cole no envelope',
    description: 'Preencha com os dados da sua igreja.',
    image: envelope,
    downloadUrl: envelopeDocx,
    downloadName: 'convite-envelope.docx',
    downloadLabel: 'Baixar documento do word',
  },

  {
    id: 8,
    title: 'Convite — Almoço sem sorteio',
    description: 'Convite - almoço sem o sorteio de 50 reais.',
    image: almocoSemSorteio,
    downloadUrl: almocoSemSorteioPdf,
    downloadName: 'almoco-sem-sorteio.pdf',
  },

  {
    id: 9,
    title: 'Convite — Cachorro-quente sem sorteio',
    description: 'Convite cachorro quente sem sorteio de 50 reais.',
    image: cachorroQuenteSemSorteio,
    downloadUrl: cachorroQuenteSemSorteioPdf,
    downloadName: 'cachorro-quente-sem-sorteio.pdf',
  },

  {
    id: 10,
    title: 'Convite — Café da manhã sem sorteio',
    description: 'Convite - cafe da manha sem o sorteio de 50 reais.',
    image: cafeSemSorteio,
    downloadUrl: cafeSemSorteioPdf,
    downloadName: 'cafe-sem-sorteio.pdf',
  },

  {
    id: 11,
    title: 'Convite — Feijoada sem sorteio',
    description: 'Convite - feijoada sem o sorteio de 50 reais.',
    image: feijoadaSemSorteio,
    downloadUrl: feijoadaSemSorteioPdf,
    downloadName: 'feijoada-sem-sorteio.pdf',
  },
]
