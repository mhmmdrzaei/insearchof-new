
// import type { Metadata } from 'next'

import './index.scss'
import { getsettings } from '@/sanity/sanity.utils'


const settings = getsettings();


export default  function  RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
        <body >
        <main>{children}</main>
        </body>
      
    </html>
  )
}



