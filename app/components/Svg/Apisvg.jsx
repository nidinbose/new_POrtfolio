"use client";
import { useEffect, useRef } from "react";

const ApiDevelopmentSvg = () => {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);

  useEffect(() => {
    // Initialize all paths with dash offset
    pathRefs.current.forEach((path) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each path with a slight delay between them
            pathRefs.current.forEach((path, index) => {
              if (!path) return;
              setTimeout(() => {
                path.style.transition = "stroke-dashoffset 1.5s ease-in-out";
                path.style.strokeDashoffset = "0";
              }, index * 150); // Stagger the animations
            });
          } else {
            // Reset animation when not intersecting
            pathRefs.current.forEach((path) => {
              if (!path) return;
              path.style.transition = "none";
              path.style.strokeDashoffset = path.getTotalLength();
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (svgRef.current) observer.observe(svgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center h-full bg-transparent text-white">
      <svg
        ref={svgRef}
        width="600"
        height="400"
        viewBox="0 0 600 400"
        fill="none"
        stroke="white"
        strokeWidth="2"
      >
        {/* Server */}
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M100 100 H300 V300 H100 Z"
          strokeLinecap="round"
        />
        {/* Server Rack */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M90 90 H310 V310 H90 Z"
          strokeLinecap="round"
        />
        {/* Server Details */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M120 130 H280"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M120 160 H280"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M120 190 H280"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[5] = el)}
          d="M120 220 H280"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[6] = el)}
          d="M120 250 H280"
          strokeLinecap="round"
        />
        
        {/* Client Device */}
        <path
          ref={(el) => (pathRefs.current[7] = el)}
          d="M400 150 H500 V250 H400 Z"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[8] = el)}
          d="M420 170 H480 V230 H420 Z"
          strokeLinecap="round"
        />
        
        {/* Connection Lines */}
        <path
          ref={(el) => (pathRefs.current[9] = el)}
          d="M300 200 L400 200"
          strokeLinecap="round"
          strokeDasharray="10,5"
        />
        
        {/* Request Arrow */}
        <path
          ref={(el) => (pathRefs.current[10] = el)}
          d="M350 190 L360 200 L350 210"
          strokeLinecap="round"
          fill="white"
        />
        
        {/* Response Arrow */}
        <path
          ref={(el) => (pathRefs.current[11] = el)}
          d="M360 190 L350 200 L360 210"
          strokeLinecap="round"
          fill="white"
        />
        
        {/* Database */}
        <path
          ref={(el) => (pathRefs.current[12] = el)}
          d="M200 50 H250 V90 H200 V50 Z"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[13] = el)}
          d="M180 90 H270 V120 C270 140 180 140 180 120 V90 Z"
          strokeLinecap="round"
        />
        
        {/* Database Connection */}
        <path
          ref={(el) => (pathRefs.current[14] = el)}
          d="M225 120 V160"
          strokeLinecap="round"
        />
        
        {/* JSON Data Example */}
        <path
          ref={(el) => (pathRefs.current[15] = el)}
          d="M320 120 H450"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[16] = el)}
          d="M320 140 H450"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[17] = el)}
          d="M320 160 H450"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[18] = el)}
          d="M320 180 H450"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[19] = el)}
          d="M320 200 H450"
          strokeLinecap="round"
        />
        
        {/* Curly Braces */}
        <path
          ref={(el) => (pathRefs.current[20] = el)}
          d="M310 120 C315 110 315 130 310 140"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[21] = el)}
          d="M310 180 C315 190 315 170 310 160"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ApiDevelopmentSvg;