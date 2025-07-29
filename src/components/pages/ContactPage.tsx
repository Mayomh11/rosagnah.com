import React, { useState } from 'react'
import { Mail, Phone, Instagram, MapPin, Clock, Send } from 'lucide-react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  inquiryType: string
  message: string
  budget: string
  timeline: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    budget: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      console.log('Form submitted:', formData)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@rosagnahernandez.com",
      href: "mailto:hello@rosagnahernandez.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (234) 567-8900",
      href: "tel:+1234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York City",
      href: null
    },
    {
      icon: Clock,
      label: "Hours",
      value: "By appointment only",
      href: null
    }
  ]

  if (isSubmitted) {
    return (
      <div className="pt-12 min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-20 h-20 bg-amber-700 rounded-full mx-auto mb-8 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Send className="text-white" size={32} />
          </motion.div>
          
          <h1 className="text-4xl font-light tracking-wide mb-6">Thank You</h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Your message has been received. We will be in touch within 24 hours to discuss your vision 
            and schedule your consultation.
          </p>
          
          <motion.button
            className="btn-secondary"
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                phone: '',
                inquiryType: '',
                message: '',
                budget: '',
                timeline: ''
              })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-12">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h1 
          className="text-4xl font-light tracking-wide text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light tracking-wide mb-6">Let's Begin</h2>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Every exceptional garment begins with a conversation. 
              Whether you're envisioning your dream wedding gown or seeking the perfect bespoke piece, 
              we'd love to hear your story.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                    <info.icon size={16} className="text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wide text-neutral-500 mb-1">{info.label}</h3>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-neutral-700 hover:text-amber-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-neutral-700">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg tracking-wide mb-4">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm tracking-wide mb-2">
                    Name <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border transition-colors focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-neutral-300 focus:border-amber-700'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm tracking-wide mb-2">
                    Email <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border transition-colors focus:outline-none ${
                      errors.email ? 'border-red-500' : 'border-neutral-300 focus:border-amber-700'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm tracking-wide mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-neutral-300 focus:border-amber-700 focus:outline-none transition-colors"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
              
              <div>
                <label className="block text-sm tracking-wide mb-2">
                  Inquiry Type <span className="text-amber-700">*</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full p-3 border transition-colors focus:outline-none ${
                    errors.inquiryType ? 'border-red-500' : 'border-neutral-300 focus:border-amber-700'
                  }`}
                >
                  <option value="">Select an option</option>
                  <option value="bridal">Bridal Consultation</option>
                  <option value="made-to-measure">Made-to-Measure</option>
                  <option value="alterations">Alterations</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press Inquiry</option>
                  <option value="studio-rental">Studio Rental</option>
                  <option value="other">Other</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm tracking-wide mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 border border-neutral-300 focus:border-amber-700 focus:outline-none transition-colors"
                  >
                    <option value="">Select range (optional)</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-20k">$10,000 - $20,000</option>
                    <option value="20k-plus">$20,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm tracking-wide mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-3 border border-neutral-300 focus:border-amber-700 focus:outline-none transition-colors"
                  >
                    <option value="">Select timeline (optional)</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">3-6 months</option>
                    <option value="1-year">6-12 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm tracking-wide mb-2">
                  Message <span className="text-amber-700">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full p-3 border transition-colors focus:outline-none resize-none ${
                    errors.message ? 'border-red-500' : 'border-neutral-300 focus:border-amber-700'
                  }`}
                  placeholder="Tell us about your vision, inspiration, or any specific requirements..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 text-sm tracking-wide transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-neutral-400 text-neutral-200 cursor-not-allowed' 
                    : 'bg-black text-neutral-50 hover:bg-neutral-800'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage