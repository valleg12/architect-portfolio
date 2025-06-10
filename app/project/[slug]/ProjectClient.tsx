"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import React from "react"

const basePath = '';

export default function ProjectClient({ project, slug }: { project: any, slug: string }) {
  const [open, setOpen] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-black hover:text-gray-600 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </nav>

      <div className="pt-24 pb-16 px-8 max-w-6xl mx-auto">
        {/* Titre du projet */}
        <div className="mb-12">
          <div className="w-16 h-px bg-black mb-4"></div>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-black">{project.name}</h1>
        </div>

        {/* Image principale */}
        {slug !== "a-propos" && project.mainImage && (
          <div className="mb-12">
            <div className="relative w-full h-96 md:h-[600px] overflow-hidden">
              <Image
                src={project.mainImage ? `/${project.mainImage.replace(/^\//, '')}` : "/placeholder.svg"}
                alt={project.name}
                fill
                className={slug === "rue-levis" ? "object-contain bg-white" : "object-cover"}
                priority
              />
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mb-16 max-w-3xl">
          <ProjectDescription description={project.description} />
        </div>

        {/* Images additionnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.additionalImages.map((image: string, index: number) => (
            <div key={index} className="relative w-full h-80 overflow-hidden cursor-pointer" onClick={() => handleImageClick(image)}>
              <Image
                src={image ? `/${image.replace(/^\//, '')}` : "/placeholder.svg"}
                alt={`${project.name} - Image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={`flex items-center justify-center p-0 max-w-3xl ${selectedImage && selectedImage.match(/\/meuble( |)\d+\.png$/) ? 'bg-white' : 'bg-black/90'}`}>
          <DialogTitle asChild>
            <span className="sr-only">Image projet agrandie</span>
          </DialogTitle>
          {selectedImage && (
            <img src={selectedImage ? `/${selectedImage.replace(/^\//, '')}` : "/placeholder.svg"} alt="Image projet agrandie" className="max-h-[80vh] max-w-full object-contain" onClick={handleClose} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Description stylisée (copie de la fonction du server component)
function ProjectDescription({ description }: { description: string }) {
  // Expressions à styliser
  const highlights = [
    /R[ée]alisation[s]? acad[ée]mique[s]?/gi,
    /Exp[ée]rience professionnelle chez Maison A&G[\w\s\-–,]*/gi
  ];

  function preventWidows(text: string) {
    return text.replace(/ ([a-zA-Zàâçéèêëîïôûùüÿñæœ]{1,2}) /g, " $1 ");
  }

  const lines = description.split(/\n|\r|\r\n|(?=R[ée]alisation[s]? acad[ée]mique[s]?|Exp[ée]rience professionnelle chez Maison A&G)/g);

  return (
    <div className="text-gray-700 text-lg leading-relaxed font-light" style={{ hyphens: 'none', wordBreak: 'break-word' }}>
      {lines.map((line, i) => {
        let styled = line;
        let highlightMatch = null;
        for (const regex of highlights) {
          const match = line.match(regex);
          if (match) {
            highlightMatch = match[0];
            break;
          }
        }
        if (highlightMatch) {
          return (
            <div key={i} className="mt-2 font-serif italic text-base" style={{ fontFamily: 'Georgia, Times, serif', fontStyle: 'italic' }}>
              {highlightMatch}
              {line.replace(highlightMatch, "")}
            </div>
          );
        }
        return <div key={i}>{preventWidows(line.trim())}</div>;
      })}
    </div>
  );
} 