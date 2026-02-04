'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import AboutFull from "../components/AboutC/AboutFull"
import AboutExp from "../components/AboutC/AboutExp"
import AboutSkills from "../components/AboutC/About.Skills"
import SplashCursor from "../components/Engine/Splash"
import EducationAbout from '../components/AboutC/EducationAbout'
import Footer from '../components/Homepage/Footer'
import DeveloperSocials from '../components/AboutC/SocialAbout'

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    })

    return () => {
      if (smoother) smoother.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='z-40'>
      {/* SplashCursor as background */}
      <div className="fixed inset-0 h-full w-full pointer-events-none">
        <SplashCursor />
      </div>
      
      {/* Scrollable content container */}
      <div id="smooth-wrapper" className="flex-1 overflow-hidden">
        <div id="smooth-content" className="relative will-change-transform">
          <section className="relative z-20 pt-20 pb-20">
            <AboutFull/>
          <div className='px-5 md:px-0'>
              <AboutExp/>
          </div>
            <AboutSkills/>
            <EducationAbout/>
            <DeveloperSocials/>
            <Footer/>
          </section>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}