import React, { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioItem {
  id: number
  category: string
  title: string
  year: string
  description?: string
}

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null)

  const portfolioItems: PortfolioItem[] = [
    { 
      id: 1, 
      category: 'red-carpet', 
      title: 'Gala Gown', 
      year: '2024',
      description: 'A stunning red carpet moment featuring hand-beaded silk organza with architectural draping. Crafted for a prominent figure in the arts, this gown exemplifies our commitment to creating pieces that command attention while maintaining elegant sophistication.'
    },
    { 
      id: 2, 
      category: 'editorial', 
      title: 'Editorial Suite', 
      year: '2024',
      description: 'Featured in Vogue\'s autumn issue, this collection of separates demonstrates the versatility of bespoke tailoring. Each piece was designed to work independently while creating a cohesive story of modern femininity.'
    },
    { 
      id: 3, 
      category: 'custom', 
      title: 'Bespoke Blazer', 
      year: '2023',
      description: 'A reimagining of the classic power blazer, featuring subtle waist shaping and hand-finished details. Created for a CEO who wanted to challenge conventional boardroom attire while maintaining authority and grace.'
    },
    { 
      id: 4, 
      category: 'red-carpet', 
      title: 'Award Show Ensemble', 
      year: '2024',
      description: 'This dramatic ensemble made headlines at the Emmy Awards. The intricate beadwork took over 200 hours to complete, creating a piece that captured light and movement with every step.'
    },
    { 
      id: 5, 
      category: 'editorial', 
      title: 'Magazine Feature', 
      year: '2023',
      description: 'Shot for Harper\'s Bazaar\'s craftsmanship feature, this piece showcases traditional couture techniques adapted for the contemporary woman. Every seam tells a story of heritage and innovation.'
    },
    { 
      id: 6, 
      category: 'custom', 
      title: 'Wedding Guest Dress', 
      year: '2024',
      description: 'A celebration of understated elegance, this dress was created for a discerning client attending her daughter\'s wedding. The piece balances formality with comfort, allowing the wearer to feel both appropriate and authentically herself.'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'red-carpet', label: 'Red Carpet' },
    { key: 'editorial', label: 'Editorial' },
    { key: 'custom', label: 'Custom' }
  ]

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter)

  const handleFilterChange = (category: string) => {
    setFilter(category)
  }

  const openModal = (item: PortfolioItem) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="pt-12">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 
          className="text-4xl font-light tracking-wide text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h1>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-8 text-sm tracking-wide">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => handleFilterChange(category.key)}
                className={`hover:text-amber-700 transition-colors duration-300 relative ${
                  filter === category.key ? 'text-amber-700' : 'text-neutral-600'
                }`}
              >
                {category.label}
                {filter === category.key && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-amber-700"
                    layoutId="activeFilter"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openModal(item)}
              >
                <div className="aspect-[4/5] bg-neutral-200 mb-4 image-hover">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-500 group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                <h3 className="text-lg tracking-wide group-hover:text-amber-700 transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.year}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="max-w-4xl w-full bg-neutral-50 p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl tracking-wide">{selectedImage.title}</h2>
                <button 
                  onClick={closeModal}
                  className="hover:text-amber-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="aspect-[16/9] bg-neutral-200 mb-6">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-500"></div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-amber-700 bg-amber-50 px-3 py-1 tracking-wide">
                  {selectedImage.category.replace('-', ' ').toUpperCase()}
                </span>
                <span className="text-sm text-neutral-500">{selectedImage.year}</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                {selectedImage.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PortfolioPage