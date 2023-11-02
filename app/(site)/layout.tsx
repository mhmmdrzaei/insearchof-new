
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './index.scss'
import { getsettings } from '@/sanity/sanity.utils'


export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })
const settings = getsettings();


export const metadata = {
  title: 'In Search Of | full service casting & management agency',
  description: 'In Search Of is a full service casting and management agency based in New York, Los Angeles + Toronto. The agency acts as a social archive, sharing stories of the often overlooked, documenting cultural moments, and observing the relationships between an individual and a shared collective experience.',
  openGraph: {
    title: 'In Search Of | full service casting & management agency',
    description: 'In Search Of is a full service casting and management agency based in New York, Los Angeles + Toronto. The agency acts as a social archive, sharing stories of the often overlooked, documenting cultural moments, and observing the relationships between an individual and a shared collective experience.',
    url: 'https://insearchof.agency',
    siteName: 'In Search Of | full service casting & management agency',
    images: [
      {
        url: 'https://cdn.sanity.io/images/5zyxoqnf/production/2a905d4706960f2a5988a7f6e09e1554e34d88cf-1200x627.jpg',
        width: 1200,
        height: 627,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default  function  RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
        <body className={inter.className}>
        <main>{children}</main>
        </body>
      
    </html>
  )
}



