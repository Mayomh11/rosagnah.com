import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import PortfolioPage from './components/pages/PortfolioPage'
import BridalPage from './components/pages/BridalPage'
import MadeToMeasurePage from './components/pages/MadeToMeasurePage'
import JournalPage from './components/pages/JournalPage'
import StudioPage from './components/pages/StudioPage'
import ContactPage from './components/pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-black font-light">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/bridal" element={<BridalPage />} />
          <Route path="/made-to-measure" element={<MadeToMeasurePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App