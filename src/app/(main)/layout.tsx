import { Sidebar } from '@/components/Sidebar'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MotionDiv } from '@/components/motion-div'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-800 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 overflow-y-auto p-6 bg-gray-800/70 backdrop-blur-sm"
        >
          {children}
          <Footer />
        </MotionDiv>
      </div>
    </div>
  )
}