'use client'

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from 'next/dynamic'

// Dynamically import SVG components with no SSR to reduce bundle size
const ApiDevelopmentSvg = dynamic(() => import("../Svg/Apisvg"), { ssr: false })
const ScrollSvg = dynamic(() => import("../Homepage/TitleAnimation"), { ssr: false })
const MernStackSvg = dynamic(() => import("../Svg/Mernsvg"), { ssr: false })
const ApiRequestSvg = dynamic(() => import("../Svg/Datasvg"), { ssr: false })
const NextJsSvg = dynamic(() => import("../Svg/Nextsvg"), { ssr: false })
const DockerAnimation = dynamic(() => import("../Svg/Micro"), { ssr: false })
const AwsSvg = dynamic(() => import("../Svg/Aws"), { ssr: false })
const UIAnimationSvg = dynamic(() => import("../Svg/UIsvg"), { ssr: false })

const data = [
  {
    service: "Website Development",
    pr: "We build modern websites that are dynamic, static, and responsive, designed to look great on any device. Our sites are also SEO-optimized to help you rank higher and reach your audience effectively.",
    tech: ["Dynamic", "Static", "Responsive", "SEO Friendly"],
    step:1,
    svg:<ScrollSvg/>
  },
  {
    service: "MERN Development",
    pr: "MERN Stack Development combines the power of MongoDB, Express.js, React, and Node.js to build high-performance, full-stack web applications. From seamless user interfaces to robust backend architecture, we deliver scalable, efficient, and interactive digital solutions tailored to meet modern business needs.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    step:2,
    svg:<MernStackSvg/>
  } , {
    service: "Database Management",
    pr: "Efficient database management ensures your data is organized, secure, and easily accessible. We design and maintain databases that support high performance, scalability, and data integrity across all your applications.",
    tech: ["Mongodb", "SQL", "Postagesql", "Cloud"],
    step:3,
    svg:<ApiDevelopmentSvg/>
  },  {
    service: "API Development",
    pr: "API development enables seamless communication between software systems. We build secure, scalable, and well-documented APIs that power your web and mobile applications, ensuring smooth data exchange and integration with third-party services.",
    tech: ["RESTful APIs", "GraphQL APIs", "Real-Time APIs (WebSockets)", "Internal/Private APIs",""],
    step:4,
    svg:<ApiRequestSvg/>
  },
   {
    service: "Next.js Development",
    pr: "Next.js is a powerful React framework for building fast, SEO-friendly web applications. It supports server-side rendering, static site generation, and API routes. Ideal for creating modern, scalable, and high-performance websites.",
    tech: ["Dynamic routes", "SSR Rendring", "SSG genaration", "API routing","File routing","AMP integration"],
    step:5,
    svg:<NextJsSvg/>
  },
    {
    service: "Microservices Development",
    pr: "Microservices is an architectural approach where an application is structured as a collection of small, independent services. Each service focuses on a specific business function and communicates with others via APIs. This design improves scalability, maintainability, and deployment flexibility.",
    tech: ["Docker", "Kubernetis", "Apache", "Kafka"],
    step:6,
    svg:<DockerAnimation/>
  },
    {
    service: "AWS hosting",
    pr: "AWS (Amazon Web Services) hosting provides scalable, reliable, and secure cloud infrastructure for deploying websites and applications. It offers a wide range of services like EC2, S3, and RDS to manage computing, storage, and databases. With global availability and pay-as-you-go pricing, AWS is ideal for businesses of all sizes.",
    tech: ["Ec2", "Containers hosting", "S5", "RDS"],
    step:7,
    svg:<AwsSvg/>
  },
      {
    service: "UI animations",
    pr: "Framer Motion and GSAP are tools used to add smooth, interactive animations to websites.Framer Motion works well with React for simple and elegant effectsGSAP is powerful for creating advanced, scroll-based animations and transitions.",
    tech: ["Gsap", "Framer-motion", "Spring-web", "React svg drawing"],
    step:8,
    svg:<UIAnimationSvg/>
  },
]

