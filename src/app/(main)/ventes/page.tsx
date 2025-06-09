'use client'

import { motion } from 'framer-motion'
import { PlusCircle, ShoppingCart, Search, Filter, ChevronDown, Printer, ChevronUp } from 'lucide-react'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const sales = [
  {
    id: '1',
    invoice: 'INV-2023-001',
    date: '2023-10-15',
    customer: 'Jean Dupont',
    amount: 142.50,
    status: 'payé',
    items: [
      { name: 'Paracétamol 500mg', qty: 2, price: 2.50 },
      { name: 'Ibuprofène 200mg', qty: 1, price: 3.20 }
    ]
  },
  {
    id: '2',
    invoice: 'INV-2023-002',
    date: '2023-10-14',
    customer: 'Marie Lambert',
    amount: 87.30,
    status: 'payé',
    items: [
      { name: 'Amoxicilline 500mg', qty: 1, price: 8.70 },
      { name: 'Smecta', qty: 3, price: 6.80 }
    ]
  },
  {
    id: '3',
    invoice: 'INV-2023-003',
    date: '2023-10-13',
    customer: 'Lucie Martin',
    amount: 23.75,
    status: 'en attente',
    items: [
      { name: 'Doliprane 1000mg', qty: 5, price: 4.50 }
    ]
  },
  {
    id: '4',
    invoice: 'INV-2023-004',
    date: '2023-10-12',
    customer: 'Pierre Bernard',
    amount: 56.90,
    status: 'annulé',
    items: [
      { name: 'Vitamine C', qty: 2, price: 12.50 },
      { name: 'Magnésium', qty: 1, price: 9.80 }
    ]
  }
]

export default function VentesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const filteredSales = sales.filter(sale => {
    const matchesSearch = sale.invoice.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         sale.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || sale.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'payé':
        return <Badge variant="success">Payé</Badge>
      case 'en attente':
        return <Badge variant="warning">En attente</Badge>
      case 'annulé':
        return <Badge variant="destructive">Annulé</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR')
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
          <ShoppingCart className="w-8 h-8 text-green-400" />
          <h1 className="text-2xl font-bold text-white">Gestion des Ventes</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher une vente..."
              className="pl-10 bg-gray-800 border-gray-700 focus-visible:ring-green-500 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filtrer par statut" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="payé">Payé</SelectItem>
              <SelectItem value="en attente">En attente</SelectItem>
              <SelectItem value="annulé">Annulé</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            Nouvelle vente
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="text-white">Facture</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Client</TableHead>
              <TableHead className="text-right text-white">Montant</TableHead>
              <TableHead className="text-white">Statut</TableHead>
              <TableHead className="text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSales.map((sale) => (
              <React.Fragment key={sale.id}>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-medium text-white">
                    {sale.invoice}
                  </TableCell>
                  <TableCell className="text-gray-300">{formatDate(sale.date)}</TableCell>
                  <TableCell className="text-gray-300">{sale.customer}</TableCell>
                  <TableCell className="text-right text-gray-300">
                    {sale.amount.toFixed(2)} €
                  </TableCell>
                  <TableCell>{getStatusBadge(sale.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-300 hover:text-green-400 hover:bg-gray-700"
                        onClick={() => setExpandedRow(expandedRow === sale.id ? null : sale.id)}
                      >
                        {expandedRow === sale.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-300 hover:text-green-400 hover:bg-gray-700"
                      >
                        <Printer className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                {expandedRow === sale.id && (
                  <TableRow className="bg-gray-800/30">
                    <TableCell colSpan={6}>
                      <div className="p-4">
                        <h4 className="font-medium text-gray-300 mb-2">Détails de la vente</h4>
                        <div className="border border-gray-700 rounded-lg overflow-hidden">
                          <Table>
                            <TableHeader className="bg-gray-900/50">
                              <TableRow>
                                <TableHead className="text-gray-300">Médicament</TableHead>
                                <TableHead className="text-right text-gray-300">Quantité</TableHead>
                                <TableHead className="text-right text-gray-300">Prix unitaire</TableHead>
                                <TableHead className="text-right text-gray-300">Total</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {sale.items.map((item, index) => (
                                <TableRow key={index} className="border-gray-700">
                                  <TableCell className="text-gray-300">{item.name}</TableCell>
                                  <TableCell className="text-right text-gray-300">{item.qty}</TableCell>
                                  <TableCell className="text-right text-gray-300">{item.price.toFixed(2)} €</TableCell>
                                  <TableCell className="text-right text-gray-300">{(item.qty * item.price).toFixed(2)} €</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredSales.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <ShoppingCart className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-400">Aucune vente trouvée</h3>
          <p className="text-gray-500 mt-1">Essayez de modifier vos critères de recherche</p>
        </motion.div>
      )}
    </motion.div>
  )
}