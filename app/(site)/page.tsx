import Image from 'next/image';
import {getHome, getsettings} from '@/sanity/sanity.utils'
import { UrlObject } from 'url';
import { v4 as uuidv4 } from 'uuid';
import Header from '@/app/(site)/components/header/header.component'
export default async function Home() {
  const home = await getHome();
  const settings = await getsettings()


  return (
    <section className='homepageContainer'>
    <section className="pageSide homepageSide">
        <Header set={settings} />

    </section>
    <section className='pageMain homepage'> 


      {home.map((homePage)=> {
        return homePage.images_url.map((homeImage: { homeImgUrl: string; })=>{
          return <Image src={homeImage.homeImgUrl} width={400} height={400} key={uuidv4()} className="homeImg" loading="eager"  alt={'image taken by In Search Of Agency with models on a white backdrop'} />
          
        })
    })}


    
    
    </section>
    </section>
    
  )
}
