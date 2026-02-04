'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const logoRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    axios.get('/Api/youtube')
      .then((res) => setVideos(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  useEffect(() => {
    // YouTube logo animation
    const paths = logoRef.current.querySelectorAll('path');
    
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    // Underline animation
    const underlinePath = underlineRef.current;
    const underlineLength = underlinePath.getTotalLength();
    
    gsap.set(underlinePath, {
      strokeDasharray: underlineLength,
      strokeDashoffset: underlineLength,
    });

    gsap.to(underlinePath, {
      strokeDashoffset: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: underlinePath,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: 1,
      },
    });
  }, []);

  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header with YouTube logo and animated underline */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div ref={logoRef} className="w-16 h-12">
            <svg
              viewBox="0 0 256 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M250.346 28.075C248.234 17.844 239.651 9.261 229.42 7.149C208.89 4 128 4 128 4C128 4 47.11 4 26.58 7.149C16.349 9.26 7.766 17.843 5.654 28.075C2.5 48.605 2.5 80 2.5 80C2.5 80 2.5 111.395 5.654 131.925C7.766 142.156 16.349 150.739 26.58 152.851C47.11 156 128 156 128 156C128 156 208.89 156 229.42 152.851C239.651 150.739 248.234 142.157 250.346 131.925C253.5 111.395 253.5 80 253.5 80C253.5 80 253.5 48.605 250.346 28.075Z"
                stroke="red"
                strokeWidth="5"
                fill="none"
              />
              <path
                d="M102.5 57.5L168.5 80L102.5 102.5V57.5Z"
                stroke="white"
                strokeWidth="5"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="text-lg md:text-5xl font-bold text-white">YouTube</h1>
        </div>
        
        {/* Animated curved underline */}
        <div className="w-64 h-12 relative">
          <svg
            viewBox="0 0 300 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              ref={underlineRef}
              d="M10 10 C100 40, 200 40, 290 10"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="group bg-gradient-to-tr from-[#0d0d0d] via-black to-[#111] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => handleVideoClick(video.id.videoId)}
          >
            <div className="relative overflow-hidden pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.id.videoId}&controls=0&modestbranding=1&rel=0&showinfo=0`}
                title={video.snippet.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
            </div>

            <div className="p-4">
              <h3 className="text-[7px] font-semibold text-white line-clamp-2">
                {video.snippet.title}
              </h3>
              <p className="text-xs text-gray-400 mt-2 line-clamp-1">
                {video.snippet.channelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}