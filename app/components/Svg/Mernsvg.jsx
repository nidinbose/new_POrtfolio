"use client";
import { useEffect, useRef } from "react";

const MernStackSvg = () => {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // Animate paths
    pathRefs.current.forEach((path) => {
      if (!path || !path.getTotalLength) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    // Hide texts initially
    textRefs.current.forEach((text) => {
      if (text) text.style.opacity = 0;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate paths
            pathRefs.current.forEach((path, index) => {
              if (!path) return;
              setTimeout(() => {
                if (path.getTotalLength) {
                  path.style.transition = `stroke-dashoffset ${1 + index * 0.05}s ease-in-out`;
                  path.style.strokeDashoffset = "0";
                }
              }, index * 100);
            });

            // Animate texts with delay
            textRefs.current.forEach((text, index) => {
              if (!text) return;
              setTimeout(() => {
                text.style.transition = "opacity 0.8s ease-in-out";
                text.style.opacity = 1;
              }, 1000 + index * 300);
            });
          } else {
            // Reset paths
            pathRefs.current.forEach((path) => {
              if (!path) return;
              path.style.transition = "none";
              if (path.getTotalLength) {
                path.style.strokeDashoffset = path.getTotalLength();
              }
            });
            // Hide texts
            textRefs.current.forEach((text) => {
              if (text) text.style.opacity = 0;
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
    <div className="flex justify-center items-center h-full bg-transparent p-8 rounded-xl">
      <svg
        ref={svgRef}
        width="800"
        height="600"
        viewBox="0 0 800 600"
        fill="none"
        strokeWidth="4"
      >
        {/* Background rectangle for better contrast */}
        <rect 
          width="800" 
          height="600" 
          fill="" 
          rx="15" 
          ry="15"
        />

        {/* MongoDB (Green) - Document Database */}
        <g fill="none" stroke="#10B981">
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M150 150 C 220 80 280 80 350 150 C 420 220 420 280 350 350 C 280 420 220 420 150 350 C 80 280 80 220 150 150 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[1] = el)}
            d="M225 180 C 260 140 290 140 325 180"
            strokeLinecap="round"
          />
        </g>
        
        {/* Express (Light Gray) - Server Layer */}
        <g fill="none" stroke="#9CA3AF">
          <path
            ref={(el) => (pathRefs.current[2] = el)}
            d="M400 200 L500 200 L530 230 L530 370 L500 400 L400 400 L370 370 L370 230 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[3] = el)}
            d="M420 250 L480 250"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[4] = el)}
            d="M420 300 L480 300"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[5] = el)}
            d="M420 350 L480 350"
            strokeLinecap="round"
          />
        </g>
        
        {/* React (Blue) - Frontend */}
        <g fill="none" stroke="#3B82F6">
          <path
            ref={(el) => (pathRefs.current[6] = el)}
            d="M200 450 A80 80 0 1 0 360 450 A80 80 0 1 0 200 450 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[7] = el)}
            d="M280 380 L280 520"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[8] = el)}
            d="M280 450 L200 400"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[9] = el)}
            d="M280 450 L360 400"
            strokeLinecap="round"
          />
        </g>
        
        {/* Node.js (Dark Green) - Runtime */}
        <g fill="none" stroke="#059669">
          <path
            ref={(el) => (pathRefs.current[10] = el)}
            d="M550 200 A100 100 0 1 0 550 400 A100 100 0 1 0 550 200 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[11] = el)}
            d="M550 240 L550 360"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[12] = el)}
            d="M520 280 L580 280"
            strokeLinecap="round"
          />
        </g>
        
        {/* Connection Lines */}
        <g stroke="#6B7280" strokeWidth="3" strokeLinecap="round">
          <path
            ref={(el) => (pathRefs.current[13] = el)}
            d="M350 230 L400 230"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[14] = el)}
            d="M500 300 L550 300"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[15] = el)}
            d="M360 450 L500 450 L500 370"
            strokeDasharray="8,5"
          />
        </g>
        
        {/* Data Flow Animation */}
        <g stroke="#EC4899" strokeWidth="3" strokeLinecap="round" fill="none">
          <path
            ref={(el) => (pathRefs.current[16] = el)}
            d="M350 280 Q400 250 450 280"
          />
          <path
            ref={(el) => (pathRefs.current[17] = el)}
            d="M450 320 Q400 350 350 320"
          />
        </g>
        
        {/* Labels with better visibility */}
        <text
          x="150" y="120"
          fill="#10B981"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[0] = el)}
        >MongoDB</text>
        
        <text
          x="400" y="170"
          fill="#9CA3AF"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[1] = el)}
        >Express</text>
        
        <text
          x="200" y="550"
          fill="#3B82F6"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[2] = el)}
        >React</text>
        
        <text
          x="520" y="170"
          fill="#059669"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[3] = el)}
        >Node.js</text>
        
        {/* Title */}
        <text
          x="400" y="80"
          fill="#FFFFFF"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
        >MERN Stack Architecture</text>
      </svg>
    </div>
  );
};

export default MernStackSvg;