import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Home = lazy(() => import('./pages/Home'))
const Projeto = lazy(() => import('./pages/Projeto'))
const Musicas = lazy(() => import('./pages/Musicas'))
const Convites = lazy(() => import('./pages/Convites'))
const Eventos = lazy(() => import('./pages/Eventos'))
const Contato = lazy(() => import('./pages/Contato'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <Suspense fallback={<main className="page-loader">Carregando...</main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/convites" element={<Convites />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
