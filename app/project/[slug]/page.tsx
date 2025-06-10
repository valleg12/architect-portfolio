import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import React from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import ProjectClient from "./ProjectClient"

const projectsData = {
  "rue-faidherbe": {
    name: "Rue Faidherbe",
    description: `Au cœur du 11ᵉ arrondissement de Paris, un projet de rénovation partielle redonne vie à deux appartements. Conçu pour répondre aux besoins d'une famille, le nouvel aménagement préserve le charme de l'ancien tout en apportant une touche de modernité. 
Les éléments d'origine : moulures, parquets en point de Hongrie et cheminées en marbre ont été conservés et mis en valeur, tandis que la circulation entre les espaces a été repensée pour offrir fluidité, ouverture et lumière naturelle. 
Expérience professionnelle chez Maison A&G - 3D - DCE`,
    mainImage: '/image principale "rue de faidherbe".jpg',
    additionalImages: [
      '/images pour faidherbe3.jpg',
      '/image 2 "rue de faidherbe".jpg',
      '/image 4  "rue de faidherbe" .jpg',
      '/image 6 "rue de faidherbe".jpg',
      '/faidherbe7.jpg'
    ],
  },
  "ecole-cuisine": {
    name: "L'Ecole de restauration",
    description: `Située dans dans le quartier Châtelain de Bruxelles l'Ecole de restauration est une vitrine de la gastronomie avec différents savoir-faire mis en scène. Bien plus qu'un simple centre de formation, ce lieu hybride mêle enseignement, expérimentation culinaire et vie de quartier.\nLe projet intègre des cuisines pédagogiques, un restaurant d'application expérimental, un potager urbain et même des chambres pour les étudiants, favorisant une immersion complète. \nAu cœur du bâtiment, une rue intérieure animée s'ouvre chaque jour de la semaine au public, offrant une expérience conviviale à travers des foodcourts, une boulangerie et un square accessible à tous.\nRéalisations académiques plan projet - maquette - illustrations`,
    mainImage: "/site.jpg",
    additionalImages: [
      "/site1.jpg",
      "/site3.jpg"
    ],
  },
  "rue-levis": {
    name: "Rue Lévis",
    description: `Situé dans le quartier des Batignolles, un appartement duplex de 160 m² a fait l'objet d'une rénovation totale, mêlant avec subtilité l'architecture classique haussmannienne et les fondements ancestraux du feng shui. L'objectif : créer un lieu de vie apaisant pour la cliente. \nChaque volume a été repensé pour favoriser la circulation de l'énergie, en s'appuyant sur une orientation précise, une palette de matériaux naturels, et une organisation intérieure respectant les cinq éléments fondamentaux. \nExpérience professionnelle chez Maison A&G - 3D - DCE - suivi de chantier`,
    mainImage: '/image principale rue de levis.jpg',
    additionalImages: [
      '/image 4 suivant le texte "rue de levis".jpg',
      '/image 1 suivant le texte "rue de levis".jpg',
      '/image 3 suivant le texte "rue de levis".jpg',
      '/image 2 suivant le texte "rue de levis".jpg'
    ],
  },
  "escalier": {
    name: "L'escalier",
    description: `L'appartement mêle architecture atypique et esthétique contemporaine entre les matières brutes et les pièces chinées sélectionnées. Le lieu s'articule autour des volumes réinventés, une mezzanine surplombe la pièce de vie et abrite l'espace nuit accessible depuis l'escalier. Sculptural et aérien, l'escalier s'impose dans le lieu comme l'axe central de l'appartement. Afin de fluidifier la circulation, une boite massive regroupe les éléments fonctionnelles de l'appartement.  \nRéalisation académique - collage - DCE`,
    mainImage: "/site4.jpg",
    additionalImages: [
      '/image 1 apres le texte "l\'escalier".jpg',
      '/image 2 apres le texte "l\'escalier".jpg'
    ],
  },
  "montmorency": {
    name: "Montmorency",
    description: `La Villa Montmorency est un lotissement privé et sécurisé situé dans le 16e arrondissement de Paris, dans le quartier d'Auteuil. Réputée pour son calme, sa discrétion et son prestige, elle est l'un des lieux les plus exclusifs de la capitale. J'ai participé à la conception de cette villa luxueuse. \nExpérience professionnelle chez Maison A&G  - 3D`,
    additionalImages: [
      "/AUTEUIL_R+1_14.jpg",
      "/AUTEUIL_R+1_16 2.jpg",
      "/AUTEUIL_RDC_17.jpg",
      "/AUTEUIL_R+1_7.jpg"
    ],
  },
  "boites-noires": {
    name: "Le collage",
    description: `L'utilisation du collage est une forme d'art composée de pièces superposées mais aussi un outil de conception. Il m'a permis dans ce projet de rechercher des associations inattendues entre matériaux et formes, de construire un plan d'ensemble, d'établir les circulations et volumes et enfin d'imaginer des mobiliers. Cet exercice permet de travailler la créativité, d'explorer différentes atmosphères et de visualiser rapidement un concept. \nSitué au Grand Large de Péronne, le Méné Bleu est un restaurant qui prend vie. Des intermittents du spectacle ou des danseurs habitent les lieux alors que des clients se restaurent. Raffiné et intimiste le restaurant propose des mets gastronomiques autour du poisson.\n\n"_Réalisation académique - plan projet - collages_"`,
    mainImage: "/le collage plan1.jpg",
    additionalImages: [
      "/le collage plan.jpg",
      "/le collage plan3.jpg"
    ],
  },
  "collage": {
    name: "Le collage",
    description: `L'utilisation du collage est une forme d'art composée de pièces superposées mais aussi un outil de conception. Il m'a permis dans ce projet de rechercher des associations inattendues entre matériaux et formes, de construire un plan d'ensemble, d'établir les circulations et volumes et enfin d'imaginer des mobiliers. Cet exercice permet de travailler la créativité, d'explorer différentes atmosphères et de visualiser rapidement un concept. \nSitué au Grand Large de Péronne, le Méné Bleu est un restaurant qui prend vie. Des intermittents du spectacle ou des danseurs habitent les lieux alors que des clients se restaurent. Raffiné et intimiste le restaurant propose des mets gastronomiques autour du poisson.\nRéalisation académique - collage - plan projeté - maquette`,
    mainImage: "/le collage plan1.jpg",
    additionalImages: [
      "/le collage plan.jpg",
      "/le collage plan3.jpg",
      "/meuble 1.png",
      "/meuble2.png",
      "/meuble3.png",
      "/meuble4.png",
      "/meuble5.png",
      "/meuble6.png"
    ],
  },
  "zaizai": undefined,
  "a-propos": undefined,
}

