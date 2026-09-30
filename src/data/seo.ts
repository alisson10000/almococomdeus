import homeImage from '../assets/images/almoco-ao-ar-livre-hero.png'
import projectImage from '../assets/images/projeto-almoco-hero.png'
import foundationImage from '../assets/images/fundacao-aggape-hero.png'
import evangelismImage from '../assets/images/evangelizacao-longa-distancia-hero.png'
import streetsImage from '../assets/images/igreja-nas-ruas-hero.png'
import invitationImage from '../assets/images/convite-almoco.jpeg'

export interface SeoData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export const siteName = 'Almoço com Deus'
export const siteAuthor = 'Ev. Mister Gandhi'
export const siteAuthorAlias = 'Gandhi Compositor'

export const supportedLocales = [
  { code: 'pt-BR', pathCode: 'pt', label: 'Português' },
  { code: 'en', pathCode: 'en', label: 'English' },
  { code: 'es', pathCode: 'es', label: 'Español' },
  { code: 'fr', pathCode: 'fr', label: 'Français' },
  { code: 'de', pathCode: 'de', label: 'Deutsch' },
]

export const seoRoutes = [
  '/',
  '/projeto',
  '/fundacao-aggape',
  '/projeto-evangelistico',
  '/igreja-nas-ruas',
  '/musicas',
  '/convites',
  '/fale-conosco',
]

export const defaultKeywords = [
  'Almoço com Deus',
  'Jantar com Deus',
  'projeto evangelístico',
  'Ev. Mister Gandhi',
  'Gandhi Compositor',
  'música gospel',
  'convites evangelísticos',
  'confraternização cristã',
  'igrejas',
  'famílias',
]

export const defaultSeo: SeoData = {
  title: 'Almoço com Deus | Projeto Evangelístico',
  description:
    'Conheça o projeto Almoço com Deus, uma iniciativa de confraternização, música, acolhimento e evangelização criada por Ev. Mister Gandhi.',
  keywords: defaultKeywords,
  image: homeImage,
  type: 'website',
}

export const seoByPath: Record<string, SeoData> = {
  '/': defaultSeo,
  '/projeto': {
    title: 'Projeto Almoço com Deus | História e Propósito',
    description:
      'Entenda como o Almoço com Deus aproxima famílias e igrejas por meio de refeições, música, comunhão e uma mensagem cristã.',
    keywords: [
      'história do Almoço com Deus',
      'como realizar Almoço com Deus',
      'igrejas e famílias',
      'evangelização com refeições',
    ],
    image: projectImage,
    type: 'article',
  },
  '/fundacao-aggape': {
    title: 'Fundação AGGAPE | Aprendizagem e Propagação do Evangelho',
    description:
      'Conheça a história e o propósito da Fundação AGGAPE, criada para apoiar projetos de aprendizagem e propagação do Evangelho.',
    keywords: [
      'Fundação AGGAPE',
      'aprendizagem do Evangelho',
      'propagação do Evangelho',
      'projetos cristãos',
    ],
    image: foundationImage,
    type: 'article',
  },
  '/projeto-evangelistico': {
    title: 'Evangelização Constante à Longa Distância | Gandhi Compositor',
    description:
      'Conheça o primeiro projeto evangelístico de Gandhi Compositor e a história do CD Gospel O Melhor Presente.',
    keywords: [
      'Gandhi Compositor',
      'CD gospel',
      'O Melhor Presente',
      'evangelização à distância',
      'músicas gospel',
    ],
    image: evangelismImage,
    type: 'article',
  },
  '/igreja-nas-ruas': {
    title: 'A Igreja nas Ruas | Projeto Evangelístico',
    description:
      'Projeto para levar música e mensagem cristã a praças, ruas e espaços públicos com uma equipe e um veículo sonorizado.',
    keywords: [
      'A Igreja nas Ruas',
      'evangelização nas ruas',
      'música gospel nas praças',
      'projeto evangelístico nas ruas',
    ],
    image: streetsImage,
    type: 'article',
  },
  '/musicas': {
    title: 'Músicas de Gandhi Compositor | Almoço com Deus',
    description:
      'Ouça as músicas de Gandhi Compositor reunidas pelo projeto Almoço com Deus, com reprodução sob demanda pelo YouTube.',
    keywords: [
      'músicas de Gandhi Compositor',
      'Gandhi Compositor YouTube',
      'música gospel autoral',
      'playbacks gospel',
    ],
    image: homeImage,
    type: 'website',
  },
  '/convites': {
    title: 'Convites do Almoço com Deus | Modelos para Download',
    description:
      'Veja, amplie e baixe os modelos de convites fornecidos para divulgação do projeto Almoço com Deus.',
    keywords: [
      'convites Almoço com Deus',
      'convite evangelístico',
      'convite para igreja',
      'modelo de convite cristão',
    ],
    image: invitationImage,
    type: 'website',
  },
  '/fale-conosco': {
    title: 'Fale Conosco | Almoço com Deus',
    description:
      'Entre em contato com o projeto Almoço com Deus para participar, apoiar, realizar eventos ou falar sobre as músicas de Gandhi Compositor.',
    keywords: [
      'contato Almoço com Deus',
      'realizar projeto na igreja',
      'participar do Almoço com Deus',
      'Gandhi Compositor contato',
    ],
    image: homeImage,
    type: 'website',
  },
}
