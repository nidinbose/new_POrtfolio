'use client';

import SocialAbout from "../components/AboutC/SocialAbout";
import Fields from "../components/Contact/Fields";
import SplashCursor from "../components/Engine/Splash";
import Footer from "../components/Homepage/Footer";

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-black min-h-screen text-white">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SplashCursor />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-full text-6xl font-bold">
    <Fields/>
        
      </div>
          <SocialAbout/>
          <Footer/>
    </div>
  );
}
