


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
          {children}
        </body>
    </html>
  )
}
