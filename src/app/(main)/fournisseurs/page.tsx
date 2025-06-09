'use client'

import { motion } from 'framer-motion'
import { PlusCircle, Truck, Search, Filter, ChevronDown, Pencil, Trash2, Phone, Mail, Globe, User, ChevronUp } from 'lucide-react'
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

const suppliers = [
  {
    id: '1',
    name: 'PharmaDistrib',
    contact: 'Jean Martin',
    email: 'contact@pharmadistrib.com',
    phone: '+226 70 12 34 56',
    address: '123 Rue des Pharmaciens, Ouagadougou',
    products: 42,
    lastDelivery: '2023-10-15',
    status: 'actif'
  },
  {
    id: '2',
    name: 'MediSupply',
    contact: 'Marie Dupont',
    email: 'marie@medisupply.com',
    phone: '+226 65 55 66 77',
    address: '456 Avenue des Médicaments, Bobo-Dioulasso',
    products: 28,
    lastDelivery: '2023-10-10',
    status: 'actif'
  },
  {
    id: '3',
    name: 'SantéPro',
    contact: 'Pierre Lambert',
    email: 'pierre@santepro.com',
    phone: '+226 70 88 99 00',
    address: '789 Boulevard de la Santé, Koudougou',
    products: 15,
    lastDelivery: '2023-09-28',
    status: 'inactif'
  },
  {
    id: '4',
    name: 'PharmaPlus',
    contact: 'Lucie Bernard',
    email: 'lucie@pharmaplus.com',
    phone: '+226 65 03 37 42',
    address: '321 Rue des Soins, Ouahigouya',
    products: 35,
    lastDelivery: '2023-08-12',
    status: 'suspendu'
  }
]

export default function FournisseursPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.phone.includes(searchTerm)
    const matchesStatus = statusFilter === 'all' || supplier.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'actif':
        return <Badge variant="success">Actif</Badge>
      case 'inactif':
        return <Badge variant="warning">Inactif</Badge>
      case 'suspendu':
        return <Badge variant="destructive">Suspendu</Badge>
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
          <Truck className="w-8 h-8 text-green-400" />
          <h1 className="text-2xl font-bold text-white">Gestion des Fournisseurs</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher un fournisseur..."
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
              <SelectItem value="suspendu">Suspendu</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-green-600 hover:bg-green-500 text-white">
            <PlusCircle className="w-4 h-4 mr-2" />
            Nouveau fournisseur
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-gray-700 bg-gray-800/50 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead className="text-white">Nom</TableHead>
              <TableHead className="text-white">Contact</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Téléphone</TableHead>
              <TableHead className="text-right text-white">Produits</TableHead>
              <TableHead className="text-white">Dernière livraison</TableHead>
              <TableHead className="text-white">Statut</TableHead>
              <TableHead className="text-right text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSuppliers.map((supplier) => (
              <React.Fragment key={supplier.id}>
                <TableRow className="border-gray-700 hover:bg-gray-700/50">
                  <TableCell className="font-medium text-white">
                    {supplier.name}
                  </TableCell>
                  <TableCell className="text-gray-300">{supplier.contact}</TableCell>
                  <TableCell className="text-gray-300">{supplier.email}</TableCell>
                  <TableCell className="text-gray-300">{supplier.phone}</TableCell>
                  <TableCell className="text-right text-gray-300">{supplier.products}</TableCell>
                  <TableCell className="text-gray-300">{formatDate(supplier.lastDelivery)}</TableCell>
                  <TableCell>{getStatusBadge(supplier.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-300 hover:text-green-400 hover:bg-gray-700"
                        onClick={() => setExpandedRow(expandedRow === supplier.id ? null : supplier.id)}
                      >
                        {expandedRow === supplier.id ? (
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
                
                {expandedRow === supplier.id && (
                  <TableRow className="bg-gray-800/30">
                    <TableCell colSpan={8}>
                      <div className="p-4">
                        <h4 className="font-medium text-gray-300 mb-3">Détails du fournisseur</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400 flex items-center">
                              <Globe className="w-4 h-4 mr-2" /> Société
                            </p>
                            <p className="text-gray-300">{supplier.name}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400 flex items-center">
                              <User className="w-4 h-4 mr-2" /> Contact
                            </p>
                            <p className="text-gray-300">{supplier.contact}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400 flex items-center">
                              <Mail className="w-4 h-4 mr-2" /> Email
                            </p>
                            <p className="text-gray-300">{supplier.email}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400 flex items-center">
                              <Phone className="w-4 h-4 mr-2" /> Téléphone
                            </p>
                            <p className="text-gray-300">{supplier.phone}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Adresse</p>
                            <p className="text-gray-300">{supplier.address}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Nombre de produits</p>
                            <p className="text-gray-300">{supplier.products}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Dernière livraison</p>
                            <p className="text-gray-300">{formatDate(supplier.lastDelivery)}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-400">Statut</p>
                            <div>{getStatusBadge(supplier.status)}</div>
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

      {filteredSuppliers.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <Truck className="w-12 h-12 text-gray-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-400">Aucun fournisseur trouvé</h3>
          <p className="text-gray-500 mt-1">Essayez de modifier vos critères de recherche</p>
        </motion.div>
      )}
    </motion.div>
  )
}