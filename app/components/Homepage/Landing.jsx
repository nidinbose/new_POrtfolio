'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BlurText from "../Engine/Splittext";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const mainRef = useRef(null);
  const videoRef = useRef(null);

  // Initialize smooth scroll and animations
  useEffect(() => {
    // Set up smooth scrolling
    gsap.to(mainRef.current, {
      scrollTo: { y: "max" },
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        invalidateOnRefresh: true
      }
    });

    // Zoom animation timeline
    const zoomTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".zoom-spacer",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
      },
    });

    zoomTL
      .to(".zoom-letter", {
        scale: 20,
        ease: "power3.inOut",
      })
      .to(
        ".zoom-overlay",
        {
          autoAlpha: 0,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".poster",
        {
          rotationY: 720,
          opacity: 1,
          ease: "none",
        },
        0
      );

    // Poster animation
    gsap.to(".poster", {
      scrollTrigger: {
        trigger: ".section-2",
        start: "top center",
        toggleActions: "play none none none",
      },
      rotationY: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Intro text animation
    gsap.to("#intro-text", {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#intro-text",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Video flip animation
    const videoAnimation = gsap.to(videoRef.current, {
      rotateY: 180,
      ease: "none",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      videoAnimation.scrollTrigger?.kill();
      videoAnimation.kill();
    };
  }, []);

  return (
    <div ref={mainRef} className="w-full min-h-full pt-12 bg-transparent text-white overflow-hidden">
      {/* Spacer for scroll animation */}
      <div className="zoom-spacer h-[220vh] md:h-[400vh] bg-transparent" />
       
      {/* Zoom animation overlay */}
      <div className="zoom-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-transparent z-30 pointer-events-none text-[30px] sm:text-[50px] md:text-[100px] font-bold">
        <div
          className="text-white absolute z-20 text-xl md:text-5xl max-w-xl md:max-w-3xl space-y-1 md:space-y-6 left-6 md:left-20 top-20 md:top-20 mt-7 md:mt-1"
          id="intro-text"
        >
          <h1 className="flex gap-4 md:gap-y-6">
            <BlurText
              text="Nidinbose "
              delay={10}
              animateBy="words"
              direction="top"
              className=""
            />
          </h1>
          <h2 className="">
            <BlurText
              text="Website developer"
              delay={20}
              animateBy="words"
              direction="top"
              className=""
            />
          </h2>
          <h3>
            <BlurText
              text="And digital designer"
              delay={30}
              animateBy="words"
              direction="top"
              className=""
            />
          </h3>
          <h3>
            <BlurText
              text="MERN eco-system"
              delay={30}
              animateBy="words"
              direction="top"
              className=""
            />
          </h3>
        </div>

        <div
          className="text-white absolute p-8 z-20 md:text-xs font-light text-[8px] max-w-sm md:max-w-xl space-y-1 md:space-y-6 right-2 md:right-20 bottom-0 md:bottom-20 mt-7 md:mt-1"
          id="intro-text"
        >
          <p>
            Proficient 
            in 
            MERN 
            Stack 
            for 
            building 
            full-stack 
            web 
            applications. 
            Skilled 
            in 
            creating 
            responsive 
            ui 
            with 
            react 
            designing 
            restful 
            APIs 
            with 
            express 
            js 
          </p>
        </div>

        <h1
          className="zoom-letter text-[30px] sm:text-[30px] md:text-[100px] font-bold text-white"
          style={{
            textShadow: "10px 10px 25px rgb(0, 0, 0)",
          }}
        >
          <div className="outer-triangle">
            <div className="inner-triangle">
              <div className="white-triangle">
                <div className="gray-triangle"></div>
              </div>
            </div>
          </div>
        </h1>
      </div>

      {/* SECTION 2 (revealed after zoom) */}
      <div className="h-full flex flex-col items-center justify-center bg-transparent px-4 space-y-0">
        <div
          ref={videoRef}
          className="w-full max-w-4xl aspect-[4/5] overflow-hidden relative z-10"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1200px",
            boxShadow: "0 40px 80px rgba(235, 231, 231, 0.27)",
          }}
        >
         <img src="./Images/PF.png" alt=""  className="object-cover  -scale-x-100"/>
        </div>

        {/* Mirror Reflection */}
        <div
          className="w-full max-w-4xl h-10 aspect-[16/9] overflow-hidden -mt-2 relative z-0"
          style={{
            transform: "scaleY(-1)",
            opacity: 1.4,
            maskImage: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        >
       <img src="./Images/PF.png" alt=""  className="object-cover"/>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="h-full bg-transparent mb-20 flex items-center justify-center">
       
      </div>
    </div>
  );
}