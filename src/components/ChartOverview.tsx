'use client'

import { Line } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js'
import { MotionDiv } from './motion-div'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export function ChartOverview() {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1} Juin`),
    datasets: [
      {
        label: 'Ventes',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5000) + 1000),
        borderColor: 'hsl(142.1, 76.2%, 36.3%)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3,
        fill: true,
        pointRadius: 0,
        borderWidth: 2
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        callbacks: {
          label: (context: any) => {
            return ` ${context.parsed.y.toLocaleString()} FCFA`
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => `${value.toLocaleString()} FCFA`
        }
      }
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[300px] w-full"
    >
      <Line data={data} options={options} />
    </MotionDiv>
  )
}