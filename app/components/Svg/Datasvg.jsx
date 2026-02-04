"use client";
import { useEffect, useRef } from "react";

const ApiRequestSvg = () => {
  const svgRef = useRef(null);
  const pathRefs = useRef([]);

  useEffect(() => {
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
            pathRefs.current.forEach((path, index) => {
              if (!path) return;
              setTimeout(() => {
                path.style.transition = "stroke-dashoffset 1.5s ease-in-out";
                path.style.strokeDashoffset = "0";
              }, index * 150);
            });
          } else {
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
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Client Device */}
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M100 150 L200 150 L220 170 L220 230 L200 250 L100 250 L80 230 L80 170 Z"
          strokeLinecap="round"
        />
        
        {/* Server */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M400 100 L500 100 L520 120 L520 280 L500 300 L400 300 L380 280 L380 120 Z"
          strokeLinecap="round"
        />
        
        {/* Server Details */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M420 140 H480"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M420 170 H480"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M420 200 H480"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[5] = el)}
          d="M420 230 H480"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[6] = el)}
          d="M420 260 H480"
          strokeLinecap="round"
        />
        
        {/* Request Path */}
        <path
          ref={(el) => (pathRefs.current[7] = el)}
          d="M220 200 Q300 150 380 200"
          strokeDasharray="10,5"
          strokeLinecap="round"
        />
        
        {/* Request Arrow */}
        <path
          ref={(el) => (pathRefs.current[8] = el)}
          d="M350 190 L360 200 L350 210"
          fill="currentColor"
          strokeLinecap="round"
        />
        
        {/* Response Path */}
        <path
          ref={(el) => (pathRefs.current[9] = el)}
          d="M380 200 Q300 250 220 200"
          strokeDasharray="5,5"
          strokeLinecap="round"
        />
        
        {/* Response Arrow */}
        <path
          ref={(el) => (pathRefs.current[10] = el)}
          d="M250 190 L240 200 L250 210"
          fill="currentColor"
          strokeLinecap="round"
        />
        
        {/* Request Payload */}
        <path
          ref={(el) => (pathRefs.current[11] = el)}
          d="M240 120 H340"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[12] = el)}
          d="M240 130 H340"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[13] = el)}
          d="M240 140 H340"
          strokeLinecap="round"
        />
        
        {/* Curly Braces for JSON */}
        <path
          ref={(el) => (pathRefs.current[14] = el)}
          d="M230 120 Q235 110 240 120"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[15] = el)}
          d="M230 140 Q235 150 240 140"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[16] = el)}
          d="M340 120 Q345 110 350 120"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[17] = el)}
          d="M340 140 Q345 150 350 140"
          strokeLinecap="round"
        />
        
        {/* Status Code */}
        <path
          ref={(el) => (pathRefs.current[18] = el)}
          d="M300 300 H330 V330 H300 Z"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[19] = el)}
          d="M305 305 L315 305"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[20] = el)}
          d="M305 315 L325 315"
          strokeLinecap="round"
        />
        <path
          ref={(el) => (pathRefs.current[21] = el)}
          d="M305 325 L315 325"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ApiRequestSvg;