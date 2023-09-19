import Image from 'next/image';
import {getCasting} from '@/sanity/sanity.utils'

export const dynamic = 'force-dynamic'

export default async function Casting() {
  const casting = await getCasting();


  return (
    <section className='castingPageContent'> 


      {casting.map((castingPage)=> {
        return castingPage.casting.map((castImg: { url: string;_key: string; attribution: string; caption: string;})=>{
          return (
            <figure key={castImg._key} >
                <Image src={castImg.url} width={700} height={700} className="homeImg" alt={`${castImg.attribution}`} />
                <span>{castImg.caption}</span>
            </figure>
          
          )
          
        })
    })}

    
    
    </section>
  )
}
