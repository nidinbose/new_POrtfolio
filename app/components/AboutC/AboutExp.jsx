 'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AboutExp() {
  const experiences = [
        {
      title: 'MERN Stack Developer',
      company: 'Flipmaxx Global LLP',
      type: 'Full-time',
      duration: 'June 2024 - Present · 8+ months',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-26YPzOttlgRKjnvFeY3grOIzo8IqS4naQ&s',
      points: [
        'Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js',
        'Implemented RESTful APIs and integrated third-party services',
        'Optimized application performance and implemented responsive designs',
        'Collaborated with team members using Git version control',
      ],
    },
    {
      title: 'MERN Stack Developer',
      company: 'Syneffo Solutions',
      type: 'Full-time',
      duration: 'June 2023 - Present · 8+ months',
      logo: 'https://synnefo.in/_next/image?url=%2Fimg%2Fsynnefo-logo-black.png&w=384&q=75',
      points: [
        'Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js',
        'Implemented RESTful APIs and integrated third-party services',
        'Optimized application performance and implemented responsive designs',
        'Collaborated with team members using Git version control',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      type: 'Freelance',
      duration: 'January 2023 - Present · 1+ year',
      logo: 'https://brandlogos.net/wp-content/uploads/2017/01/freelancer-logo_brandlogos.net_cjzs9.png',
      points: [
        'Designed and developed custom websites for various clients',
        'Worked with clients to understand requirements and deliver solutions',
        'Managed multiple projects simultaneously with different tech stacks',
        'Provided maintenance and support for existing client websites',
      ],
    },
  ];

  const experienceRefs = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
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
    experienceRefs.current.forEach((ref, index) => {
      gsap.from(ref, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !experienceRefs.current.includes(el)) {
      experienceRefs.current.push(el)
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="bg-transparent py-20 relative "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xs text-center md:text-start sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16">
          Professional Experience
        </h2>
        
        <div className="space-y-16">
          {experiences.map((item, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="grid grid-cols-1 md:grid-cols-5 border-t border-gray-700 gap-6 pt-10 experience-section"
            >
              <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
                <img 
                  src={item.logo} 
                  alt={`${item.company} logo`} 
                  className="w-40 h-20 object-contain"
                />
                <div className="text-center md:text-left">
                  <h1 className="text-xs md:text-sm text-white font-bold">
                    {item.title}
                  </h1>
                  <p className="text-gray-400 text-xs mt-1">{item.type}</p>
                </div>
              </div>
              <div className="md:col-span-3 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h1 className="text-white text-xs lg:text-lg font-medium">
                    {item.company}
                  </h1>
                  <span className="hidden md:block text-gray-400">|</span>
                  <h1 className="text-white text-[8px] md:text-xs">
                    {item.duration}
                  </h1>
                </div>
                
                <ul className="list-disc list-inside space-y-2">
                  {item.points.map((point, i) => (
                    <li 
                      key={i}
                      className="text-white text-[12px] md:text-xs tracking-wide leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}