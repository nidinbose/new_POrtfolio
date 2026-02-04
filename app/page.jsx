'use client';

import Anime from "./components/Homepage/Anime";
import Landing from "./components/Homepage/Landing";
import ScrollAnime from "./components/ScrollAnime";
import SplashCursor from "./components/Engine/Splash";
import ScrollSvg from "./components/Homepage/TitleAnimation";
import ApiDevelopmentSvg from "./components/Svg/Apisvg";
import NameDrawingAnimation from "./components/Svg/Namesvg";
import YouTubeVideos from "./components/Homepage/Youtube";
import Skills from "./components/Homepage/SkillsSection";
import Footer from "./components/Homepage/Footer";

export default function Page() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Splash Cursor as Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SplashCursor />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Landing />
        {/* <NidinboseAnimation /> */}
        <ScrollAnime />
        <Anime />
         <Skills/>
        {/* <Landing /> */}
        <YouTubeVideos/>
    <NameDrawingAnimation/>
      </div>
      <Footer/>
    </div>
  );
}
