import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Button from '../components/Button/Button'
import rawHomeProjectText from '../data/home-project-text'
import Invitations from '../sections/Invitations/Invitations'

type HomeParagraph = {
  text: string
  highlight?: boolean
  quote?: boolean
  link?: boolean
}

type HomeSection = {
  title: string
  paragraphs: HomeParagraph[]
}

const knownLinks: Record<string, string> = {
  'HOT DOG EM CASA, DELIVERY COM BAIXO INVESTIMENTO! - YouTube':
    'https://www.youtube.com/watch?v=IHkpR54BHC8',
  'CACHORRO QUENTE LUCRE 400% - RENDA EXTRA - APRENDA A FAZER HOT DOG - BARCAS - FRITAS - PORÇÕES':
    'https://www.youtube.com/watch?v=f8y9AALk5Eg',
  'TABELA DE PREÇOS DE CACHORRO-QUENTE: QUANTO COBRAR? QUAL O CUSTO?':
    'https://resumobr.com/tabela-de-precos-de-cachorro-quente/',
  'COMO CALCULAR O CUSTO DO MEU CACHORRO QUENTE. #empreendedorismo':
    'https://www.youtube.com/watch?v=D6TWHTEIiFg&t=35s',
  'CURSO DE CACHORRO QUENTE GOURMET':
    'https://resumobr.com/curso-de-cachorro-quente-gourmet/',
  'HTTPS://SAIPOS.COM/SISTEMA/HAMBURGUERIA/HAMBURGUER-PRECO':
    'https://saipos.com/sistema/hamburgueria/hamburguer-preco',
}

const titlePhrases = [
  'SERÁ QUE VALE A PENA?',
  'SERÁ QUE VALE MESMO A PENA?',
  'O ALMOÇO COM DEUS',
  'Um forte apelo às mulheres e donas de casa',
  'O objetivo principal é evangelizar e conquistar a família',
  'MAS, NA MAIORIA DE NOSSAS IGREJAS, NÃO TEMOS RESTAURANTE! TEMOS, SIM, O PRÓPRIO TEMPLO!',
  'MAS, COM ISSO, NÃO PROFANAMOS O SANTUÁRIO? NÃO O TORNAMOS IMPURO AOS OLHOS DE DEUS?',
  'QUAL É O MELHOR MENU?  O CACHORRO QUENTE, CLARO!',
  'MAS AS MESAS E CADEIRAS SÃO MUITO CARAS!',
  'SUGESTÕES:',
  'QUAIS SÃO OS OBJETIVOS DO ‘Almoço Com Deus’?',
  'AUTORIZAÇÃO PARA IMPRESSÃO GRATUITA DE CONVITES.',
  'FEIJOADA BRASILEIRA GRÁTIS?  HUMMM... DELICIOOOSA!',
  'QUEM PAGA A DESPESA?',
  'VEJA NOS 6 LINKS POSTOS ABAIXO EM LETRA MAIÚSCULA:',
  'QUAL O MELHOR DIA PARA O “ALMOÇO COM DEUS”?',
  'UNAMOS FORÇAS EM PROL DO REINO DE DEUS!',
]

function normalizeTitle(text: string) {
  return text
    .replace(/[“”"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isTitleBlock(text: string) {
  const normalized = normalizeTitle(text)

  return titlePhrases.some(
    (title) => normalizeTitle(title) === normalized,
  )
}

function buildHomeSections(text: string): HomeSection[] {
  const blocks = text
    .split(/\n\s*\n/g)
    .map((block) =>
      block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join('\n'),
    )
    .filter(Boolean)

  const firstTitle =
    blocks.shift() ??
    'O PROJETO EVANGELÍSTICO “ALMOÇO COM DEUS”'

  const sections: HomeSection[] = [
    {
      title: firstTitle,
      paragraphs: [],
    },
  ]

  blocks.forEach((block) => {
    if (isTitleBlock(block)) {
      sections.push({
        title: block,
        paragraphs: [],
      })
      return
    }

    sections[sections.length - 1].paragraphs.push({
      text: block,
      highlight:
        sections.length === 1 &&
        sections[0].paragraphs.length < 2,
      quote:
        block.startsWith('“') ||
        block.startsWith('"'),
      link: block.startsWith('LINK YouTube:'),
    })
  })

  return sections
}

const homeProjectText = buildHomeSections(rawHomeProjectText)

function renderTextWithLinks(text: string) {
  const knownLinkEntry = Object.entries(knownLinks).find(
    ([label]) => text.includes(label),
  )

  if (knownLinkEntry) {
    const [label, href] = knownLinkEntry
    const [before, after = ''] = text.split(label)

    return (
      <>
        {before}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
        {after}
      </>
    )
  }

  const urlPattern = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlPattern)

  return parts.map((part, index) => {
    if (!part.startsWith('http')) {
      return part
    }

    const href = part.replace(/[),.;]+$/, '')
    const suffix = part.slice(href.length)

    return (
      <span key={`${href}-${index}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {href}
        </a>

        {suffix}
      </span>
    )
  })
}

function renderParagraph(
  paragraph: HomeParagraph,
  paragraphIndex: number,
) {
  if (paragraph.highlight) {
    return (
      <p
        key={paragraphIndex}
        className="project-highlight"
      >
        {renderTextWithLinks(paragraph.text)}
      </p>
    )
  }

  if (paragraph.quote) {
    return (
      <blockquote key={paragraphIndex}>
        {renderTextWithLinks(paragraph.text)}
      </blockquote>
    )
  }

  return (
    <p
      key={paragraphIndex}
      className={
        paragraph.link
          ? 'home-link-line'
          : undefined
      }
    >
      {renderTextWithLinks(paragraph.text)}
    </p>
  )
}

function renderSection(
  section: HomeSection,
  sectionIndex: number,
) {
  const sectionClassName =
    sectionIndex === 0
      ? 'section home-document-section home-document-intro'
      : `section home-document-section ${
          sectionIndex % 2 === 0
            ? 'section-soft'
            : ''
        }`

  return (
    <section
      key={`${section.title}-${sectionIndex}`}
      className={sectionClassName}
    >
      <article className="container project-full-text project-document">
        {sectionIndex === 0 ? (
          <h1 className="project-document-title">
            {section.title}
          </h1>
        ) : (
          <h2>
            {section.title}
          </h2>
        )}

        {section.paragraphs.map(
          (
            paragraph: HomeParagraph,
            paragraphIndex: number,
          ) =>
            renderParagraph(
              paragraph,
              paragraphIndex,
            ),
        )}

        {section.paragraphs.some((paragraph) =>
          paragraph.text.includes(
            'Muitas vezes culpamos o diabo por causa de nossa própria imprudência ou imperícia.',
          ),
        ) && (
          <div className="home-project-action">
            <Button to="/projeto#inicio">
              Conheça todo o projeto
            </Button>
          </div>
        )}
      </article>
    </section>
  )
}

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#convites') {
      return
    }

    const timer = window.setTimeout(() => {
      document
        .getElementById('convites')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 300)

    return () => {
      window.clearTimeout(timer)
    }
  }, [location.hash])

  return (
    <main id="inicio">
      {homeProjectText.map(
        (
          section: HomeSection,
          sectionIndex: number,
        ) =>
          renderSection(
            section,
            sectionIndex,
          ),
      )
      }

      <Invitations />
    </main>
  )
}



