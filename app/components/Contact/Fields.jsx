'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'
import Splittext from '../Engine/Splittext'

const text = ["Have a project in mind? Fill out the form below and I'll get back to you as soon as possible."]

export default function Fields() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Smooth scroll animation for the section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      }
    })

    // Animation for form elements
    gsap.from(formRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://your-api-endpoint.com/contact', formData)
      
      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          country: '',
          description: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Hide status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section 
      ref={sectionRef} 
      className="min-h-full py-10 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-20">
          <Splittext
            text={text.join(' ')}
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-medium leading-snug md:leading-snug gap-y-1 lg:gap-y-3 tracking-wide max-w-4xl mx-auto text-center"
            delay={30}
          />
        </div>
        
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-transparent rounded-lg mt-10 md:mt-20 max-w-7xl mx-auto"
        >
          {submitStatus === 'success' && (
            <div className="p-4 mb-6 rounded bg-green-900 text-green-100 text-sm md:text-base">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 mb-6 rounded bg-red-900 text-red-100 text-sm md:text-base">
              Something went wrong. Please try again later.
            </div>
          )}
          
          {/* Name Field */}
          <div className="relative border-b border-white/30 pb-1">
            <label htmlFor="name" className="block text-xs md:text-sm font-light text-white/70 mb-1">
              Your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 bg-transparent text-white placeholder-white/30 focus:outline-none text-sm md:text-base border-none focus:ring-0"
              placeholder=""
            />
          </div>
          
          {/* Phone Field */}
          <div className="relative border-b border-white/30 pb-1">
            <label htmlFor="phone" className="block text-xs md:text-sm font-light text-white/70 mb-1">
              Phone:
            </label>
            <div className="flex items-center">
              <span className="text-white text-sm md:text-base mr-2">+91</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent text-white placeholder-white/30 focus:outline-none text-sm md:text-base border-none focus:ring-0"
                placeholder="• 50 123 4567"
              />
            </div>
          </div>
          
          {/* Email Field */}
          <div className="relative border-b border-white/30 pb-1">
            <label htmlFor="email" className="block text-xs md:text-sm font-light text-white/70 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 bg-transparent text-white placeholder-white/30 focus:outline-none text-sm md:text-base border-none focus:ring-0"
              placeholder=""
            />
          </div>
          
          {/* Country/City Field */}
          <div className="relative border-b border-white/30 pb-1">
            <label htmlFor="country" className="block text-xs md:text-sm font-light text-white/70 mb-1">
              Country/City:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-0 py-2 bg-transparent text-white placeholder-white/30 focus:outline-none text-sm md:text-base border-none focus:ring-0"
              placeholder=""
            />
          </div>
          
          {/* Project Details */}
          <div className="relative border-b border-white/30 pb-1">
            <label htmlFor="description" className="block text-xs p-3 md:text-sm font-light text-white/70 mb-1">
              Project details:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-0 py-2 bg-transparent text-white placeholder-white/30 focus:outline-none text-sm md:text-base border-none focus:ring-0 resize-none"
              placeholder=""
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-end py-3 px-4 rounded-full w-40 h-20 font-medium text-black text-xs md:text-sm ${isSubmitting ? 'bg-white' : 'bg-white'} transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}   