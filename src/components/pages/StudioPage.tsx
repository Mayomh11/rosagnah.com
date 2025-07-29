import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const StudioPage: React.FC = () => {
  const navigate = useNavigate()

  const handleVisitClick = () => {
    navigate('/contact')
  }

  const studioFeatures = [
    {
      title: "Equipment",
      items: [
        "Lectra pattern-making system",
        "Professional steam press",
        "Industrial sewing machines",
        "Specialized pressing equipment",
        "Three-way fitting mirrors"
      ]
    },
    {
      title: "Collaborators",
      items: [
        "Master pattern makers",
        "Specialized embroiderers",
        "Luxury fabric suppliers",
        "Accessories craftspeople",
        "Fitting specialists"
      ]
    },
    {
      title: "Availability",
      items: [
        "Studio rentals available through Peerspace",
        "Photo shoots and collaborations welcomed",
        "Educational workshops by appointment",
        "Private consultations",
        "Trunk show events"
      ]
    }
  ]

  const services = [
    "Private fittings and consultations",
    "Bespoke pattern development",
    "Sample garment creation",
    "Fabric sourcing and selection",
    "Alterations and refinements",
    "Styling consultations"
  ]

  return (
    <div className="pt-12">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h1 
          className="text-4xl font-light tracking-wide text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Studio
        </motion.h1>
        
        <motion.div 
          className="aspect-[16/9] bg-neutral-200 mb-16 image-hover"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-6">Our Space</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Located in the heart of New York City, our studio serves as both creative sanctuary and collaborative workspace. 
              Every detail has been considered to create an environment where ideas flourish and precision thrives.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              From our dedicated fitting rooms to our state-of-the-art cutting tables, 
              each area is designed to support the meticulous process of bespoke creation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-6">Services</h2>
            <ul className="space-y-3 text-neutral-700">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center hover:text-amber-700 transition-colors"
                >
                  <span className="w-2 h-px bg-amber-700 mr-3"></span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {studioFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-lg tracking-wide mb-4">{feature.title}</h3>
              <div className="text-sm text-neutral-600 space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="hover:text-amber-700 transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-neutral-100 p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-light tracking-wide mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit Our Studio
          </motion.h2>
          
          <motion.p 
            className="text-neutral-700 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the artistry of bespoke craftsmanship in person. 
            Schedule a consultation to begin your journey toward the perfect garment.
          </motion.p>
          
          <motion.button 
            className="px-12 py-4 bg-black text-neutral-50 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            onClick={handleVisitClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SCHEDULE A VISIT
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default StudioPage