'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

const EMOJIS = ['💊', '🧪', '🩺', '💉', '🧬'];
const EMOJI_COUNT = 15;

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <Card className="bg-black/40 backdrop-blur-md border border-green-400/20 overflow-hidden">
          <CardHeader>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 5, 0],
                y: [0, -10, 10, -5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              className="mx-auto mb-6"
            >
              <Image
                src="/images/pharma.jpg"
                alt="Page non trouvée"
                width={150}
                height={150}
                className="drop-shadow-lg"
              />
            </motion.div>
            <CardTitle className="text-center text-4xl font-bold text-green-400">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                4
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                0
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                4
              </motion.span>
            </CardTitle>
            <Separator className="my-4 bg-green-400/20" />
            <div className="text-center text-green-200/80 text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Oups ! Cette page semble introuvable dans notre pharmacie...
              </motion.div>
            </div>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center"
            >
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-green-900/50 hover:bg-green-800/50 border border-green-400/30 rounded-full text-green-200 font-medium transition-all duration-300 hover:scale-105"
              >
                <motion.span
                  animate={{
                    x: [0, 5, -5, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2
                  }}
                >
                  💊
                </motion.span>
                <span className="ml-2">Retour à l'accueil</span>
              </Link>
            </motion.div>
          </CardContent>
        </Card>

        {/* Éléments médicaux animés en arrière-plan (rendu côté client uniquement) */}
        {typeof window !== 'undefined' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: EMOJI_COUNT }).map((_, i) => {
              const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
              const size = Math.random() * 20 + 10;
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 5
                  }}
                  className="absolute"
                  style={{
                    fontSize: `${size}px`,
                    top: `${top}%`,
                    left: `${left}%`,
                  }}
                >
                  {emoji}
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  )
}