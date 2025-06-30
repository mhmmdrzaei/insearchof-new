
// import type { Metadata } from 'next'

import './index.scss'
import { getsettings } from '@/sanity/sanity.utils'
export const dynamic = 'force-dynamic'
import { Analytics } from "@vercel/analytics/next"

const settings = getsettings();


export default  function  RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
        <body >
        <main>{children}
           <Analytics />
        </main>
        
        </body>
      
    </html>
  )


}



