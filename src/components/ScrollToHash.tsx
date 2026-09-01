import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#inicio') return
    const timer = window.setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return null
}
