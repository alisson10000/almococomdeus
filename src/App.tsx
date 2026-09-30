import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GoogleTranslateManager from './components/GoogleTranslateManager'
import ScrollToHash from './components/ScrollToHash'
import SeoManager from './components/SeoManager'

const Home = lazy(() => import('./pages/Home'))
const Projeto = lazy(() => import('./pages/Projeto'))
const FundacaoAggape = lazy(() => import('./pages/FundacaoAggape'))
const ProjetoEvangelistico = lazy(() => import('./pages/ProjetoEvangelistico'))
const IgrejaNasRuas = lazy(() => import('./pages/IgrejaNasRuas'))
const Musicas = lazy(() => import('./pages/Musicas'))
const Convites = lazy(() => import('./pages/Convites'))
const FaleConosco = lazy(() => import('./pages/FaleConosco'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div className="site-shell">
      <GoogleTranslateManager />
      <Header />
      <SeoManager />
      <ScrollToHash />
      <Suspense fallback={<main className="page-loader">Carregando...</main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/fundacao-aggape" element={<FundacaoAggape />} />
          <Route path="/projeto-evangelistico" element={<ProjetoEvangelistico />} />
          <Route path="/igreja-nas-ruas" element={<IgrejaNasRuas />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/convites" element={<Convites />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
