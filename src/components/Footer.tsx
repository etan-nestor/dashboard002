'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            whileHover={{ scale: 1.01 }}
            className="text-sm text-gray-400"
          >
            © {new Date().getFullYear()} OpenPharma. Tous droits réservés.
          </motion.p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                Confidentialité
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                Conditions
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}