import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenPharma - Gestion de Pharmacie',
  description: 'Solution complète de gestion pharmaceutique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="light">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}