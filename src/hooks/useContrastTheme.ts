import { useEffect, useState } from 'react'

type ContrastTheme = 'light' | 'dark'

const storageKey = 'almoco-com-deus-contrast-theme'

function getInitialTheme(): ContrastTheme {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem(storageKey)
  if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useContrastTheme() {
  const [theme, setTheme] = useState<ContrastTheme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.contrastTheme = theme
    document.documentElement.dataset.bsTheme = theme
    window.localStorage.setItem(storageKey, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return {
    isDark: theme === 'dark',
    theme,
    toggleTheme,
  }
}
