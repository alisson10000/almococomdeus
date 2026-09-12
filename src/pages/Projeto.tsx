import projectPageText from '../data/project-page-text'

const knownProjectLinks: Record<string, string> = {
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

function normalizeText(text: string) {
  return text
    .replace(/[“”".]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function isHeadingBlock(block: string, index: number) {
  if (index === 0) {
    return true
  }

  const oneLine = block.replace(/\s+/g, ' ').trim()
  const normalized = normalizeText(oneLine)
  const letters = normalized.replace(/[^A-Za-zÀ-ÿ]/g, '')
  const upperLetters = letters.replace(/[^A-ZÀ-Ý]/g, '')
  const upperRatio = letters.length > 0 ? upperLetters.length / letters.length : 0

  return (
    oneLine.length <= 95 &&
    !/[.!?]$/.test(oneLine) &&
    (upperRatio > 0.72 ||
      oneLine.endsWith('?') ||
      oneLine.includes('Culto Relâmpago') ||
      oneLine.includes('Festa na casa') ||
      oneLine.includes('Multiforme Evangelismo'))
  )
}

function renderTextWithLinks(text: string) {
  const knownLinkEntry = Object.entries(knownProjectLinks).find(
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

function ProjectBlock({
  block,
  index,
}: {
  block: string
  index: number
}) {
  const text = block.trim()

  if (isHeadingBlock(text, index)) {
    if (index === 0) {
      return (
        <h1 className="project-document-title">
          {text}
        </h1>
      )
    }

    return <h2>{text}</h2>
  }

  if (text.startsWith('“') || text.startsWith('"')) {
    return (
      <blockquote>
        {renderTextWithLinks(text)}
      </blockquote>
    )
  }

  return <p>{renderTextWithLinks(text)}</p>
}

export function ProjectDocument() {
  const blocks = projectPageText
    .split(/\n\s*\n/g)
    .map((block) => block.trim())
    .filter(Boolean)

  return (
    <section className="section project-document-page" id="inicio">
      <article className="container project-full-text project-document">
        {blocks.map((block, index) => (
          <ProjectBlock
            key={`${index}-${block.slice(0, 24)}`}
            block={block}
            index={index}
          />
        ))}
      </article>
    </section>
  )
}

export default function Projeto() {
  return (
    <main className="page">
      <ProjectDocument />
    </main>
  )
}
