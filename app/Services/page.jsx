'use client'

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import SplashCursor from "../components/Engine/Splash"
import Splittext from '../components/Engine/Splittext'
import ScrollExploration from "../components/Engine/ServicesSection"
import CardsService from "../components/ServicesC/CardsService"
import Footer from "../components/Homepage/Footer"

export default function Services() {
  const textLines = [
    "We take a creative and strategic approach to help you achieve your business goals and tackle your most pressing tasks."
  ];

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
    gsap.to("#services-content", {
      y: 0,
      ease: "power1.out",
      duration: 1,
      scrollTrigger: {
        trigger: "#services-content",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    return () => {
      if (smoother) smoother.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="z-0">
      <div className="fixed inset-0 h-full w-full pointer-events-none">
        <SplashCursor />
      </div>
      <div id="smooth-wrapper" className="flex-1 overflow-hidden">
        <div id="smooth-content" className="relative will-change-transform">
          <div id="services-content" className="relative z-10 w-full flex flex-col text-white mx-auto container">
            <section className="flex-grow">
              <div className="px-5 md:px-10 py-20 max-w-7xl mx-auto space-y-10">
                <Splittext
                  text={textLines.join(' ')}
                  className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug md:leading-snug gap-y-1 lg:gap-y-3 tracking-wide max-w-4xl"
                delay={30}/>
                <Splittext
                  text="People are already looking for your products or services on the Internet. Our main task is to provide them with the most convenient tool for communicating with your company. Being on the Internet is not a privilege now, it's a necessity."
                  className="text-[10px] md:text-md font-medium leading-relaxed tracking-wide text-white max-w-md mt-10 md:pt-60"
                delay={30}/>
              </div>
            </section>
            
            <section className="h-full mb-10">
              <ScrollExploration/>
            </section>
            <section className="w-full h-full">
              <CardsService />
              <Footer/>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}