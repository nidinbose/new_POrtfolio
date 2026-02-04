"use client";
import { useEffect, useRef } from "react";

const NextJsSvg = () => {
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
    <div className="flex justify-center items-center h-full bg-transparent p-8">
      <svg
        ref={svgRef}
        width="800"
        height="600"
        viewBox="0 0 800 600"
        fill="none"
        strokeWidth="4"
      >
        {/* Next.js Logo (White) */}
        <g stroke="white" strokeLinecap="round">
          <path
            ref={(el) => (pathRefs.current[0] = el)}
            d="M400 150 L600 400 L400 650 L200 400 Z"
          />
          <path
            ref={(el) => (pathRefs.current[1] = el)}
            d="M400 300 A100 100 0 0 1 500 400 L400 400"
          />
          <path
            ref={(el) => (pathRefs.current[2] = el)}
            d="M400 300 A100 100 0 0 0 300 400 L400 400"
          />
        </g>

        {/* Server Component (White) */}
        <g stroke="white" fill="none">
          <path
            ref={(el) => (pathRefs.current[3] = el)}
            d="M150 200 L250 200 L270 220 L270 280 L250 300 L150 300 L130 280 L130 220 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[4] = el)}
            d="M170 230 L230 230"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[5] = el)}
            d="M170 250 L230 250"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[6] = el)}
            d="M170 270 L230 270"
            strokeLinecap="round"
          />
        </g>

        {/* Client Component (White) */}
        <g stroke="white" fill="none">
          <path
            ref={(el) => (pathRefs.current[7] = el)}
            d="M650 200 L750 200 L770 220 L770 280 L750 300 L650 300 L630 280 L630 220 Z"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[8] = el)}
            d="M670 230 L730 230"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[9] = el)}
            d="M670 250 L730 250"
            strokeLinecap="round"
          />
          <path
            ref={(el) => (pathRefs.current[10] = el)}
            d="M670 270 L730 270"
            strokeLinecap="round"
          />
        </g>

        {/* Connection Lines (White) */}
        <g stroke="white" strokeWidth="3" strokeLinecap="round">
          <path
            ref={(el) => (pathRefs.current[11] = el)}
            d="M270 250 L350 250 L350 350 L400 350"
            strokeDasharray="8,5"
          />
          <path
            ref={(el) => (pathRefs.current[12] = el)}
            d="M630 250 L550 250 L550 350 L500 350"
            strokeDasharray="8,5"
          />
        </g>

        {/* Data Flow Animation (White) */}
        <g stroke="white" strokeWidth="3" strokeLinecap="round" fill="none">
          <path
            ref={(el) => (pathRefs.current[13] = el)}
            d="M400 400 L400 500"
          />
          <path
            ref={(el) => (pathRefs.current[14] = el)}
            d="M400 500 L300 500"
          />
          <path
            ref={(el) => (pathRefs.current[15] = el)}
            d="M400 500 L500 500"
          />
        </g>

        {/* Labels (Colored for differentiation) */}
        <text
          x="400" y="120"
          fill="white"
          fontSize="24"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
          ref={(el) => (textRefs.current[0] = el)}
        >Next.js</text>

        <text
          x="150" y="350"
          fill="#61DAFB"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[1] = el)}
        >Server Components</text>

        <text
          x="650" y="350"
          fill="#4BC0C0"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          ref={(el) => (textRefs.current[2] = el)}
        >Client Components</text>

        <text
          x="400" y="550"
          fill="#FFA500"
          fontSize="20"
          fontWeight="bold"
          fontFamily="Arial"
          textAnchor="middle"
          ref={(el) => (textRefs.current[3] = el)}
        >Data Flow</text>
      </svg>
    </div>
  );
};

export default NextJsSvg;