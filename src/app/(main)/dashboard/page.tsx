'use client'

import { CardStats } from '@/components/CardStats'
import { MotionDiv } from '@/components/motion-div'
import { 
  Package, 
  ShoppingCart, 
  Users,
  DollarSign,
  Activity,
  Calendar,
  Clock,
  Pill
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ChartOverview } from '@/components/ChartOverview'
import { RecentSales } from '@/components/RecentSales'

type StatItem = {
  title: string
  value: string
  change: string
  icon: React.ComponentType<{ className?: string }>
  trend: 'up' | 'down'
}

type InventoryStatus = {
  name: string
  value: number
  color: string
}

export default function DashboardPage() {
  const stats: StatItem[] = [
    {
      title: "Revenu Total",
      value: "33,231 FCFA",
      change: "+20.1%",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Ventes",
      value: "1,234",
      change: "+12.5%",
      icon: ShoppingCart,
      trend: "up",
    },
    {
      title: "Médicaments",
      value: "2,345",
      change: "+3.2%",
      icon: Package,
      trend: "up",
    },
    {
      title: "Clients",
      value: "1,234",
      change: "-2.1%",
      icon: Users,
      trend: "down",
    },
  ]

  const inventoryStatus: InventoryStatus[] = [
    { name: "En stock", value: 78, color: "bg-green-500" },
    { name: "Faible stock", value: 15, color: "bg-yellow-500" },
    { name: "Rupture", value: 7, color: "bg-red-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Section Titre avec animation */}
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tableau de Bord</h1>
          <p className="text-muted-foreground">
            Aperçu des performances de votre pharmacie
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">
            {new Date().toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </MotionDiv>

      {/* Grille de Statistiques */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <MotionDiv
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardStats {...stat} />
          </MotionDiv>
        ))}
      </div>

      {/* Section Principale */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Graphique des Ventes */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-4"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Activity className="h-5 w-5 text-green-600 mr-2" />
                  <span>Performance des Ventes</span>
                </div>
                <span className="text-sm font-normal text-muted-foreground">
                  Derniers 30 jours
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartOverview />
            </CardContent>
          </Card>
        </MotionDiv>

        {/* Ventes Récentes et Statut */}
        <div className="md:col-span-3 space-y-4">
          {/* Ventes Récentes */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span>Ventes Récentes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Statut des Stocks */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="h-5 w-5 text-green-600 mr-2" />
                  <span>Statut des Stocks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryStatus.map((status, index) => (
                    <MotionDiv
                      key={status.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{status.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {status.value}%
                        </span>
                      </div>
                      <Progress 
                        value={status.value} 
                        className={`h-2 ${status.color}`}
                      />
                    </MotionDiv>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>

      {/* Section Secondaire */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Alertes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Alertes Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Paracétamol - Stock critique (5 unités)",
                "Ibuprofène - Péremption proche (15/06/2024)",
                "Amoxicilline - Rupture de stock",
              ].map((alert, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                  className="flex items-start pb-4 last:pb-0 border-b last:border-b-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-500 mr-2" />
                  <p className="text-sm">{alert}</p>
                </MotionDiv>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Médicaments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Top Médicaments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Paracétamol 500mg", sales: 124 },
                { name: "Ibuprofène 200mg", sales: 98 },
                { name: "Amoxicilline 500mg", sales: 76 },
              ].map((item, index) => (
                <MotionDiv
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium">{item.sales} ventes</span>
                </MotionDiv>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Rappels */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Rappels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Commande fournisseur à valider",
                "Inventaire mensuel demain",
                "Formation équipe vendredi",
              ].map((reminder, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
                  className="flex items-start pb-4 last:pb-0 border-b last:border-b-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-blue-500 mr-2" />
                  <p className="text-sm">{reminder}</p>
                </MotionDiv>
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionDiv>
    </div>
  )
}