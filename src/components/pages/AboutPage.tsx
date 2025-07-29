import React from 'react'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  return (
    <div className="pt-12">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="aspect-[4/5] bg-neutral-200 image-hover"
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
            <h1 className="text-4xl font-light tracking-wide mb-8">The Atelier</h1>
            <div className="space-y-6 text-neutral-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                "I believe in the power of precision—in the way a perfectly placed dart can transform 
                not just fabric, but how a woman carries herself through the world."
              </motion.p>
              
              <motion.blockquote 
                className="border-l-2 border-amber-700 pl-6 italic text-neutral-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Every stitch is a conversation between tradition and innovation, 
                between the garment and the woman who will inhabit it.
              </motion.blockquote>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Founded in the heart of New York City, Rosagna Hernandez Studio represents 
                a return to thoughtful craftsmanship. Here, each garment begins as a conversation, 
                evolves through careful collaboration, and emerges as an extension of its wearer's 
                most authentic self.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Our approach combines time-honored atelier techniques with contemporary sensibilities, 
                creating pieces that honor both heritage and the modern woman's complex life.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage