'use client'

import { motion } from 'framer-motion'
import { Menu, Bell, User, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/hooks/use-sidebar'

export function Navbar() {
  const { toggle } = useSidebar()

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-2 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700"
    >
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gray-700"
            onClick={toggle}
          >
            <Menu className="w-5 h-5 text-green-400" />
          </Button>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="hidden md:flex items-center"
          >
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
              OpenPharma
            </h1>
          </motion.div>
        </div>

        <div className="flex-1 max-w-md mx-4">
          <motion.div whileHover={{ scale: 1.01 }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="pl-10 bg-gray-800 border-gray-700 focus-visible:ring-green-500 text-white placeholder-gray-400"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative hover:bg-gray-700">
            <Bell className="w-5 h-5 text-green-400" />
            <motion.span
              className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </Button>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="ghost" className="flex items-center space-x-2 hover:bg-gray-700">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden md:inline-block text-green-200">Admin</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}