'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Swipe() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Panel animations
    gsap.set(".panel", {
      zIndex: (i, target, targets) => targets.length - i,
      height: "100%",
    });

    const images = gsap.utils.toArray('.panel');
    const totalDuration = images.length * 0.8;

    images.forEach((image, i) => {
      const startPos = i * 0.8;

      gsap.to(image, {
        height: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".black-section",
          start: `top+=${startPos * window.innerHeight} top`,
          end: `+=${window.innerHeight * 0.8}`,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
      });
    });

    // Text animations
    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    const texts = gsap.utils.toArray('.panel-text');

    texts.forEach((text, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".black-section",
          start: () => `top+=${i * 0.8 * window.innerHeight} top`,
          end: () => `+=${window.innerHeight * 0.8}`,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      tl
        .to(text, {
          duration: 0.5,
          opacity: 1,
          y: "0%",
          ease: "power2.out",
        })
        .to(
          text,
          {
            duration: 0.5,
            opacity: 0,
            y: "-20%",
            ease: "power2.in",
          },
          "+=0.2"
        );
    });

    // Pin section
    ScrollTrigger.create({
      trigger: ".black-section",
      pin: true,
      start: "top top",
      end: () => `+=${totalDuration * window.innerHeight}`,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    { 
      text1: "Hexspin ai based practiceing and learning hub", 
      text2: "Microservices architucture (MERN)", 
      color: "text-blue-400",
      description: "Interactive portfolio featuring scroll-triggered animations and smooth transitions",
      tech: ["Mongodb", "Express", "React", "Node.js", "Framer Motion","google genarative ai","Docker","kubernetis","gsap"],
      liveLink: "https://portfolio.example.com",
      githubLink: "https://github.com/username/portfolio"
    },
    { 
      text1: "E-Commerce Platform", 
      text2: "Next.js + Stripe", 
      color: "text-red-400",
      description: "Full-stack e-commerce solution with secure payment processing",
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind", "NextAuth"],
      liveLink: "https://store.example.com",
      githubLink: "https://github.com/username/ecommerce"
    },
    { 
      text1: "Analytics Dashboard", 
      text2: "React + D3.js", 
      color: "text-orange-400",
      description: "Real-time data visualization with interactive charts and widgets",
      tech: ["React", "D3.js", "Firebase", "Material UI", "Chart.js"],
      liveLink: "https://analytics.example.com",
      githubLink: "https://github.com/username/dashboard"
    },
    { 
      text1: "Mobile Application", 
      text2: "React Native", 
      color: "text-purple-400",
      description: "Cross-platform mobile app with offline capabilities",
      tech: ["React Native", "Expo", "Firestore", "Redux", "NativeBase"],
      liveLink: "https://expo.io/@username/app",
      githubLink: "https://github.com/username/mobile-app"
    }
  ];

  const images = [
    {
      src: "./Images/P1.png",
      alt: "Design Portfolio",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      alt: "E-Commerce Platform",
    },
    {
      src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      alt: "Analytics Dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      alt: "Mobile Application",
    },
  ];

  return (
    <div ref={containerRef} className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="grid h-screen place-items-center bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Interactive Portfolio Showcase
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl opacity-90">
            Scroll down to explore my projects with smooth animations
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="black-section h-screen w-full bg-transparent">
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-12 max-w-7xl mx-auto">
          {/* Text Column */}
          <div className="relative h-[40vh] sm:h-[50vh] md:h-full overflow-hidden order-2 md:order-1">
            {projects.map((project, index) => (
              <div
                key={index}
                className="panel-text absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 text-white text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold uppercase opacity-0"
              >
                <span className='text-[10px] md:text-lg text-white'>{project.text1}</span>
                <span className={`${project.color} mb-4 text-[6px] md:text-sm`}>{project.text2}</span>
                
                <div className="mt-2 text-xs sm:text-sm md:text-base font-normal normal-case opacity-70">
                  <p className="mb-3 text-[7px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-[7px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 underline text-sm"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white underline text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className="relative h-[40vh] sm:h-[50vh] md:h-[50vh] xl:h-full overflow-hidden rounded-xl order-1 md:order-2">
            {images.map(({ src, alt }, index) => (
              <div
                key={index}
                className="panel absolute inset-0 h-full w-full overflow-hidden"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full bg-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}