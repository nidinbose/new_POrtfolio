"use client";
import { useEffect, useRef } from "react";

const NameDrawingAnimation = () => {
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
                path.style.transition = `stroke-dashoffset ${1 + index * 0.1}s ease-in-out`;
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
    <div className="flex justify-center items-center h-screen bg-transparent">
      <svg
        ref={svgRef}
        width="1000"
        height="350"
        viewBox="0 0 1000 350"
        fill="none"
        strokeWidth="5"
      >
        {/* N */}
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M50 50 L50 250 L150 50 L150 250"
          stroke="#7EC8E3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* I */}
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M180 50 L180 250"
          stroke="#7EC8E3"
          strokeLinecap="round"
        />
        {/* D */}
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M210 50 L210 250 Q290 250 290 150 Q290 50 210 50"
          stroke="#4B0082"
          strokeLinecap="round"
        />
        {/* I */}
        <path
          ref={(el) => (pathRefs.current[3] = el)}
          d="M320 50 L320 250"
          stroke="#4B0082"
          strokeLinecap="round"
        />
        {/* N */}
        <path
          ref={(el) => (pathRefs.current[4] = el)}
          d="M350 250 L350 50 L450 250 L450 50"
          stroke="#FF69B4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* B */}
        <path
          ref={(el) => (pathRefs.current[5] = el)}
          d="M500 50 L500 250 Q580 250 580 200 Q580 150 500 150 M500 150 Q580 150 580 100 Q580 50 500 50"
          stroke="#FF69B4"
          strokeLinecap="round"
        />
        {/* O */}
        <path
          ref={(el) => (pathRefs.current[6] = el)}
          d="M620 150 A50 100 0 1 1 619.9 150"
          stroke="#7EC8E3"
          strokeLinecap="round"
        />
        {/* S */}
        <path
          ref={(el) => (pathRefs.current[7] = el)}
          d="M700 60 Q650 90 700 140 Q750 180 700 240"
          stroke="#4B0082"
          strokeLinecap="round"
        />
        {/* E */}
        <path
          ref={(el) => (pathRefs.current[8] = el)}
          d="M760 50 L760 250 M760 50 L830 50 M760 150 L810 150 M760 250 L830 250"
          stroke="#7EC8E3"
          strokeLinecap="round"
        />
        {/* Decorative wave 1 */}
        <path
          ref={(el) => (pathRefs.current[9] = el)}
          d="M50 300 Q500 100 950 300"
          stroke="#FF69B4"
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.7"
        />
        {/* Decorative wave 2 */}
        <path
          ref={(el) => (pathRefs.current[10] = el)}
          d="M50 320 Q500 140 950 320"
          stroke="#4B0082"
          strokeLinecap="round"
          strokeWidth="3"
          strokeOpacity="0.7"
        />
      </svg>
    </div>
  );
};

export default NameDrawingAnimation;
