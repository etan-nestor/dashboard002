'use client'

import { motion } from 'framer-motion'
import { PlusCircle, Users, Search, Filter, ChevronDown, Pencil, Trash2, ChevronUp } from 'lucide-react'
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

const clients = [
  {
    id: '1',
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '+226 65 03 37 42',
    totalPurchases: 1425.50,
    lastPurchase: '2023-10-15',
    status: 'actif'
  },
  {
    id: '2',
    name: 'Marie Lambert',
    email: 'marie.lambert@example.com',
    phone: '+226 70 12 34 56',
    totalPurchases: 873.30,
    lastPurchase: '2023-10-14',
    status: 'actif'
  },
  {
    id: '3',
    name: 'Lucie Martin',
    email: 'lucie.martin@example.com',
    phone: '+226 65 55 66 77',
    totalPurchases: 237.75,
    lastPurchase: '2023-09-28',
    status: 'inactif'
  },
  {
    id: '4',
    name: 'Pierre Bernard',
    email: 'pierre.bernard@example.com',
    phone: '+226 70 88 99 00',
    totalPurchases: 569.90,
    lastPurchase: '2023-08-12',
    status: 'banni'
  }
]

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.phone.includes(searchTerm)
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'actif':
        return <Badge variant="success">Actif</Badge>
      case 'inactif':
        return <Badge variant="warning">Inactif</Badge>
      case 'banni':
        return <Badge variant="destructive">Banni</Badge>
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
          <Users className="w-8 h-8 text-green-400" />
          <h1 className="text-2xl font-bold text-white">Gestion des Clients</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher un client..."
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
              <SelectItem value="actif">Actif</SelectItem>
              <SelectItem value="inactif">Inactif</SelectItem>
              <SelectItem value="banni">Banni</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            Nouveau client
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="text-white">Nom</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Téléphone</TableHead>
              <TableHead className="text-right text-white">Total Achats</TableHead>
              <TableHead className="text-white">Dernier achat</TableHead>
              <TableHead className="text-white">Statut</TableHead>
              <TableHead className="text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <React.Fragment key={client.id}>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-medium text-white">
                    {client.name}
                  </TableCell>
                  <TableCell className="text-gray-300">{client.email}</TableCell>
                  <TableCell className="text-gray-300">{client.phone}</TableCell>
                  <TableCell className="text-right text-gray-300">
                    {client.totalPurchases.toFixed(2)} €
                  </TableCell>
                  <TableCell className="text-gray-300">{formatDate(client.lastPurchase)}</TableCell>
                  <TableCell>{getStatusBadge(client.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-300 hover:text-green-400 hover:bg-gray-700"
                        onClick={() => setExpandedRow(expandedRow === client.id ? null : client.id)}
                      >
                        {expandedRow === client.id ? (
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
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-300 hover:text-red-400 hover:bg-gray-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
                {expandedRow === client.id && (
                  <TableRow className="bg-gray-800/30">
                    <TableCell colSpan={7}>
                      <div className="p-4">
                        <h4 className="font-medium text-gray-300 mb-2">Détails du client</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Nom complet</p>
                            <p className="text-gray-300">{client.name}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-gray-300">{client.email}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Téléphone</p>
                            <p className="text-gray-300">{client.phone}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Total des achats</p>
                            <p className="text-gray-300">{client.totalPurchases.toFixed(2)} €</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Dernier achat</p>
                            <p className="text-gray-300">{formatDate(client.lastPurchase)}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Statut</p>
                            <div>{getStatusBadge(client.status)}</div>
                          </div>
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

      {filteredClients.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <Users className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-400">Aucun client trouvé</h3>
          <p className="text-gray-500 mt-1">Essayez de modifier vos critères de recherche</p>
        </motion.div>
      )}
    </motion.div>
  )
}