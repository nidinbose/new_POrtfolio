'use client';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.8,
        clipPath: "circle(150% at 50% 0%)",
        ease: "power3.out",
        pointerEvents: "auto",
      });

      gsap.fromTo(
        menuItemsRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        duration: 0.6,
        clipPath: "circle(0% at 50% 0%)",
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }
  }, [menuOpen]);

  const handleMouseEnter = (index) => {
    gsap.to(menuItemsRef.current[index], {
      y: -5,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(menuItemsRef.current[index], {
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const subscribe = () => {
    window.open(
      "https://www.youtube.com/channel/UCgFdHfhANr1hsSiwtk255vw?sub_confirmation=1",
      "_blank"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "Shop", href: "/Shop" },
    { name: "Services", href: "/Services" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav
      className={`top-0 fixed left-0 right-0 bg-transparent text-white text-xs z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between z-[9999]">
        <div className="text-2xl font-bold select-none md:">
        <span className="md:hidden">N</span><span className="text-red-600 md:hidden">B</span>
        </div>

        <ul className="hidden md:flex md:space-x-6 lg:space-x-10 items-center">
          {links.map((link, i) => (
            <li
              key={link.name}
              ref={(el) => (menuItemsRef.current[i] = el)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="cursor-pointer transition-colors text-[9px] font-light"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <button
              onClick={subscribe}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition flex items-center gap-2"
            >
            <FaYoutube className="h-5 w-5"/>  Subscribe
            </button>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transform transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5 bg-black" : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition duration-300 ${
              menuOpen ? "opacity-0" : "bg-white"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5 bg-black" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-white text-black overflow-hidden flex flex-col px-10 pt-12 space-y-6 text-5xl md:hidden z-[9999] pointer-events-none"
        style={{
          clipPath: "circle(0% at 50% 0%)",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl text-black focus:outline-none"
          aria-label="Close menu"
        >
          &times;
        </button>

        <div className="mt-20 flex flex-col space-y-6">
          {links.map((link, i) => (
            <a
              key={link.name}
              ref={(el) => (menuItemsRef.current[i] = el)}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-black font-semibold"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              subscribe();
              setMenuOpen(false);
            }}
            className="bg-red-600 text-white text-xl font-semibold px-6 py-3 rounded-full mt-8 flex gap-5 items-center"
          >
           <FaYoutube className="w-10 h-8"/>   Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
