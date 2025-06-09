'use client'

import { motion } from 'framer-motion'
import { Settings, User, Lock, Bell, Database, CreditCard, Globe, LogOut, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function ParametresPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [autoSave, setAutoSave] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3">
        <Settings className="w-8 h-8 text-green-400" />
        <h1 className="text-2xl font-bold text-white">Paramètres</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Compte */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-green-400" />
              <CardTitle className="text-white">Compte</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Gérer les informations de votre compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-300">Nom</Label>
              <Input 
                className="bg-gray-800 border-gray-700 text-white" 
                defaultValue="Admin OpenPharma" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Email</Label>
              <Input 
                className="bg-gray-800 border-gray-700 text-white" 
                defaultValue="admin@openpharma.com" 
              />
            </div>
            <Button className="bg-green-600 hover:bg-green-500">
              Mettre à jour
            </Button>
          </CardContent>
        </Card>

        {/* Sécurité */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-green-400" />
              <CardTitle className="text-white">Sécurité</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Paramètres de sécurité et mot de passe
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-700">
              Changer le mot de passe
            </Button>
            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-700">
              Activer l'authentification à deux facteurs
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-green-400" />
              <CardTitle className="text-white">Notifications</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Contrôlez les notifications que vous recevez
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Notifications par email</Label>
              <Switch 
                checked={notifications} 
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-green-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Alertes de stock</Label>
              <Switch 
                checked={true} 
                className="data-[state=checked]:bg-green-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Préférences */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-green-400" />
              <CardTitle className="text-white">Préférences</CardTitle>
            </div>
            <CardDescription className="text-gray-400">
              Personnalisez votre expérience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Mode sombre</Label>
              <Switch 
                checked={darkMode} 
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-green-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-gray-300">Sauvegarde automatique</Label>
              <Switch 
                checked={autoSave} 
                onCheckedChange={setAutoSave}
                className="data-[state=checked]:bg-green-500"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section dangereuse */}
      <Card className="bg-gray-800/50 border-red-900/50">
        <CardHeader>
          <CardTitle className="text-red-400">Zone dangereuse</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white">Supprimer le compte</h4>
                <p className="text-gray-400 text-sm">
                  Cette action est irréversible. Toutes vos données seront perdues.
                </p>
              </div>
              <Button variant="destructive" className="bg-red-600 hover:bg-red-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Supprimer le compte
              </Button>
            </div>
            <Separator className="bg-gray-700" />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white">Déconnexion</h4>
                <p className="text-gray-400 text-sm">
                  Vous devrez vous reconnecter pour accéder à nouveau à l'application.
                </p>
              </div>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700">
                <LogOut className="w-4 h-4 mr-2" />
                Se déconnecter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}