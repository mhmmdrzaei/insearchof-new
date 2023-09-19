
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/(site)/components/header/header.component'

export const dynamic = 'force-dynamic'

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
        <Header/>
        <main>{children}</main>
        </body>
      
    </html>
  )
}



