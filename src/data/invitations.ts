import type { Invitation } from '../types'
import rainha from '../assets/images/rainha-do-lar.jpeg'
import almoco from '../assets/images/convite-almoco.jpeg'
import hotdog from '../assets/images/convite-hotdog.jpeg'
import endereco from '../assets/images/convite-endereco.jpeg'

export const invitations: Invitation[] = [
  { id: 1, title: 'À Rainha do Lar', description: 'Arte frontal com coroa dourada e mensagem de carinho.', image: rainha, downloadName: 'rainha-do-lar.jpeg' },
  { id: 2, title: 'Convite — Almoço Grátis', description: 'Verso do convite para o Almoço com Deus.', image: almoco, downloadName: 'convite-almoco.jpeg' },
  { id: 3, title: 'Convite — Cachorro-Quente', description: 'Verso do convite para o Jantar com Deus / hot dog.', image: hotdog, downloadName: 'convite-cachorro-quente.jpeg' },
  { id: 4, title: 'Envelope / Informações do Evento', description: 'Modelo para preencher endereço, data, horário e confirmação.', image: endereco, downloadName: 'convite-informacoes-evento.jpeg' },
]
