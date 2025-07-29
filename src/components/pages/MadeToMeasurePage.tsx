import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const MadeToMeasurePage: React.FC = () => {
  const navigate = useNavigate()

  const handleAppointmentClick = () => {
    navigate('/contact')
  }

  const journeySteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We discuss your vision, lifestyle needs, and aesthetic preferences in detail."
    },
    {
      number: "02",
      title: "Design Development",
      description: "Sketches, fabric selection, and detailed planning ensure your vision comes to life."
    },
    {
      number: "03",
      title: "Pattern Creation",
      description: "A unique pattern is drafted specifically for your measurements and preferences."
    },
    {
      number: "04",
      title: "Three Fittings",
      description: "Careful refinement ensures perfect fit and beautiful drape."
    }
  ]

  return (
    <div className="pt-12">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.h1 
          className="text-4xl font-light tracking-wide text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Made-to-Measure
        </motion.h1>
        
        <div className="text-center mb-16">
          <motion.p 
            className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Precision-crafted garments designed specifically for your body, your lifestyle, and your aesthetic vision. 
            Each piece represents months of careful consideration and meticulous craftsmanship.
          </motion.p>
          
          <motion.div 
            className="inline-block px-6 py-2 bg-amber-700 text-neutral-50 text-sm tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            One Look per Month • By Appointment Only
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div 
            className="aspect-square bg-neutral-200 image-hover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-500"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-6">The Journey</h2>
            
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <h3 className="text-lg tracking-wide mb-2 flex items-center">
                    <span className="text-amber-700 mr-3 font-medium">{step.number}.</span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed ml-8">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center bg-neutral-100 p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.blockquote 
            className="text-xl font-light italic text-neutral-700 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "The luxury of truly bespoke clothing lies not in its exclusivity, 
            but in how perfectly it reflects and enhances who you are."
          </motion.blockquote>
          
          <motion.button 
            className="px-12 py-4 bg-black text-neutral-50 text-sm tracking-wide hover:bg-neutral-800 transition-colors"
            onClick={handleAppointmentClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REQUEST AN APPOINTMENT
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default MadeToMeasurePage