import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const handlePortfolioClick = () => {
    navigate('/portfolio')
  }

  const handleConsultationClick = () => {
    navigate('/contact')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-light tracking-wider mb-8 text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            PRECISION<br />
            <span className="text-amber-700">CRAFTED</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl font-light text-neutral-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Where traditional atelier craftsmanship meets modern femininity. 
            Each garment tells a story of precision, intimacy, and quiet luxury.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              onClick={handlePortfolioClick}
              className="btn-primary"
            >
              VIEW PORTFOLIO
            </button>
            <button 
              onClick={handleConsultationClick}
              className="btn-secondary"
            >
              BOOK CONSULTATION
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Portfolio Card */}
          <motion.div 
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Link to="/portfolio">
              <div className="aspect-[4/5] bg-neutral-200 mb-6 image-hover">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-xl tracking-wide mb-2 group-hover:text-amber-700 transition-colors">Portfolio</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Red carpet moments, editorial excellence, and bespoke creations that define modern elegance.
              </p>
            </Link>
          </motion.div>
          
          {/* Bridal Card */}
          <motion.div 
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Link to="/bridal">
              <div className="aspect-[4/5] bg-neutral-200 mb-6 image-hover">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-xl tracking-wide mb-2 group-hover:text-amber-700 transition-colors">Bridal</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Your most important day deserves a gown as unique as your love story. Crafted with intention and care.
              </p>
            </Link>
          </motion.div>
          
          {/* Journal Card */}
          <motion.div 
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <Link to="/journal">
              <div className="aspect-[4/5] bg-neutral-200 mb-6 image-hover">
                <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-xl tracking-wide mb-2 group-hover:text-amber-700 transition-colors">Journal</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Behind-the-scenes insights, inspiration, and the stories that shape our creative process.
              </p>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage