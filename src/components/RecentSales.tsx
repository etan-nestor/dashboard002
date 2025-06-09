import { MotionDiv } from './motion-div'

type Sale = {
  id: string
  customer: string
  email: string
  amount: string
  avatar?: string
  time: string
}

const salesData: Sale[] = [
  {
    id: '1',
    customer: 'Dr. Sophie Martin',
    email: 'sophie.martin@example.com',
    amount: '12,500 FCFA',
    time: '10 min ago',
    avatar: '/images/OpenNumeric.png'
  },
  {
    id: '2',
    customer: 'Clinique St. Louis',
    email: 'contact@stlouis.com',
    amount: '8,750 FCFA',
    time: '25 min ago',
    avatar: '/images/OpenNumeric.png'
  },
  {
    id: '3',
    customer: 'M. Jean Dupont',
    email: 'jean.dupont@example.com',
    amount: '5,300 FCFA',
    time: '1h ago',
    avatar: '/images/OpenNumeric.png'
  },
  {
    id: '4',
    customer: 'Pharmacie Centrale',
    email: 'commande@pcentrale.com',
    amount: '32,800 FCFA',
    time: '2h ago',
    avatar: '/images/OpenNumeric.png'
  },
  {
    id: '5',
    customer: 'Dr. Alioune Ndiaye',
    email: 'a.ndiaye@example.com',
    amount: '7,600 FCFA',
    time: '3h ago',
    avatar: '/images/OpenNumeric.png'
  }
]

export function RecentSales() {
  return (
    <div className="space-y-4">
      {salesData.map((sale, index) => (
        <MotionDiv
          key={sale.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
        >
          {/* Avatar remplacé par une solution simple */}
          <div className="flex-shrink-0">
            {sale.avatar ? (
              <img 
                src={sale.avatar} 
                alt={sale.customer}
                className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-medium shadow-sm">
                {sale.customer.charAt(0)}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{sale.customer}</p>
            <p className="text-xs text-muted-foreground truncate">{sale.email}</p>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium whitespace-nowrap">{sale.amount}</p>
            <p className="text-xs text-muted-foreground">{sale.time}</p>
          </div>
        </MotionDiv>
      ))}
    </div>
  )
}