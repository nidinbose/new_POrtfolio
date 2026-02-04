'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSkills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const logosRef = useRef([]);
  const categoryRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current.push(el);
    }
  };

  const addCategoryToRefs = (el) => {
    if (el && !categoryRefs.current.includes(el)) {
      categoryRefs.current.push(el);
    }
  };

  const categories = [
    {
      title: 'Languages',
      items: [
        { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png', link: 'https://www.typescriptlang.org/' },
        { name: 'MongoDB', image: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png', link: 'https://www.mongodb.com/' },
        { name: 'MySQL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2bnLwK46mEPhvxkJERdnX_IR5lXnLBpVaQ&s', link: 'https://www.mysql.com/' },
        { name: 'HTML', image: 'https://icon2.cleanpng.com/20181026/ekk/kisspng-html5-web-application-logo-world-wide-web-5bd352a5b82702.8204823215405759097543.jpg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', image: 'https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      ],
    },
    {
      title: 'Libraries & Frameworks',
      items: [
        { name: 'Node.js', image: 'https://seeklogo.com/images/N/nodejs-logo-52F5C0204E-seeklogo.com.png', link: 'https://nodejs.org/' },
        { name: 'Express', image: 'https://img.icons8.com/color/512/express-js.png', link: 'https://expressjs.com/' },
        { name: 'React.js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFi4_-9fNmkOc4nkBq6YLPG8higxuZsBuXGQ&s', link: 'https://reactjs.org/' },
        { name: 'Tailwind CSS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s', link: 'https://tailwindcss.com/' },
        { name: 'Bootstrap', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s', link: 'https://getbootstrap.com/' },
        { name: 'Ionic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxK7XvFfNJlCNEaeEsEKIu2_SNcNxp_248-w&s', link: 'https://ionicframework.com/' },
        { name: 'Electron', image: 'https://images.seeklogo.com/logo-png/46/2/electron-logo-png_seeklogo-468387.png', link: 'https://www.electronjs.org/' },
        { name: 'Next.js', image: 'https://images.seeklogo.com/logo-png/44/1/next-js-logo-png_seeklogo-449824.png', link: 'https://nextjs.org/' },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        { name: 'Git', image: 'https://img.icons8.com/color/512/git.png', link: 'https://git-scm.com/' },
        { name: 'AWS', image: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png', link: 'https://aws.amazon.com/' },
        { name: 'Netlify', image: 'https://cdn.cosmicjs.com/547d4e20-dd7e-11ee-b074-b5c8fe3ef189-netlify-light.png', link: 'https://www.netlify.com/' },
        { name: 'Vercel', image: 'https://content.instructables.com/FQ5/ICIZ/L8D2F8CO/FQ5ICIZL8D2F8CO.jpg?auto=webp', link: 'https://vercel.com/' },
        { name: 'Render', image: 'https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg', link: 'https://render.com/' },
        { name: 'Firebase', image: 'https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png', link: 'https://firebase.google.com/' },
      ],
    },
    {
      title: 'Microservices',
      items: [
        { name: 'Docker', image: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/09/homepage-docker-logo.png', link: 'https://www.docker.com/' },
        { name: 'Kubernetes', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png', link: 'https://kubernetes.io/' },
        { name: 'Kafka', image: 'https://newrelic.com/sites/default/files/styles/16x9_300w/public/2022-04/kafka-logo.png?h=2240b8e9&itok=XAUtHnEj', link: 'https://kafka.apache.org/' },
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.3,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
    categoryRefs.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });
    logosRef.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        scale: 0.6,
        duration: 0.6,
        delay: i * 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.8,
      delay: 0.5,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    gsap.to(buttonRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    logosRef.current.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          y: -5,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 py-20 bg-transparent relative overflow-hidden mt-12"
    >
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply animate-blob animation-delay-2000"></div>
      
      <h2
        ref={titleRef}
        className="text-sm sm:text-4xl md:text-5xl font-bold text-white text-center mb-16 relative z-10"
      >
        Technologies We Work With
      
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto relative z-10">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <h3 
              ref={addCategoryToRefs}
              className="text-white text-xl sm:text-2xl font-semibold mb-6 text-start pl-4 border-l-4 border-white"
            >
              {category.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {category.items.map((item, i) => (
                <a
                  href={item.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={addToRefs}
                  className="flex flex-col items-center p-4  transition-all duration-300 group backdrop-blur-sm "
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 relative flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain w-10 h-10  group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                   
                  </div>
                  <span className="text-[9px] sm:text-sm mt-3 text-white text-center font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div ref={buttonRef} className="mt-20 flex justify-center relative z-10">
        <button 
          className="w-40 h-40 rounded-full bg-white text-black text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 transform hover:shadow-blue-500/30"
          onClick={() => window.location.href = '/Contact'}
        >
          <span className="text-center px-4">
            Become <br />a client
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </section>
  );
}