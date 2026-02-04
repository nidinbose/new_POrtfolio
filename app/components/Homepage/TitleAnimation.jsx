"use client";
import { useEffect, useRef } from "react";

const ScrollSvg = () => {
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
              }, index * 200); // Stagger the animations
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
        {/* Monitor */}
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M100 50 L500 50 L550 100 L550 300 L500 350 L100 350 L50 300 L50 100 Z"
          strokeLinecap="round"
        />
        
        {/* Screen */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M100 100 L500 100 L500 300 L100 300 Z"
          strokeLinecap="round"
        />
        
        {/* Stand */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M250 350 L250 380"
          strokeLinecap="round"
        />
        
        {/* Base */}
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M150 380 L350 380"
          strokeLinecap="round"
        />
        
        {/* Keyboard */}
        <path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M150 400 L450 400 L430 450 L170 450 Z"
          strokeLinecap="round"
        />
        
        {/* Mouse */}
        <path
          ref={(el) => (pathRefs.current[5] = el)}
          d="M470 400 C 500 400 520 430 500 450 C 480 470 450 460 470 400"
          strokeLinecap="round"
        />
        
        {/* Screen elements (simplified) */}
        <path
          ref={(el) => (pathRefs.current[6] = el)}
          d="M150 150 L450 150"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[7] = el)}
          d="M150 180 L450 180"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[8] = el)}
          d="M150 210 L450 210"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[9] = el)}
          d="M150 240 L450 240"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[10] = el)}
          d="M150 270 L450 270"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ScrollSvg;