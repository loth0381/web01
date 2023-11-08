import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travel ',
  description: "travel UI/UX App for Google",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
