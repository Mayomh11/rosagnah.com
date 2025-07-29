import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const BridalPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBookingClick = () => {
    navigate('/contact')
  }

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We begin with tea and conversation, understanding your vision, your story, and your dreams for this most special day."
    },
    {
      number: 2,
      title: "Design & Sketch",
      description: "Together, we sketch your gown, selecting fabrics, discussing details, and ensuring every element reflects your unique aesthetic."
    },
    {
      number: 3,
      title: "Three Fittings",
      description: "Through careful fittings, we refine and perfect, ensuring your gown moves with you beautifully and feels like a second skin."
    }
  ]

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-light tracking-wider mb-4">Bridal</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Your most important day deserves a gown as unique as your love story
          </p>
        </motion.div>
      </section>

      {/* Case Study */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            className="aspect-[3/4] bg-neutral-200 image-hover"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-300"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light tracking-wide mb-6">Olga's Gown</h2>
            
            <motion.p 
              className="text-neutral-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              When Olga first walked into our studio, she carried with her a vision that went beyond fabric and thread. 
              She spoke of her grandmother's lace, of wanting to honor tradition while stepping boldly into her future.
            </motion.p>
            
            <motion.p 
              className="text-neutral-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Over six months, through three careful fittings and countless conversations, we created more than a dress—
              we crafted a moment of transformation, a bridge between her past and the woman she was becoming.
            </motion.p>
            
            <motion.blockquote 
              className="border-l-2 border-amber-700 pl-6 italic text-neutral-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              "The first time I put on the finished gown, I cried. Not because it was beautiful—though it was—
              but because I finally saw myself as the bride I had always dreamed of being."
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Process */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-light tracking-wide mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-amber-700 rounded-full mx-auto mb-6 flex items-center justify-center text-neutral-50 text-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-lg tracking-wide mb-4">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-12 py-4 bg-amber-700 text-neutral-50 text-sm tracking-wide hover:bg-amber-800 transition-colors"
            onClick={handleBookingClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BEGIN YOUR GOWN JOURNEY
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default BridalPage