function ProjectDescription({ description }: { description: string }) {
  // Expressions à styliser
  const highlights = [
    /R[ée]alisation[s]? acad[ée]mique[s]?/gi,
    /Exp[ée]rience professionnelle chez Maison A&G[\w\s\-–,]*/gi
  ];

  // Ajout d'espaces insécables sur les mots courts (français)
  function preventWidows(text: string) {
    return text.replace(/ ([a-zA-Zàâçéèêëîïôûùüÿñæœ]{1,2}) /g, " $1 ");
  }

  // Split par ligne et applique le style
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
          // Affiche la mention sur une nouvelle ligne, italique, police différente
          return (
            <div key={i} className="mt-2 font-serif italic text-base" style={{ fontFamily: 'Georgia, Times, serif', fontStyle: 'italic' }}>
              {highlightMatch}
              {line.replace(highlightMatch, "")}
            </div>
          );
        }
        // Texte normal, avec gestion des orphelines
        return <div key={i}>{preventWidows(line.trim())}</div>;
      })}
    </div>
  );
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return <ProjectClient project={project} slug={slug} />
}

// Génération des slugs pour l'export statique
export function generateStaticParams() {
  return (Object.keys(projectsData) as Array<keyof typeof projectsData>)
    .filter((slug) => !!projectsData[slug])
    .map((slug) => ({ slug }))
}
