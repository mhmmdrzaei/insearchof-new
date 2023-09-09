import Image from 'next/image';
import {getHome} from '@/sanity/sanity.utils'

export default async function Home() {
  const home = await getHome();


  return (
    <section className='homePageContent'> 


      {home.map((homePage)=> {
        return homePage.images_url.map((homeImage: { url: string;_key: string;})=>{
          return <Image src={homeImage.url} width={700} height={700} key={homeImage._key} className="homeImg" alt={''} />
          
        })
    })}

    
    
    </section>
  )
}
