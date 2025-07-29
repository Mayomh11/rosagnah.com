import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface JournalPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  fullContent: string
}

const JournalPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null)

  const journalPosts: JournalPost[] = [
    {
      id: 1,
      title: 'The Women Who Made Me',
      excerpt: 'A reflection on the matriarchs of craft who shaped my understanding of what it means to create with intention.',
      date: 'January 2025',
      category: 'Reflections',
      fullContent: `In the quiet hours before dawn, when the world still sleeps and the studio holds its breath, I find myself thinking about the women who made me. Not just my mother, though she was the first to place fabric in my hands, but the countless seamstresses, tailors, and artisans whose fingerprints live on in every technique I've learned, every pattern I've perfected.

      There was Madame Dubois, who taught me that a seam is not just a joining of fabric, but a promise—a commitment to the woman who will trust her body to your creation. Her hands, weathered by decades of precise work, moved with a grace that spoke of muscle memory refined by repetition and reverence.

      And then there was Rosa, the alterations specialist who worked in the basement of Bergdorf's, whose ability to read a woman's body and understand exactly what she needed—sometimes before the client herself knew—was nothing short of supernatural. She taught me that fitting isn't just about measurements; it's about listening to what remains unspoken.

      Each of these women carried forward a tradition that stretches back centuries, an unbroken chain of knowledge passed from hand to hand, from generation to generation. In my work today, I carry them with me—their wisdom, their standards, their understanding that what we do is not just craft, but a form of care.`
    },
    {
      id: 2,
      title: 'Behind the Seams: Olga\'s Bridal Journey',
      excerpt: 'From our first meeting to her wedding day, the story of how one gown became a symbol of transformation.',
      date: 'December 2024',
      category: 'Case Study',
      fullContent: `Olga arrived at our first consultation carrying a manila folder thick with inspiration images, fabric swatches, and handwritten notes. But more than that, she carried a story—one of heritage, of family traditions interrupted by war and displacement, and of a deep desire to honor her grandmother's memory while creating something entirely her own.

      Her grandmother had been a seamstress in Ukraine, creating wedding gowns for the women in her village until the war changed everything. The only thing that survived the journey to America was a small piece of Venetian lace, carefully preserved through decades of uncertainty.

      As we worked together over the following months, what emerged was more than a wedding dress. It was a dialogue between past and present, between the dreams of a young woman in 1940s Ukraine and the reality of her American granddaughter preparing for her own wedding day.

      The process of creating Olga's gown taught me something profound about the nature of our work. We are not just dressmakers; we are keepers of stories, weavers of dreams, and witnesses to the most important moments in women's lives. Each fitting brought new revelations, new understandings, new connections between what was and what could be.

      On her wedding day, Olga didn't just wear a beautiful dress. She carried her grandmother's legacy forward, transformed but intact, honoring the past while stepping boldly into her future.`
    },
    {
      id: 3,
      title: 'The Art of the Fitting',
      excerpt: 'Why the fitting room is sacred space—where vulnerability meets precision, and garments find their true form.',
      date: 'November 2024',
      category: 'Process',
      fullContent: `The fitting room exists at the intersection of intimacy and expertise, vulnerability and precision. It is here, in this carefully curated space of mirrors and natural light, that the true work of bespoke creation happens.

      A fitting is never just about measurements or adjustments. It is a conversation conducted in fabric and pins, in the subtle adjustments that transform cloth into something that moves and breathes with its wearer. It requires not just technical skill, but a deep empathy—the ability to understand not just how a body moves, but how a woman wants to feel in her clothes.

      I have learned to read the small signs: the unconscious straightening of shoulders when a sleeve falls just right, the quiet exhale when a waist seam finds its perfect placement, the moment when a client first truly sees herself in a garment. These moments of recognition are what we work toward—when technique transcends into transformation.

      The fitting room is also a space of trust. Women share their insecurities here, their hopes, their stories of how clothes have made them feel powerful or diminished, confident or invisible. As a fitter, I hold this trust carefully, understanding that my role extends far beyond the technical aspects of garment construction.

      In the end, a successful fitting is one where the client forgets she is wearing clothes at all—where the garment becomes simply an extension of herself, so perfectly fitted and comfortable that it disappears, leaving only the woman, confident and radiant, exactly as she is meant to be.`
    }
  ]

  const openPost = (post: JournalPost) => {
    setSelectedPost(post)
  }

  const closePost = () => {
    setSelectedPost(null)
  }

  return (
    <div className="pt-12">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.h1 
          className="text-4xl font-light tracking-wide text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Journal
        </motion.h1>
        
        <div className="space-y-16">
          {journalPosts.map((post, index) => (
            <motion.article 
              key={post.id} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => openPost(post)}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="aspect-[4/3] bg-neutral-200 image-hover">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 group-hover:scale-105 transition-transform duration-700"></div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs tracking-wide text-amber-700 bg-amber-50 px-3 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500">{post.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-light tracking-wide mb-4 group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-sm tracking-wide text-black hover:text-amber-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePost}
        >
          <motion.div 
            className="max-w-3xl w-full bg-neutral-50 p-8 my-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-xs tracking-wide text-amber-700 bg-amber-50 px-3 py-1">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-neutral-500">{selectedPost.date}</span>
                </div>
                <h1 className="text-3xl font-light tracking-wide">{selectedPost.title}</h1>
              </div>
              <button 
                onClick={closePost}
                className="text-2xl hover:text-amber-700 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {selectedPost.fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-700 leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default JournalPage