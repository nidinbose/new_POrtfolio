'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CircularText from '../Engine/CircularText'
import Splittext from '../Engine/Splittext'

export default function AboutFull() {
  const heroRef = useRef(null)
  const descRef = useRef(null)
  const imgRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)
  const statsRefs = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 85%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
        markers: false,
      }
    })

    gsap.from(descRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: descRef.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(imgRef.current, {
      opacity: 0,
      x: -300,
      y: 100,
      scale: 0.5,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 90%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(imgRef.current, {
            y: -20,
            duration: 0.5,
            repeat: 1,
            yoyo: true,
            ease: 'power2.inOut'
          })
        }
      }
    })

    const velocityTrigger = ScrollTrigger.create({
      trigger: imgRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        gsap.to(imgRef.current, {
          x: -50 * self.getVelocity() / 100,
          duration: 0.8,
          ease: 'power1.out'
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !statsRefs.current.includes(el)) {
      statsRefs.current.push(el)
    }
  }

  const textLines = [
    "I am Nidinbose a proficient full stack web developer and web architect specialized in MERN stack and Microservices have 6 month's of profissional experience @ syneffo solutions and 2 years of Freelancing experience in website developing"
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-12 overflow-hidden">
      <section className="max-w-6xl mx-auto" ref={heroRef}>
        <Splittext
          text={textLines.join(' ')}
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug md:leading-snug gap-y-1 lg:gap-y-3 tracking-wide max-w-4xl lg:max-w-5xl"
          delay={30}
        />
      </section>

      <section className="max-w-6xl text-white text-xs sm:text-sm mt-10 sm:mt-20 xl:mt-32 mx-auto" ref={descRef}>
        <Splittext
          text='Providing most efficient and dedicated experience and on time develoring that bring together diverse backgrounds and expertise,providing comprehensive support to proactively tackle even the most complex of challenges.'
          className='max-w-sm sm:max-w-md md:max-w-lg tracking-wide leading-relaxed font-light'
          delay={60}
        />
      </section>

      <section className="mt-10 sm:mt-16 max-w-md ml-auto">
        <div className="relative" ref={imgRef}>
          <img
            src="./Images/S.png"
            alt="Advanced Team visual"
            className="w-full h-auto object-cover"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-12 sm:mt-20 pb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="relative flex items-center justify-center">
              <CircularText
                text="DOWNLOAD*RESUME*"
                onHover="speedUp"
                spinDuration={20}
                className="absolute custom-class hover:text-black text-[7px]"
              />
              <a
                href="https://drive.google.com/file/d/1jipyf4agYdtFsSS9Y9z6Zwuv30kcSOPS/view?usp=drive_link"
                download
                className="w-40 h-40 sm:w-60 sm:h-60 rounded-full border border-white flex flex-col items-center justify-center text-white transition-all duration-300 z-10"
                ref={circleRef}
              >
                <span className="text-xs md:text-xl font-medium">Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-2 animate-bounce"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 text-white flex flex-col">
            <h1 className="text-[15px] max-w-xl text-start mx-auto leading-relaxed tracking-wide" ref={textRef}>
            We focus not only on crafting visually engaging websites, but also on building strategic digital experiences that align with your brand's goals and effectively connect with your target audience.
            </h1>

            <hr className="divider-line mt-12 mb-12 sm:mt-20 sm:mb-20 border-white" />

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-4">
              {[2, '10+', '100%'].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 sm:gap-2 p-2" ref={addToRefs}>
                  <h1 className="text-lg sm:text-2xl md:text-3xl font-medium">{stat}</h1>
                  <h2 className="text-[9px] sm:text-sm">
                    {i === 0 ? 'Years of experience' :
                      i === 1 ? 'Projects completed' : 'Client satisfaction'}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}