import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, Mail, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/bridal', label: 'Bridal' },
    { path: '/made-to-measure', label: 'Made-to-Measure' },
    { path: '/journal', label: 'Journal' },
    { path: '/studio', label: 'Studio' },
    { path: '/contact', label: 'Contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-neutral-50/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl tracking-widest font-light hover:text-amber-700 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              ROSAGNA HERNANDEZ
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-sm tracking-wide">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-amber-700 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-amber-700' : 'text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden z-50 relative"
              onClick={handleMenuToggle}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden bg-neutral-50/95 backdrop-blur-sm"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className="block w-full text-left text-sm tracking-wide hover:text-amber-700 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg tracking-widest mb-4">ROSAGNA HERNANDEZ</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Precision-crafted garments for the discerning woman. 
                Made-to-measure excellence in the heart of New York City.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm tracking-wide mb-4">STUDIO</h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                New York City<br />
                By appointment only<br />
                <a href="mailto:hello@rosagnahernandez.com" className="hover:text-neutral-50 transition-colors">
                  hello@rosagnahernandez.com
                </a>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm tracking-wide mb-4">CONNECT</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="text-neutral-300 hover:text-neutral-50 transition-colors cursor-pointer" />
                </a>
                <a href="mailto:hello@rosagnahernandez.com">
                  <Mail size={20} className="text-neutral-300 hover:text-neutral-50 transition-colors cursor-pointer" />
                </a>
                <a href="tel:+1234567890">
                  <Phone size={20} className="text-neutral-300 hover:text-neutral-50 transition-colors cursor-pointer" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-neutral-800 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-neutral-400 tracking-wide">
              © 2025 Rosagna Hernandez Studio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default Layout