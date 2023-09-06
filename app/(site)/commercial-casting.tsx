import Image from 'next/image';
import {getsettings} from '@/sanity/sanity.utils'

export default async function Home() {
  const settings = await getsettings();

  return (
    <div> 
            {settings.map((setting) => ( 
              <h1>{setting.title}</h1>

            ))}
    
    
    </div>
  )
}
