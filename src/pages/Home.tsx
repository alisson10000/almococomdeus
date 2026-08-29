import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import HowItWorks from '../sections/HowItWorks/HowItWorks'
import Modalities from '../sections/Modalities/Modalities'
import Objectives from '../sections/Objectives/Objectives'
import Invitations from '../sections/Invitations/Invitations'
import Music from '../sections/Music/Music'
import EventCard from '../components/EventCard/EventCard'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Participate from '../sections/Participate/Participate'
import Contact from '../sections/Contact/Contact'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home(){return <main><Hero/><About/><HowItWorks/><Modalities/><Objectives/><Invitations/><Music/><section className="section"><div className="container"><SectionTitle eyebrow="Agenda" title="Próximos eventos"/><EventCard/></div></section><Participate/><Contact/><WhatsAppButton/></main>}
