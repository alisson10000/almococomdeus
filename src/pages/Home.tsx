import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import HowItWorks from '../sections/HowItWorks/HowItWorks'
import Modalities from '../sections/Modalities/Modalities'
import Objectives from '../sections/Objectives/Objectives'
import Invitations from '../sections/Invitations/Invitations'

export default function Home(){
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#convites') return
    const timer = window.setTimeout(() => {
      document.getElementById('convites')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return <main><Hero/><About/><HowItWorks/><Modalities/><Objectives/><Invitations/></main>
}
