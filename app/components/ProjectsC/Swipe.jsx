import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Swipe() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: "001",
      title: "AGENCY WEBSITE DESIGN",
      year: "2025",
      shortDesc: "Creative agency portfolio website",
      description:
        "Modern agency website with smooth animations, case studies and CMS driven content.",
      tools: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourrepo",
      live: "https://yourliveapp.com",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c",
      ],
    },
    {
      id: "002",
      title: "MOBILE APP DESIGN",
      year: "2025",
      shortDesc: "UI/UX for cross platform mobile app",
      description:
        "Mobile application UI system with design tokens, prototyping and interaction flows.",
      tools: ["Figma", "React Native"],
      github: "https://github.com/yourrepo",
      live: "https://yourliveapp.com",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      ],
    },
    {
      id: "003",
      title: "DASHBOARD DESIGN",
      year: "2025",
      shortDesc: "Analytics dashboard UI",
      description:
        "Admin analytics dashboard with charts, role access and responsive layouts.",
      tools: ["React", "Chart.js", "Tailwind"],
      github: "https://github.com/yourrepo",
      live: "https://yourliveapp.com",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      ],
    },
    {
      id: "004",
      title: "SAAS WEBSITE DESIGN",
      year: "2025",
      shortDesc: "Landing page for SaaS product",
      description:
        "Conversion focused SaaS marketing website with animations and pricing flows.",
      tools: ["Next.js", "GSAP", "Tailwind"],
      github: "https://github.com/yourrepo",
      live: "https://yourliveapp.com",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="text-gray-500 tracking-widest text-xs mb-3">✦ PROJECTS</p>
        <h1 className="text-xl md:text-3xl font-semibold mb-4">Recent Projects</h1>
        <p className="text-gray-500 max-w-xl mx-auto text-[9px] md:text-sm">
          Our work is more than design - it's the result of deep thinking,
          fresh ideas and fearless execution across disciplines.
        </p>
      </div>

      {/* GRID — EXACT STYLE LIKE IMAGE */}
      {!selectedProject && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* IMAGE CARD */}
              <div className="relative rounded-xl border-2 px-2 py-2  border-white/10 overflow-hidden bg-neutral-900 shadow-2xl">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-[320px] object-cover rounded-xl group-hover:scale-105 transition duration-500"
                />

                {/* HOVER VIEW BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm">
                    VIEW
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-4 flex items-center justify-between border border-white/10 bg-white/10 rounded-xl px-4 py-3 text-sm text-gray-400">
                <span className="text-white text-[7px] md:text-sm">{project.id}.</span>
                <span className="text-white text-[7px] md:text-sm">{project.title}</span>
                <span className="text-white text-[7px] md:text-sm">// {project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* DETAILS PAGE */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto"
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-8 px-5 py-2 border border-white/20 rounded-lg hover:bg-white/10"
          >
            ← Back
          </button>

          <h2 className="text-4xl font-semibold mb-4">{selectedProject.title}</h2>
          <p className="text-gray-400 mb-6">{selectedProject.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {selectedProject.tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-white/10 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-10">
            <a
              href={selectedProject.github}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-lg"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={selectedProject.live}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 bg-neutral-800 rounded-lg"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>

          <img
            src={selectedProject.images[0]}
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>
      )}
    </div>
  );
}
