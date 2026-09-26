import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const timer = window.setTimeout(() => {
      if (location.hash === '#inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }, 300)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return null
}
