import homeImage from '../assets/images/almoco-ao-ar-livre-hero.png'
import projectImage from '../assets/images/projeto-almoco-hero.png'
import foundationImage from '../assets/images/fundacao-aggape-hero.png'
import evangelismImage from '../assets/images/evangelizacao-longa-distancia-hero.png'
import streetsImage from '../assets/images/igreja-nas-ruas-hero.png'
import invitationImage from '../assets/images/convite-almoco.jpeg'

export interface SeoData {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export const defaultSeo: SeoData = {
  title: 'Almoço com Deus | Comunhão, Acolhimento e Evangelização',
  description: 'Conheça o Almoço com Deus, projeto de confraternização, música, acolhimento e evangelização idealizado por Ev. Mister Gandhi.',
  image: homeImage,
  type: 'website',
}

export const seoByPath: Record<string, SeoData> = {
  '/': defaultSeo,
  '/projeto': {
    title: 'Projeto Almoço com Deus | História e Propósito',
    description: 'Entenda como o Almoço com Deus aproxima famílias e igrejas por meio de refeições, música, comunhão e uma mensagem cristã.',
    image: projectImage,
    type: 'article',
  },
  '/fundacao-aggape': {
    title: 'Fundação AGGAPE | Aprendizagem e Propagação do Evangelho',
    description: 'Conheça a história e o propósito da Fundação AGGAPE, criada para apoiar projetos de aprendizagem e propagação do Evangelho.',
    image: foundationImage,
    type: 'article',
  },
  '/projeto-evangelistico': {
    title: 'Evangelização Constante à Longa Distância | Gandhi Compositor',
    description: 'Conheça o primeiro projeto evangelístico de Gandhi Compositor e a história do CD Gospel O Melhor Presente.',
    image: evangelismImage,
    type: 'article',
  },
  '/igreja-nas-ruas': {
    title: 'A Igreja nas Ruas | Projeto Evangelístico',
    description: 'Projeto para levar música e mensagem cristã a praças, ruas e espaços públicos com uma equipe e um veículo sonorizado.',
    image: streetsImage,
    type: 'article',
  },
  '/musicas': {
    title: 'Músicas de Gandhi Compositor | Almoço com Deus',
    description: 'Ouça as músicas de Gandhi Compositor reunidas pelo projeto Almoço com Deus, com reprodução sob demanda pelo YouTube.',
    image: homeImage,
    type: 'website',
  },
  '/convites': {
    title: 'Convites do Almoço com Deus | Modelos para Download',
    description: 'Veja, amplie e baixe os modelos de convites fornecidos para divulgação do projeto Almoço com Deus.',
    image: invitationImage,
    type: 'website',
  },
}