export default function CardsService() {
    const containerRef = useRef(null)
    const [loadedSvgs, setLoadedSvgs] = useState({})
    const animationRef = useRef(null)

    // Preload SVGs and mark when they're ready
    useEffect(() => {
        const svgLoadPromises = data.map((item, index) => {
            return new Promise((resolve) => {
                const img = new Image()
                img.onload = () => resolve(index)
                img.onerror = () => resolve(index)
                // This is a dummy src - actual loading is handled by dynamic imports
                img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjwvc3ZnPg=='
            })
        })

        Promise.all(svgLoadPromises).then(() => {
            setLoadedSvgs(data.reduce((acc, _, index) => {
                acc[index] = true
                return acc
            }, {}))
        })
    }, [])

    useEffect(() => {
        if (Object.keys(loadedSvgs).length === 0) return

        gsap.registerPlugin(ScrollTrigger)
        
        // Clean up any previous animations
        if (animationRef.current) {
            animationRef.current.kill()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }

        const cards = gsap.utils.toArray(".service-card")
        gsap.set(cards, {
            y: 50,
            opacity: 0,
            scale: 0.98
        })

        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none none",
            }
        })

        cards.forEach((card, index) => {
            const title = card.querySelector("h1")
            const description = card.querySelector("p")
            
            gsap.set([title, description], {
                y: "100%",
                opacity: 0
            })

            masterTl.to(card, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "power3.out"
            }, index * 0.1)

            masterTl.to([title, description], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1
            }, index * 0.1 + 0.4)

            // Only add event listeners if not touch device
            if (!('ontouchstart' in window)) {
                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        y: -5,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
                
                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                })
            }
        })

        animationRef.current = masterTl

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            if (animationRef.current) {
                animationRef.current.kill()
            }
            cards.forEach(card => {
                card.removeEventListener("mouseenter")
                card.removeEventListener("mouseleave")
            })
        }
    }, [loadedSvgs])

    return (
        <div ref={containerRef} className="max-w-7xl px-8 container mx-auto mt-10 z-0">
            {data.map((item, index) => (
                <div 
                    className="service-card border-t border-b border-opacity-20 border-white relative" 
                    key={index}
                >
                    <div className="h-full w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
                        <h2 className="absolute top-3 right-4 md:left-2 border md:border-0 rounded-full h-20 flex items-center justify-center w-20 mb-6 text-[8px] md:text-xs">Step {item.step}</h2>
                        <div className="overflow-hidden mt-8 flex flex-col items-center lg:items-start">
                            <h1 className="mt-7 text-sm md:text-2xl font-medium">
                                {item.service}
                            </h1>
                           <div className="w-80 h-80">
  {loadedSvgs[index] ? (
    item.svg
  ) : (
    // Custom loader from Uiverse.io
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-xl bg-transparent animate-pulse"></div>

      <div className="w-full h-full relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin blur-sm"></div>

        <div className="absolute inset-1 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="flex gap-1 items-center">
            <div className="w-1.5 h-12 bg-cyan-500 rounded-full animate-[bounce_1s_ease-in-out_infinite]"></div>
            <div className="w-1.5 h-12 bg-blue-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.1s]"></div>
            <div className="w-1.5 h-12 bg-indigo-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.2s]"></div>
            <div className="w-1.5 h-12 bg-purple-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.3s]"></div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-100"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-200"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-300"></div>
    </div>
  )}
</div>

                        </div>
                        <div className="overflow-hidden">
                            <p className="text-[10px] md:text-lg xl:text-2xl text-white tracking-wide leading-relaxed">
                                {item.pr}
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-5 text-start text-xs">
                                {Array.isArray(item.tech) &&
                                    item.tech.map((tech, techIndex) => (
                                        <span
                                            key={`${tech}-${techIndex}`}
                                            className="tech-item px-3 py-1 rounded-full text-[9px]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}