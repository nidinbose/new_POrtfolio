"use client";
import { useEffect, useRef } from "react";

const UIAnimationSvg = () => {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);
  const textRefs = useRef([]);
  const rectRefs = useRef([]);

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

    // Hide rectangles initially
    rectRefs.current.forEach((rect) => {
      if (rect) rect.style.opacity = 0;
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

            // Animate rectangles with delay
            rectRefs.current.forEach((rect, index) => {
              if (!rect) return;
              setTimeout(() => {
                rect.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
                rect.style.opacity = 1;
                rect.style.transform = "scale(1)";
              }, 800 + index * 200);
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
            // Hide rectangles
            rectRefs.current.forEach((rect) => {
              if (rect) {
                rect.style.transition = "none";
                rect.style.opacity = 0;
                rect.style.transform = "scale(0.8)";
              }
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
        strokeWidth="3"
      >
        {/* Background rectangle */}
      

        {/* Phone Frame */}
        <rect
          ref={(el) => (rectRefs.current[0] = el)}
          x="150" y="100" 
          width="300" height="500" 
          rx="30" ry="30" 
          stroke="#64748B" 
          fill="#0F172A"
          style={{ transform: "scale(0.8)", transformOrigin: "center" }}
        />

        {/* App Header */}
        <rect
          ref={(el) => (rectRefs.current[1] = el)}
          x="180" y="130" 
          width="240" height="50" 
          rx="10" ry="10" 
          stroke="#3B82F6" 
          fill="#1E40AF"
          style={{ transform: "scale(0.8)", transformOrigin: "center" }}
        />
        <text
          x="300" y="160"
          fill="#FFFFFF"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
          ref={(el) => (textRefs.current[0] = el)}
        >My Awesome App</text>

        {/* Search Bar */}
        <rect
          ref={(el) => (rectRefs.current[2] = el)}
          x="180" y="200" 
          width="240" height="40" 
          rx="20" ry="20" 
          stroke="#94A3B8" 
          fill="#1E293B"
          style={{ transform: "scale(0.8)", transformOrigin: "center" }}
        />
        <text
          x="210" y="225"
          fill="#94A3B8"
          fontSize="14"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[1] = el)}
        >Search...</text>

        {/* Cards */}
        <g ref={(el) => (rectRefs.current[3] = el)}>
          <rect
            x="180" y="260" 
            width="240" height="80" 
            rx="10" ry="10" 
            stroke="#10B981" 
            fill="#064E3B"
            style={{ transform: "scale(0.8)", transformOrigin: "center" }}
          />
          <text
            x="210" y="290"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="bold"
            fontFamily="Arial"
            ref={(el) => (textRefs.current[2] = el)}
          >Featured Content</text>
          <text
            x="210" y="310"
            fill="#A7F3D0"
            fontSize="12"
            fontFamily="Arial"
            ref={(el) => (textRefs.current[3] = el)}
          >Check out our latest features</text>
        </g>

        <g ref={(el) => (rectRefs.current[4] = el)}>
          <rect
            x="180" y="360" 
            width="110" height="100" 
            rx="10" ry="10" 
            stroke="#F59E0B" 
            fill="#92400E"
            style={{ transform: "scale(0.8)", transformOrigin: "center" }}
          />
          <text
            x="235" y="390"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
            textAnchor="middle"
            ref={(el) => (textRefs.current[4] = el)}
          >Option 1</text>
        </g>

        <g ref={(el) => (rectRefs.current[5] = el)}>
          <rect
            x="310" y="360" 
            width="110" height="100" 
            rx="10" ry="10" 
            stroke="#EC4899" 
            fill="#831843"
            style={{ transform: "scale(0.8)", transformOrigin: "center" }}
          />
          <text
            x="365" y="390"
            fill="#FFFFFF"
            fontSize="12"
            fontWeight="bold"
            fontFamily="Arial"
            textAnchor="middle"
            ref={(el) => (textRefs.current[5] = el)}
          >Option 2</text>
        </g>

        {/* Navigation Bar */}
        <rect
          ref={(el) => (rectRefs.current[6] = el)}
          x="180" y="480" 
          width="240" height="60" 
          rx="15" ry="15" 
          stroke="#64748B" 
          fill="#1E293B"
          style={{ transform: "scale(0.8)", transformOrigin: "center" }}
        />

        {/* Navigation Icons */}
        <g fill="none" stroke="#FFFFFF" strokeWidth="2">
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M210 510 L230 510"
          />
          <circle
            ref={(el) => (pathRefs.current[1] = el)}
            cx="270" cy="510" r="10"
          />
          <path
            ref={(el) => (pathRefs.current[2] = el)}
            d="M330 510 L350 510"
          />
          <path
            ref={(el) => (pathRefs.current[3] = el)}
            d="M390 510 L370 510 M380 500 L380 520"
          />
        </g>

        {/* Animation Elements */}
        <g stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" fill="none">
          <path
            ref={(el) => (pathRefs.current[4] = el)}
            d="M500 150 Q550 200 500 250"
          />
          <path
            ref={(el) => (pathRefs.current[5] = el)}
            d="M500 300 Q550 350 500 400"
          />
          <path
            ref={(el) => (pathRefs.current[6] = el)}
            d="M500 450 Q550 500 500 550"
          />
        </g>

        {/* Floating Elements */}
        <circle
          ref={(el) => (rectRefs.current[7] = el)}
          cx="650" cy="150" r="30"
          stroke="#EC4899"
          fill="#831843"
          style={{ transform: "scale(0)", transformOrigin: "center" }}
        />
        <circle
          ref={(el) => (rectRefs.current[8] = el)}
          cx="600" cy="250" r="25"
          stroke="#F59E0B"
          fill="#92400E"
          style={{ transform: "scale(0)", transformOrigin: "center" }}
        />
        <circle
          ref={(el) => (rectRefs.current[9] = el)}
          cx="700" cy="350" r="20"
          stroke="#10B981"
          fill="#064E3B"
          style={{ transform: "scale(0)", transformOrigin: "center" }}
        />

        {/* Title */}
        <text
          x="400" y="80"
          fill="#FFFFFF"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
          ref={(el) => (textRefs.current[6] = el)}
        >UI Animation Flow</text>

        {/* Description */}
        <text
          x="550" y="250"
          fill="#94A3B8"
          fontSize="16"
          fontFamily="Arial"
          textAnchor="middle"
          ref={(el) => (textRefs.current[7] = el)}
        >Interactive UI Elements</text>
        <text
          x="550" y="280"
          fill="#94A3B8"
          fontSize="14"
          fontFamily="Arial"
          textAnchor="middle"
          ref={(el) => (textRefs.current[8] = el)}
        >With smooth animations</text>
      </svg>
    </div>
  );
};

export default UIAnimationSvg;