import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import {getCasting, getsettings} from '@/sanity/sanity.utils'
import Header from '@/app/(site)/components/header/header.component'
import {IMAGE_SIZE_CASTING } from "@/app/(site)/components/stylingComponent/stylingComponent.component"
import { PortableText } from '@portabletext/react';


function getSizeClassName(size?: number): string {
    if (typeof size === 'undefined' || !IMAGE_SIZE_CASTING[size]) {
        return "twentyfiveWidth";
    }
    return IMAGE_SIZE_CASTING[size];
}


export default async function Casting() {
  const casting = await getCasting();
  const settings = await getsettings()



return (
    <>
    <section className="pageSide">
        <Header set={settings} />
 

    </section>
  
    {casting.map((castingPage) => {
        
            return (
                <>
                <section className="castingText">
                <PortableText value={castingPage.casting_contact}/>
                </section>
                <section className="pageMain castingPage" key={uuidv4()}>
                {castingPage.casting.map((castItem: {
                    width: number; _type: string, url: string, _key: string, attribution: string, caption: string }) => {
        
    
                    if (castItem._type === 'casting_video') {
                        return (
                            <div key={uuidv4()} className={`videoCasting ${getSizeClassName(castItem.width)}`}>
                                <video controls>
                                    <source src={castItem.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                {castItem?.caption ? <span>{castItem.caption}</span> : null}
                            </div>
                        )
                    } else if (castItem._type === 'casting_image') {
                        return (
                            <figure key={uuidv4()} className={`castingImg ${getSizeClassName(castItem.width)}`}>
                                <Image src={castItem.url} width={700} height={700} className="homeImg" alt={`${castItem.attribution} 
                                `} loading="lazy" />
                                {castItem?.caption ? <span>{castItem.caption}</span> : null}
                                
                            </figure>
                        )
                    } else {
                        return null; 
                    }
    
                })}
                </section>
            </>
            )
           
            
            
        
        })}


    
    </>

)


      }