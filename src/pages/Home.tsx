import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero/Hero'
import Invitations from '../sections/Invitations/Invitations'
import { ProjectDocument } from './Projeto'

export default function Home(){
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#convites') return
    const timer = window.setTimeout(() => {
      document.getElementById('convites')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return <main><Hero/><ProjectDocument/><Invitations/></main>
}
