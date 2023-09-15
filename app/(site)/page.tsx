import Image from 'next/image';
import {getHome} from '@/sanity/sanity.utils'
import { UrlObject } from 'url';
import { v4 as uuidv4 } from 'uuid';
export const dynamic = 'auto'
export default async function Home() {
  const home = await getHome();


  return (
    <section className='homePageContent'> 


      {home.map((homePage)=> {
        return homePage.images_url.map((homeImage: { homeImgUrl: string; })=>{
          return <Image src={homeImage.homeImgUrl} width={700} height={700} key={uuidv4()} className="homeImg" alt={''} />
          
        })
    })}


    
    
    </section>
  )
}
