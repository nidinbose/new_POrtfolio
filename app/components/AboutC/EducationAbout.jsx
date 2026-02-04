'use client'

import { useRef, useEffect } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EducationAbout() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".animate-section, .animate-card, .animate-heading, .animate-text", {
        y: 30,
        opacity: 0,
        scale: 0.98
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none"
        }
      });
      tl.to(".animate-section", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1)",
        stagger: 0.15
      });


      tl.to(".animate-card", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "<0.3");

  
      tl.to(".animate-heading, .animate-text", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      }, "<0.1");

      if (!('ontouchstart' in window)) {
        const cards = gsap.utils.toArray(".animate-card");
        cards.forEach(card => {
          card.addEventListener("mouseenter", () => 
            gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" })
          );
          card.addEventListener("mouseleave", () => 
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
          );
        });
      }

      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: {
          scrub: 0.3,
          trigger: containerRef.current
        }
      });

      animationRef.current = tl;
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Professional Resume</title>
        <meta name="description" content="My professional resume" />
      </Head>

      <progress max="100" value="0" className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent" />

      <div ref={containerRef} className="min-h-full bg-transparent">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <section className="animate-section mb-16">
            <h2 className="animate-heading text-3xl font-bold text-white mb-8 border-b pb-2">
              Education
            </h2>
            
            <div className="space-y-8  ">
              {[
                {
                  title: "B.COM - FCA",
                  img:"https://i.pinimg.com/736x/fb/23/4e/fb234e53425094c44691c79c83fbb34d.jpg",
                  university:"Mahatma gandhi university kottayam",
                  institution: "Musaliar College of Arts & Sciences",
                  period: "2020 - 2023"
                },
                {
                  title: "Higher-Secondary",
                  img:"https://images.careerindia.com/img/2017/09/dhse-21-1505973024-25-1506328757.jpg",
                  university:"Kerala State Board Of Education",
                  institution: "Govt HSS Thekkuthode",
                  period: "2018 - 2020"
                },
                {
                  title: "High School",
                    img:"https://static.vecteezy.com/system/resources/previews/008/040/410/non_2x/school-logo-design-template-free-vector.jpg",
                  university:"Kerala central board of SSLC",
                  institution: "St. Benidicts MSCHS Thannithodu",
                  period: "2014 - 2018"
                }
              ].map((edu, i) => (
                <div 
                  key={i}
                  className="animate-card text-white bg-gradient-to-tr from-[#0d0d0d] via-black to-[#111] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                   <div className='flex flex-col items-center md:items-start'>
                      <h1 className='text-lg font-bold'>{edu.title}</h1>
                      <img src={edu.img} alt="" className='py-6 flex flex-wrap h-60 w-60 bg-cover'/>
                   </div>
                 
                
                   <div className='space-y-4 text-[9px] text-start md:text-xl'>
                      <h2>{edu.university}</h2>
                      <h3>{edu.period}</h3>
                      <h4>{edu.institution}</h4>
                   </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}