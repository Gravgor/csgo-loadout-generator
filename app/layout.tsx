import Navbar from '@/components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { NextAuthProvider } from '../lib/providers'
import Footer from '@/components/Footer'


const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata = {
  title: 'CSGO Loadout Generator',
  description: 'A loadout generator for Counter-Strike: Global Offensive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
        <Footer />
        </body>
    </html>
  )
}
