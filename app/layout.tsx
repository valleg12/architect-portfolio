import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "../components/Header"

export const metadata: Metadata = {
  title: "Clémentine Polsenaere - Architecte d'Intérieur",
  description: "Portfolio d'architecture d'intérieur - Projets résidentiels et commerciaux",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-light antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
