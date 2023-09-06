
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'In Search Of',
  description: 'Casting and management agency based in New York, London and Toronto',
}

export default  function  RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
        <body className={inter.className}>
        <header>In Search of</header>
        <main>{children}</main>
        </body>
      
    </html>
  )
}



