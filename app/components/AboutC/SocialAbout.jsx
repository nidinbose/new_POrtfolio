'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaLinkedin, FaInstagram,FaWhatsapp } from 'react-icons/fa'

export default function SocialAbout() {


  const experienceRefs = useRef([])
  const sectionRef = useRef(null)
  const socialIconsRef = useRef(null)

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
    gsap.from(socialIconsRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: socialIconsRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      }
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
    <section ref={sectionRef} className="bg-transparent py-20 relative h-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <h2 className="text-white text-xs text-center md:text-start sm:text-3xl md:text-4xl font-bold mb-12">
        Follow me on
        </h2>
        <hr  className='mb-12'/>
        <div
          ref={socialIconsRef}
          className="flex justify-evenly gap-6 mb-12 text-white text-5xl md:text-9xl"
        >
          <a href="https://www.linkedin.com/in/nidin-bose-37b305308" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nidinbose" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/nidinbose_?igsh=cXhmdHN2bG1wNGU0" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
            <FaInstagram />
          </a>

           <a href="https://wa.me/+917012543724" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
            <FaWhatsapp/>
          </a>
        </div>
      </div>
    </section>
  )
}
