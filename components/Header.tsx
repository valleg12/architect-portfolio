"use client"

import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [showAbout, setShowAbout] = useState(false)
  const basePath = '/architect-portfolio';
  return (
    <header className="w-full flex flex-col items-center mt-8 mb-8 select-none">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-black uppercase mb-2">CLEMENTINE POLSENAERE</h1>
      <div className="flex flex-row items-center gap-4 text-xs md:text-sm font-light text-gray-700" style={{ fontFamily: 'Avenir Next Condensed, Arial Narrow, Arial, sans-serif' }}>
        <button
          className="underline hover:text-black transition-colors"
          onClick={() => setShowAbout((v) => !v)}
          style={{ fontFamily: 'Avenir Next Condensed, Arial Narrow, Arial, sans-serif', fontSize: '0.95em' }}
        >
          A propos
        </button>
        <span>-</span>
        <span>0643743683</span>
        <span>-</span>
        <a href="mailto:clementinepolsenaere@gmail.com" className="underline hover:text-black">clementinepolsenaere@gmail.com</a>
        <span>-</span>
        <a href="https://www.linkedin.com/in/cl%C3%A9mentine-polsenaere-296879283/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">LinkedIn</a>
      </div>
      {showAbout && (
        <div className="mt-4 flex flex-col items-center animate-fade-in">
          <Image src="/profilepic.jpg" alt="Clementine Polsenaere" width={200} height={300} style={{ width: '200px', height: 'auto' }} />
          <p className="max-w-md text-center text-sm text-gray-700 font-light" style={{ fontFamily: 'Avenir Next Condensed, Arial Narrow, Arial, sans-serif' }}>
            Diplômée en Belgique à l'école des arts de Saint Luc, mon parcours mêle formation artistique, sens du détails et expériences concrètes en agence, notamment chez Maison A&G, où j'ai participé à des projets complets, de la conception à la phase chantier.<br />
            Mon approche à l'architecture d'intérieur tertiaire s'est développée récemment à travers une spécialisation à MMI Déco, me permettant d'élargir mes compétences dans des environnements professionnels et collectifs.
          </p>
        </div>
      )}
    </header>
  )
} 