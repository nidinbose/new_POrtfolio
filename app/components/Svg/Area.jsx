'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function OurExpertiseSvg() {
  const pathsRef = useRef([]);

  useEffect(() => {
    if (!pathsRef.current) return;

    gsap.fromTo(
      pathsRef.current,
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
  }, []);

  const text = "OUR AREA OF EXPERTISE";

  return (
    <div className="w-full flex justify-center items-center py-10">
      <svg
        className="w-full max-w-sm"
        viewBox={`0 0 ${text.length * 60} 100`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="70"
          className="uppercase"
          fontSize="60"
          fontWeight="bold"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        >
          {text.split("").map((char, i) => (
            <tspan
              key={i}
              ref={(el) => (pathsRef.current[i] = el)}
              dx={char === " " ? 20 : 0}
            >
              {char}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
}
