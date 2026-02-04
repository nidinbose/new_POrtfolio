'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-black py-12 px-4 md:px-8 lg:px-16 xl:px-20 pointer-events-auto z-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-tr from-[#0d0d0d] via-black to-[#111] rounded-3xl shadow-2xl px-6 py-10 md:py-12 lg:py-16">
          
          {/* Badge */}
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold bg-white text-black">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed tracking-wide text-white">
            Let's create your
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed tracking-wide text-white">
            next big idea.
          </h1>

          {/* CTA Button */}
          <a
            href="https://wa.me/917012543724"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gradient-to-tr from-[#0d0d0d] via-black to-[#111] text-white text-sm md:text-base font-medium px-6 py-3 rounded-full hover:scale-105 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10">
          <div className="flex justify-center flex-wrap gap-6 text-xl text-white">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>

          {/* Footer Text */}
          <p className="mt-6 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Nidinbose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
