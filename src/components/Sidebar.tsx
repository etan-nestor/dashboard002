'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard, 
  Pill, 
  ShoppingCart, 
  Users, 
  Truck,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    name: "Tableau de bord",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Médicaments",
    href: "/medicaments",
    icon: Pill,
  },
  {
    name: "Ventes",
    href: "/ventes",
    icon: ShoppingCart,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    name: "Fournisseurs",
    href: "/fournisseurs",
    icon: Truck,
  },
]

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ width: 80 }}
      animate={{ width: isExpanded ? 240 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="hidden md:flex flex-col h-full bg-gradient-to-b from-gray-900 to-green-900 shadow-xl relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Bouton de toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-6 z-10 w-6 h-6 flex items-center justify-center bg-green-600 rounded-full shadow-md hover:bg-green-500 transition-colors"
      >
        {isExpanded ? (
          <ChevronLeft className="w-4 h-4 text-white" />
        ) : (
          <ChevronRight className="w-4 h-4 text-white" />
        )}
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center h-20 p-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg border-2 border-green-400"
        >
          <Pill className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Navigation principale */}
      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col space-y-2 px-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center h-12 rounded-lg px-3 text-white/90 hover:bg-green-800/50 transition-colors group",
                pathname === item.href && "bg-green-800/80 font-medium"
              )}
            >
              <div className="relative flex items-center">
                <item.icon className="w-5 h-5 min-w-[20px] group-hover:text-green-300" />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3 whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
                {pathname === item.href && (
                  <motion.span 
                    layoutId="activeNavItem"
                    className="absolute -left-1 w-1 h-6 bg-green-400 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Section inférieure */}
      <div className="p-4 border-t border-green-800/50">
        <div className="space-y-4">
          <Link
            href="/settings"
            className="flex items-center text-white/80 hover:text-white group"
          >
            <Settings className="w-5 h-5 group-hover:text-green-300" />
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-3 text-sm"
              >
                Paramètres
              </motion.span>
            )}
          </Link>

          <Link
            href="/help"
            className="flex items-center text-white/80 hover:text-white group"
          >
            <HelpCircle className="w-5 h-5 group-hover:text-green-300" />
            {isExpanded && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-3 text-sm"
              >
                Aide
              </motion.span>
            )}
          </Link>

          <div className="pt-4 border-t border-green-800/50">
            {isExpanded && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-white/60 mb-2"
              >
                Support
              </motion.p>
            )}
            <div className="space-y-2">
              <div className="flex items-center group">
                <Mail className="w-4 h-4 text-white/80 group-hover:text-green-300" />
                {isExpanded && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-2 text-xs text-white/80 group-hover:text-white"
                  >
                    contact@opennumeric.com
                  </motion.span>
                )}
              </div>
              <div className="flex items-center group">
                <Phone className="w-4 h-4 text-white/80 group-hover:text-green-300" />
                {isExpanded && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-2 text-xs text-white/80 group-hover:text-white"
                  >
                    +226 65 03 37 42
                  </motion.span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}