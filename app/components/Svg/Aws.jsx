"use client";
import { useEffect, useRef } from "react";

const AwsSvg = () => {
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

        {/* AWS Cloud (Orange) */}
        <g fill="none" stroke="#FF9900">
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M400 200 C 450 150 550 150 600 200 C 650 250 650 350 600 400 C 550 450 450 450 400 400 C 350 350 350 250 400 200 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[1] = el)}
            d="M450 250 L550 250"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[2] = el)}
            d="M450 300 L550 300"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[3] = el)}
            d="M450 350 L550 350"
            strokeLinecap="round"
          />
        </g>
        
        {/* EC2 Instances (Compute) */}
        <g fill="none" stroke="#FF9900">
          <path
            ref={(el) => (pathRefs.current[4] = el)}
            d="M200 300 L300 300 L300 400 L200 400 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[5] = el)}
            d="M220 320 L280 320 L280 380 L220 380 Z"
            strokeLinecap="round"
          />
        </g>
        
        {/* S3 Bucket (Storage) */}
        <g fill="none" stroke="#FF9900">
          <path
            ref={(el) => (pathRefs.current[6] = el)}
            d="M500 300 L600 300 L600 400 L500 400 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[7] = el)}
            d="M520 320 L580 320"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[8] = el)}
            d="M520 350 L580 350"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[9] = el)}
            d="M520 380 L580 380"
            strokeLinecap="round"
          />
        </g>
        
        {/* RDS Database */}
        <g fill="none" stroke="#FF9900">
          <path
            ref={(el) => (pathRefs.current[10] = el)}
            d="M300 200 L400 200 L400 250 L300 250 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[11] = el)}
            d="M320 220 L380 220"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[12] = el)}
            d="M320 235 L380 235"
            strokeLinecap="round"
          />
        </g>
        
        {/* Lambda Function */}
        <g fill="none" stroke="#FF9900">
          <path
            ref={(el) => (pathRefs.current[13] = el)}
            d="M350 450 A50 25 0 1 0 450 450 A50 25 0 1 0 350 450 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[14] = el)}
            d="M400 425 L400 450"
            strokeLinecap="round"
          />
        </g>
        
        {/* Connection Lines */}
        <g stroke="#6B7280" strokeWidth="3" strokeLinecap="round">
          <path
            ref={(el) => (pathRefs.current[15] = el)}
            d="M300 350 L400 300"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[16] = el)}
            d="M500 350 L400 300"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[17] = el)}
            d="M350 250 L400 250"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[18] = el)}
            d="M400 400 L400 450"
            strokeDasharray="8,5"
          />
        </g>
        
        {/* Data Flow Animation */}
        <g stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none">
          <path
            ref={(el) => (pathRefs.current[19] = el)}
            d="M300 320 Q350 300 400 320"
          />
          <path
            ref={(el) => (pathRefs.current[20] = el)}
            d="M500 320 Q450 340 400 320"
          />
        </g>
        
        {/* Labels with better visibility */}
        <text
          x="400" y="180"
          fill="#FF9900"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[0] = el)}
        >AWS Cloud</text>
        
        <text
          x="200" y="425"
          fill="#FF9900"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[1] = el)}
        >EC2</text>
        
        <text
          x="520" y="425"
          fill="#FF9900"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[2] = el)}
        >S3</text>
        
        <text
          x="300" y="270"
          fill="#FF9900"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[3] = el)}
        >RDS</text>
        
        <text
          x="350" y="500"
          fill="#FF9900"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[4] = el)}
        >Lambda</text>
        
        {/* Title */}
        <text
          x="400" y="80"
          fill="#FFFFFF"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
        >AWS Architecture</text>
        
        {/* AWS Logo */}
        <path
          ref={(el) => (pathRefs.current[21] = el)}
          d="M650 150 L700 150 L700 200 L650 200 Z"
          stroke="#FF9900"
          fill="none"
        />
        <path
          ref={(el) => (pathRefs.current[22] = el)}
          d="M675 150 L675 200"
          stroke="#FF9900"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default AwsSvg;