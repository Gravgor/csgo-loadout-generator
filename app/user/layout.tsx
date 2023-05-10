import { SessionProvider } from "next-auth/react"
import { NextAuthProvider } from './providers'




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
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}
