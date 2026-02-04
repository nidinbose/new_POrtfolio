"use client";
import React, { useEffect, useState } from "react";
import Splittext from '../Engine/Splittext'

const arr = [
  { id: 20, text: "Projects Completed" },
  { id: 10, text: "Clients worldwide" },
  { id: 2, text: "Years of Experience" },
  { id: 2, text: "Awards Achieved" },
];

const skill = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    text: "Mongodb",
  },
  {
    img: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
    text: "Express",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    text: "React",
  },
  {
    img: "https://cdn.prod.website-files.com/6449405754e757db07f25327/665642ccf15387c17b7ddee2_node.webp",
    text: "Node.js",
  },
  {
    img: "https://ellipsiseducation.com/wp-content/uploads/2023/02/javascript-736400_1280.png",
    text: "JavaScript",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVklzfGsO-6hPFSuutVa0ingPtO5KZgg2vA-irnqZosRmpp4HHc12Ir-taFq3oO4ujPo&usqp=CAU",
    text: "TailwindCss",
  },
  {
    img: "https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
    text: "Bootstrap",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    text: "Docker",
  },
  {
    img: "https://juststickers.in/wp-content/uploads/2018/11/kubernetes-wordmark.png",
    text: "Kubernetes",
  },
  {
    img: "https://images.seeklogo.com/logo-png/31/2/amazon-web-services-aws-logo-png_seeklogo-319188.png",
    text: "AWS",
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % arr.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-12 mb-12 px-4 sm:px-6 md:px-12 max-w-7xl">


      <Splittext
        text="Skillsets"
        className=" text-xl md:text-5xl sea mb-12 text-white text-center md:text-start "
      delay={150} animateBy="words" direction="top"
      />

      <div className="flex items-start justify-end mt-7">
        <Splittext
          text="Proficient in MERN Stack for building full-stack web applications. Skilled in creating responsive ui with react designing restful APIs with express js and managing data using "
         delay={150} animateBy="words" direction="bottom"
          className="text-xs max-w-xl text-start text-white"
        />
      </div>

      <div className="scroll-container h-16 sm:h-20 mt-12 overflow-x-auto">
        <div className="scroll-content flex gap-4 w-max">
          {[...skill, ...skill].map((item, index) => (
            <div
              className="group shadow-md rounded-full flex items-center justify-center gap-4 px-3 py-1 sm:px-4 sm:py-2 w-auto flex-shrink-0 text-xs sm:text-sm bg-black"
              key={index}
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cover"
              />
              <h1 className="sea ml-2 truncate text-center text-white group-hover:text-white">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm text-black mt-8 animate-bounce sea text-end">
        Scroll down ↓
      </div>
    </div>
  );
}