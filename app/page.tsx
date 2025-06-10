"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  { id: 1, slug: "rue-faidherbe", name: "Rue Faidherbe", image: "zoom-rue-de-faidherbe.png" },
  { id: 2, slug: "ecole-cuisine", name: "L'Ecole de restauration", image: "zoom-ecole-de-restauration.png" },
  { id: 3, slug: "rue-levis", name: "Rue Lévis", image: "zoom-rue-de-levis.png" },
  { id: 4, slug: "escalier", name: "L'escalier", image: "zoom-lescalier.png" },
  { id: 5, slug: "montmorency", name: "Montmorency", image: "zoom-montmorency.png" },
  { id: 6, slug: "collage", name: "Le collage", image: "zoom-le-collage.jpg" },
]

const basePath = '';

export default function HomePage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-white">
      {/* Carrousel horizontal centré */}
      <div className="flex items-center justify-center h-full pt-4">
        <div className="flex gap-2 px-8 overflow-x-auto scrollbar-hide max-w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative flex-shrink-0 group cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Titre au-dessus de l'image, ferré à gauche, visible uniquement au survol */}
              <div
                className="h-8 flex items-end mb-2 w-full"
                style={{ minHeight: '2.5rem' }}
              >
                {hoveredProject === project.id && (
                  <span
                    className="font-title text-lg md:text-2xl font-medium tracking-tight text-black"
                    style={{ fontFamily: 'Avenir Next Condensed, Arial Narrow, Arial, sans-serif', fontWeight: 500, textAlign: 'left', display: 'block' }}
                  >
                    {project.name}
                  </span>
                )}
              </div>
              <Link href={`/project/${project.slug}`}>
                <div className="relative w-80 md:w-96" style={{ aspectRatio: '3/2' }}>
                  <Image
                    src={project.image ? `/${project.image}` : "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
