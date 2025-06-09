'use client'

import { motion } from 'framer-motion'
import { PlusCircle, Pill, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

const medications = [
  {
    id: '1',
    name: 'Paracétamol 500mg',
    category: 'Antidouleur',
    stock: 142,
    price: 2.5,
    status: 'disponible',
    lastUpdate: '2023-10-15'
  },
  {
    id: '2',
    name: 'Ibuprofène 200mg',
    category: 'Anti-inflammatoire',
    stock: 87,
    price: 3.2,
    status: 'disponible',
    lastUpdate: '2023-10-14'
  },
  {
    id: '3',
    name: 'Amoxicilline 500mg',
    category: 'Antibiotique',
    stock: 23,
    price: 8.7,
    status: 'stock faible',
    lastUpdate: '2023-10-10'
  },
  {
    id: '4',
    name: 'Doliprane 1000mg',
    category: 'Antidouleur',
    stock: 0,
    price: 4.5,
    status: 'rupture',
    lastUpdate: '2023-10-12'
  },
  {
    id: '5',
    name: 'Smecta',
    category: 'Antidiarrhéique',
    stock: 56,
    price: 6.8,
    status: 'disponible',
    lastUpdate: '2023-10-13'
  },
]

export default function MedicamentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' })
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const filteredMedications = medications.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const requestSort = (key: string) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  const sortedMedications = [...filteredMedications].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'disponible':
        return <Badge variant="success">Disponible</Badge>
      case 'stock faible':
        return <Badge variant="warning">Stock faible</Badge>
      case 'rupture':
        return <Badge variant="destructive">Rupture</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center space-x-3">
          <Pill className="w-8 h-8 text-green-400" />
          <h1 className="text-2xl font-bold text-white">Gestion des Médicaments</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher un médicament..."
              className="pl-10 bg-gray-800 border-gray-700 focus-visible:ring-green-500 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="text-white w-[300px]">
                <button
                  onClick={() => requestSort('name')}
                  className="flex items-center hover:text-green-400"
                >
                  Nom
                  {sortConfig.key === 'name' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp className="ml-1 w-4 h-4" /> : 
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>
              </TableHead>
              <TableHead className="text-white">
                <button
                  onClick={() => requestSort('category')}
                  className="flex items-center hover:text-green-400"
                >
                  Catégorie
                  {sortConfig.key === 'category' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp className="ml-1 w-4 h-4" /> : 
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>
              </TableHead>
              <TableHead className="text-white">
                <button
                  onClick={() => requestSort('stock')}
                  className="flex items-center hover:text-green-400"
                >
                  Stock
                  {sortConfig.key === 'stock' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp className="ml-1 w-4 h-4" /> : 
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>
              </TableHead>
              <TableHead className="text-white">
                <button
                  onClick={() => requestSort('price')}
                  className="flex items-center hover:text-green-400"
                >
                  Prix
                  {sortConfig.key === 'price' && (
                    sortConfig.direction === 'ascending' ? 
                    <ChevronUp className="ml-1 w-4 h-4" /> : 
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>
              </TableHead>
              <TableHead className="text-white">Statut</TableHead>
              <TableHead className="text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedMedications.map((med) => (
              <motion.tr 
                key={med.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`border-gray-700 hover:bg-gray-700/50 ${expandedRow === med.id ? 'bg-gray-700/30' : ''}`}
              >
                <TableCell className="font-medium text-white">
                  {med.name}
                </TableCell>
                <TableCell className="text-gray-300">{med.category}</TableCell>
                <TableCell className="text-gray-300">{med.stock}</TableCell>
                <TableCell className="text-gray-300">{med.price.toFixed(2)} €</TableCell>
                <TableCell>{getStatusBadge(med.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-gray-300 hover:text-green-400 hover:bg-gray-700"
                      onClick={() => setExpandedRow(expandedRow === med.id ? null : med.id)}
                    >
                      {expandedRow === med.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-green-400 hover:bg-gray-700">
                      Modifier
                    </Button>
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      {sortedMedications.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <Pill className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-400">Aucun médicament trouvé</h3>
          <p className="text-gray-500 mt-1">Essayez de modifier vos critères de recherche</p>
        </motion.div>
      )}
    </motion.div>
  )
}