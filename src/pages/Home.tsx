import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Button from '../components/Button/Button'
import rawHomeProjectText from '../data/home-project-text'
import Invitations from '../sections/Invitations/Invitations'

type HomeBlock = {
  text: string
  heading: boolean
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

const headingPhrases = [
  'DOIS COELHOS COM UMA SÓ CAJADADA',
  '... MAS será que vale a pena?',
  '... Será que vale mesmo a pena?',
  'O ALMOÇO COM DEUS',
  'É UM BOM PRETEXTO PARA LEVAR NOSSOS FAMILIARES NÃO CRISTÃOS À IGREJA.',
  'UM FORTE APELO ÀS MULHERES E DONAS DE CASA',
  'O OBJETIVO PRINCIPAL É EVANGELIZAR E CONQUISTAR A FAMÍLIA',
  'MAS, NA MAIORIA DE NOSSAS IGREJAS, NÃO TEMOS RESTAURANTE; TEMOS, SIM, O PRÓPRIO TEMPLO!',
  'MAS, COM ISSO, NÃO PROFANAMOS O SANTUÁRIO? NÃO O TORNAMOS IMPURO AOS OLHOS DE DEUS?',
  'QUAL É O MELHOR CARDÁPIO?  O CARDÁPIO BARATO, DE PREPARO RÁPIDO E FÁCIL',
  'CONTUDO, SUGIRO QUE O CARDÁPIO PARA UMA PRIMEIRA VEZ SEJA O CACHORRO-QUENTE',
  'MAS AS MESAS E CADEIRAS SÃO MUITO CARAS!',
  'SUGESTÕES:',
  'QUAIS SÃO OS OBJETIVOS DO ‘Almoço Com Deus’?',
  'AUTORIZAÇÃO PARA IMPRESSÃO GRATUITA DE CONVITES.',
  'FEIJOADA BRASILEIRA GRÁTIS?  HUMMM... DELICIOOOSA!',
  'QUEM PAGA A DESPESA?',
  'VEJA NOS 6 LINKS POSTOS ABAIXO EM LETRA MAIÚSCULA:',
  'QUAL O MELHOR DIA PARA O “ALMOÇO COM DEUS”?',
  'IGREJAS UNIDAS EM PROL DO REINO DE DEUS!',
]

function normalizeText(text: string) {
  return text
    .replace(/[“”"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isHeadingText(text: string) {
  const normalized = normalizeText(text)
  const letters = normalized.replace(/[^A-Za-zÀ-ÿ]/g, '')

  return (
    headingPhrases.some(
      (phrase) => normalizeText(phrase) === normalized,
    ) ||
    (normalized.length <= 120 &&
      letters.length > 3 &&
      normalized === normalized.toUpperCase())
  )
}

function buildBlocks(text: string): HomeBlock[] {
  return text
    .split(/\n\s*\n/g)
    .map((block) => block.trimEnd())
    .filter((block) => block.trim().length > 0)
    .map((block) => ({
      text: block,
      heading: isHeadingText(block),
    }))
}

const homeBlocks = buildBlocks(rawHomeProjectText)

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

  const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const markdownParts = text.split(markdownLinkPattern)

  if (markdownParts.length > 1) {
    const rendered = []

    for (let index = 0; index < markdownParts.length; index += 3) {
      rendered.push(markdownParts[index])

      if (markdownParts[index + 1] && markdownParts[index + 2]) {
        rendered.push(
          <a
            key={`${markdownParts[index + 1]}-${index}`}
            href={markdownParts[index + 2]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {markdownParts[index + 1]}
          </a>,
        )
      }
    }

    return rendered
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

function renderBlock(block: HomeBlock, index: number) {
  if (index === 0) {
    return (
      <h1
        key={index}
        className="project-document-title"
      >
        {block.text}
      </h1>
    )
  }

  if (block.heading) {
    return <h2 key={index}>{block.text}</h2>
  }

  return (
    <p
      key={index}
      className={
        normalizeText(block.text).startsWith('LINK YouTube:') ||
        normalizeText(block.text).startsWith('Link:')
          ? 'home-link-line'
          : undefined
      }
    >
      {block.text.split('\n').map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`}>
          {lineIndex > 0 && <br />}
          {renderTextWithLinks(line)}
        </span>
      ))}
    </p>
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
      <section className="section home-document-section home-document-intro">
        <article className="container project-full-text project-document">
          {homeBlocks.map(renderBlock)}

          <div className="home-project-action">
            <Button to="/projeto#inicio">
              Conheça todo o projeto
            </Button>
          </div>
        </article>
      </section>

      <Invitations />
    </main>
  )
}
