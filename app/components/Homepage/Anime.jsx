'use client';
import React, { useEffect,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSvg from './TitleAnimation';
import ApiDevelopmentSvg from '../Svg/Apisvg';
import ApiRequestSvg from '../Svg/Datasvg';
import MernStackSvg from '../Svg/Mernsvg';
import NextJsSvg from '../Svg/Nextsvg';

gsap.registerPlugin(ScrollTrigger);

const cards=[{header:"WEBSITE DEVELOPMENT",footer:"Building responsive,user-friendly websites to grow your online presence.", tag: <ScrollSvg />,},
   {header:"MERN STACK DEVELOPMENT",footer:"Building web applications with Mongodb,Express,React,Node",tag:<MernStackSvg/>},
    {header:"NEXT.JS DEVELOPMENT",footer:"Building web applications with next.js and next.js API routes",tag:<NextJsSvg/>},
  {header:"DATABASE MANAGEMENT",footer:"managing sql and no sql databases",tag: <ApiDevelopmentSvg/>},
   {header:"API DEVELOPMENT",footer:"Api developing with node.js express.js ,redis,data designing",tag:<ApiRequestSvg/>},
  
  
   {header:"MICROSERVICES",footer:"integrating doker,kubernetis,apache,kafka",tag:<ApiRequestSvg/>},
   {header:"AWS INTEGRATRION",footer:"Creating ci/cd pipelines and hosting via aws",tag:<ApiRequestSvg/>},
   {header:"UI ANIMATION",footer:"building animations with framer-motion,aos,materialUI,reactbits",tag:<ApiRequestSvg/>}

]

export default function Anime() {
  
 const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

useEffect(() => {
  if (typeof window === 'undefined') return;

  gsap.to("#underline", {
    strokeDashoffset: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#underline",
      start: "top 80%",
      end: "bottom 20%",  // define the scroll range for the animation
      scrub: true,        // smooth tie to scroll progress
    },
  });
}, []);


  useEffect(() => {
    if (typeof window === 'undefined') return;

    const panels = gsap.utils.toArray('.panel') || [];
    gsap.set(panels, { autoAlpha: 0, y: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.panels-container',
        start: 'top top',
        end: `+=${panels.length * 150}%`,
        scrub: 1.5,        
        pin: true,
        anticipatePin: 1,
      },
    });

    panels.forEach((panel, i) => {
      const enterTime = i * 2;
      const exitTime = enterTime + 1.5;

      tl.to(panel, {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }, enterTime)
        .to(panel, {
          autoAlpha: 0,
          y: -100,
          duration: 1.5,
          ease: 'power3.in',
        }, exitTime);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-[500vh] bg-transparent overflow-hidden lg:mb-[20vh]">
      <div className="fixed inset-0 z-0 bg-transparent" />
   <div className="panels-container relative z-10 min-h-screen w-full">
<div className="relative w-fit mx-auto py-5">
  <h1 className="text-white font-bold text-xl md:text-4xl relative z-10">
    OFFERING SERVICES
  </h1>

  {/* Underline */}
  <svg
    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-52 md:w-64"
    viewBox="0 0 200 20"
    fill="none"
    stroke="#ffffff"
    strokeWidth="3"
    strokeLinecap="round"
    strokeDasharray="200"
    strokeDashoffset="200"
    id="underline"
  >
    <path d="M5 15 C50 -5, 150 30, 195 15" />
  </svg>
</div>


      {cards.map((item, index) => (
        <div
          key={index}
          className="panel will-change-[opacity,transform] absolute top-0 left-0 w-full h-full flex items-center justify-center p-3 "
          style={{ zIndex: 10 + index }}
        >
          <section className="w-full px-4 py-12 text-white">
            
            <div className="max-w-7xl mx-auto bg-gradient-to-tr from-[#0d0d0d] via-black to-[#111] rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 relative">
              {/* <div className='rounded-full w-20 h-20 md:w-28 md:h-28 border text-black absolute top-4 right-4'>
                 N
              </div> */}
              {/* Left: SVG */}
              <div className="w-full flex justify-center items-center p-4">
                <div
                  className="w-full sm:w-2/3 md:w-2/3 xl:w-full max-w-[400px] h-60 md:h-40 lg:h-90 xl:h-80"
                  key={refreshKey}
                >
                  {item.tag}
                </div>
              </div>

              {/* Right: Text */}
              <div className="w-full md:w-full text-center md:text-left flex  flex-col justify-center">
                <h2 className="text-sm md:text-2xl font-semibold mb-4 ">{item.header}</h2>
                <p className="text-[9px] md:text-xs  text-gray-300">
                  {item.footer}
                </p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
    </div>
  );
}
