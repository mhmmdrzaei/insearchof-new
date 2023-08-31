import Image from 'next/image';
import {getsettings} from '@/sanity/sanity.utils'

export default async function Home() {
  const settings = await getsettings();
  console.log(getsettings)
  return (
    <div > 
    <h1>{settings.title}</h1>
    
    
    </div>
  )
}
