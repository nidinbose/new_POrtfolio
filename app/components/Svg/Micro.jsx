"use client";
import { useEffect, useRef } from "react";

const DockerSvg = () => {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    pathRefs.current.forEach((path) => {
      if (!path || !path.getTotalLength) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    textRefs.current.forEach((text) => {
      if (text) text.style.opacity = 0;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pathRefs.current.forEach((path, index) => {
              if (!path) return;
              setTimeout(() => {
                if (path.getTotalLength) {
                  path.style.transition = `stroke-dashoffset ${1 + index * 0.05}s ease-in-out`;
                  path.style.strokeDashoffset = "0";
                }
              }, index * 100);
            });
            textRefs.current.forEach((text, index) => {
              if (!text) return;
              setTimeout(() => {
                text.style.transition = "opacity 0.8s ease-in-out";
                text.style.opacity = 1;
              }, 1000 + index * 300);
            });
          } else {
            pathRefs.current.forEach((path) => {
              if (!path) return;
              path.style.transition = "none";
              if (path.getTotalLength) {
                path.style.strokeDashoffset = path.getTotalLength();
              }
            });

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
   
        <rect 
          width="800" 
          height="600" 
          fill="" 
          rx="15" 
          ry="15"
        />

        <g fill="none" stroke="#ffffff">
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M400 300 C 450 250 550 250 600 300 C 650 350 650 400 600 450 C 550 500 450 500 400 450 C 350 400 350 350 400 300 Z"
            strokeLinecap="round"
          />
     
          <path
            ref={(el) => (pathRefs.current[1] = el)}
            d="M600 300 L650 250"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[2] = el)}
            d="M600 350 L650 400"
            strokeLinecap="round"
          />
        </g>
        
    
        <g fill="none" stroke="#ffffff">
      
          <path
            ref={(el) => (pathRefs.current[3] = el)}
            d="M250 350 L350 350 L350 400 L250 400 Z"
            strokeLinecap="round"
          />
      
          <path
            ref={(el) => (pathRefs.current[4] = el)}
            d="M200 300 L300 300 L300 350 L200 350 Z"
            strokeLinecap="round"
          />
       
          <path
            ref={(el) => (pathRefs.current[5] = el)}
            d="M150 250 L250 250 L250 300 L150 300 Z"
            strokeLinecap="round"
          />
        </g>

        <g fill="none" stroke="#ffffff">
          <path
            ref={(el) => (pathRefs.current[6] = el)}
            d="M450 350 L500 350 L500 400 L450 400 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[7] = el)}
            d="M500 350 L550 350 L550 400 L500 400 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[8] = el)}
            d="M450 400 L500 400 L500 450 L450 450 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[9] = el)}
            d="M500 400 L550 400 L550 450 L500 450 Z"
            strokeLinecap="round"
          />
        </g>
        
        <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round">
          <path
            ref={(el) => (pathRefs.current[10] = el)}
            d="M350 375 L400 375"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[11] = el)}
            d="M250 325 L400 325"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[12] = el)}
            d="M150 275 L400 275"
            strokeDasharray="8,5"
          />
        </g>
        
        <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none">
          <path
            ref={(el) => (pathRefs.current[13] = el)}
            d="M200 500 Q250 480 300 500 Q350 520 400 500"
          />
          <path
            ref={(el) => (pathRefs.current[14] = el)}
            d="M400 500 Q450 480 500 500 Q550 520 600 500"
          />
        </g>
        
        <text
          x="500" y="250"
          fill="#ffffff"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[0] = el)}
        >Docker Engine</text>
        
        <text
          x="200" y="425"
          fill="#ffffff"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[1] = el)}
        >Containers</text>
        
        <text
          x="450" y="475"
          fill="#ffffff"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[2] = el)}
        >Docker Hub</text>
        

        <text
          x="400" y="80"
          fill="#ffffff"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
        >Microservices</text>
        
        <circle
          ref={(el) => (pathRefs.current[15] = el)}
          cx="500" cy="325" r="10"
          stroke="#ffffff"
          fill="none"
        />
        <circle
          ref={(el) => (pathRefs.current[16] = el)}
          cx="525" cy="325" r="10"
          stroke="#ffffff"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default DockerSvg;