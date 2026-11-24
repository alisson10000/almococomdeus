import { ChevronDown, Menu, Users, X } from 'lucide-react'
import { type MouseEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContrastTheme } from '../../hooks/useContrastTheme'

const visitorSessionKey = 'almoco-com-deus:visitor-session'

function createVisitorSessionId() {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID()

  const bytes = crypto.getRandomValues(new Uint8Array(16))
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('')
  return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join('-')
}

const links = [
  ['/#convites', 'nav.invitations'],
  ['/igreja-nas-ruas#doacoes', 'nav.donations'],
  ['/fale-conosco#inicio', 'nav.contact'],
]

const languages = [
  ['pt', 'PT', 'language.portuguese'],
  ['it', 'IT', 'language.italian'],
  ['en', 'EN', 'language.english'],
  ['es', 'ES', 'language.spanish'],
  ['fr', 'FR', 'language.french'],
  ['de', 'DE', 'language.german'],
  ['ru', 'RU', 'language.russian'],
]

export default function Header() {
  const location = useLocation()
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [musicOpen, setMusicOpen] = useState(false)
  const { isDark, toggleTheme } = useContrastTheme()
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language
  const [visitorTotal, setVisitorTotal] = useState<number>()

  useEffect(() => {
    const controller = new AbortController()
    let retry: number | undefined

    async function loadVisitorTotal() {
      let response: Response | undefined
      let registered = false
      try {
        const sessionId = sessionStorage.getItem(visitorSessionKey) ?? createVisitorSessionId()
        sessionStorage.setItem(visitorSessionKey, sessionId)

        response = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
          signal: controller.signal,
        })
        registered = response.ok && !!response.headers.get('content-type')?.includes('application/json')
      } catch {
        // A consulta do total continua disponível sem o registro da sessão.
      }

      try {
        if (!registered) {
          response = await fetch('/api/visitors', { signal: controller.signal })
        }
        if (response?.ok) {
          const { total } = await response.json()
          if (!controller.signal.aborted && Number.isSafeInteger(total) && total >= 0) {
            setVisitorTotal(total)
            if (registered) return
          }
        }
      } catch {
        // A indisponibilidade do contador não interfere na navegação.
      }
      if (!controller.signal.aborted) retry = window.setTimeout(loadVisitorTotal, 30_000)
    }

    void loadVisitorTotal()
    return () => {
      controller.abort()
      window.clearTimeout(retry)
    }
  }, [])

  const visitorNumberFormat = new Intl.NumberFormat(activeLanguage, { useGrouping: false })
  const formattedTotal = visitorNumberFormat.format(0).repeat(6) + visitorNumberFormat.format(visitorTotal ?? 0)

  function closeMenu() {
    setOpen(false)
    setProjectsOpen(false)
    setMusicOpen(false)
  }

  function openInvitations(event: MouseEvent<HTMLAnchorElement>) {
    closeMenu()
    if (location.pathname !== '/') return
    event.preventDefault()
    window.setTimeout(() => {
      document.getElementById('convites')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }

  function openHome() {
    closeMenu()
    if (location.pathname !== '/') return
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
  }

  function openMusic() {
    closeMenu()
    if (location.pathname !== '/musicas') return
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
  }

  function openProject(target: string) {
    closeMenu()
    const [pathname, hash] = target.split('#')
    if (location.pathname !== pathname) return

    window.setTimeout(() => {
      if (!hash || hash === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      document.getElementById(hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 300)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark">*</span>
          <span className="brand-content">
            <strong>{t('brand.name')}</strong>
            <small>{t('brand.subtitle')}</small>
          </span>
        </Link>

        <div className="brand-controls">
          <div className="language-flags notranslate" aria-label={t('language.label')}>
            {languages.map(([code, label, titleKey]) => (
              <button
                key={code}
                type="button"
                className={activeLanguage.startsWith(code) ? 'active' : ''}
                aria-label={t(titleKey)}
                aria-pressed={activeLanguage.startsWith(code)}
                title={t(titleKey)}
                onClick={() => i18n.changeLanguage(code)}
              >
                <span className={`flag flag-${code}`} aria-hidden="true" />
                <span className="flag-code">{label}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="contrast-toggle"
            aria-label={isDark ? t('contrast.light') : t('contrast.dark')}
            aria-pressed={isDark}
            title={isDark ? t('contrast.lightTitle') : t('contrast.darkTitle')}
            onClick={toggleTheme}
          >
            <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'}`} aria-hidden="true" />
          </button>
        </div>

        <div className="header-actions">
          <button className="menu-button" aria-label={t('menu.open')} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <nav className={open ? 'nav open' : 'nav'} aria-label="Navegacao principal">
          <NavLink
            to="/#inicio"
            onClick={openHome}
            className={({ isActive }) => (isActive && location.hash !== '#convites' ? 'active' : '')}
          >
            {t('nav.home')}
          </NavLink>

          <NavLink to="/biografia#inicio" onClick={() => openProject('/biografia#inicio')}>
            {t('nav.biography')}
          </NavLink>

          <div className={`projects-menu ${projectsOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="projects-trigger"
              aria-expanded={projectsOpen}
              aria-controls="projects-dropdown"
              onClick={() => setProjectsOpen(!projectsOpen)}
            >
              {t('nav.projects')} <ChevronDown size={16} />
            </button>
            <div className="projects-dropdown" id="projects-dropdown">
              <NavLink to="/fundacao-aggape#inicio" onClick={() => openProject('/fundacao-aggape#inicio')}>
                {t('nav.foundation')}
              </NavLink>
              <NavLink to="/projeto-evangelistico#inicio" onClick={() => openProject('/projeto-evangelistico#inicio')}>
                {t('nav.evangelisticProject')}
              </NavLink>
              <NavLink to="/igreja-nas-ruas#inicio" onClick={() => openProject('/igreja-nas-ruas#inicio')}>
                {t('nav.churchOnStreets')}
              </NavLink>
            </div>
          </div>

          <div className={`projects-menu ${musicOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="projects-trigger"
              aria-expanded={musicOpen}
              aria-controls="music-dropdown"
              onClick={() => setMusicOpen(!musicOpen)}
            >
              {t('nav.music')} <ChevronDown size={16} />
            </button>
            <div className="projects-dropdown" id="music-dropdown">
              <NavLink to="/musicas#inicio" onClick={openMusic}>
                {t('nav.youtubeMusic')}
              </NavLink>
              <NavLink
                to="/projeto-evangelistico#musicas-cd-gandhi"
                onClick={() => openProject('/projeto-evangelistico#musicas-cd-gandhi')}
              >
                {t('nav.musicDownloads')}
              </NavLink>
            </div>
          </div>

          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={
                to === '/#convites'
                  ? openInvitations
                  : to === '/musicas#inicio'
                    ? openMusic
                    : to.startsWith('/projeto-evangelistico') || to.startsWith('/igreja-nas-ruas')
                      ? () => openProject(to)
                      : closeMenu
              }
              className={({ isActive }) => (isActive && to !== '/#convites' ? 'active' : '')}
            >
              {t(label)}
            </NavLink>
          ))}
        </nav>
        <span className="header-visitor-count notranslate" translate="no" role="status">
          <Users size={16} aria-hidden="true" />
          {t('visitorTotal')}: {formattedTotal}
        </span>
      </div>
    </header>
  )
}
