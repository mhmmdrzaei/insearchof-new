import Image from 'next/image';
import {getCasting, getsettings} from '@/sanity/sanity.utils'
import Header from '@/app/(site)/components/header/header.component'
import {IMAGE_SIZE_CASTING } from "@/app/(site)/components/stylingComponent/stylingComponent.component"

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
    <section className="pageMain">
    {casting.map((castingPage) => {
        
            return castingPage.casting.map((castItem: {
                width: number; _type: string, url: string, _key: string, attribution: string, caption: string 
}) => {
    

                if (castItem._type === 'casting_video') {
                    return (
                        <div key={castItem._key} className={`videoCasting ${getSizeClassName(castItem.width)}`}>
                            <video controls>
                                <source src={castItem.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {castItem?.caption ? <span>{castItem.caption}</span> : null}
                        </div>
                    )
                } else if (castItem._type === 'casting_image') {
                    return (
                        <figure key={castItem._key} className={` ${getSizeClassName(castItem.width)}`}>
                            <Image src={castItem.url} width={700} height={700} className="homeImg" alt={`${castItem.attribution} 
                            `} loading="lazy" />
                            {castItem?.caption ? <span>{castItem.caption}</span> : null}
                            
                        </figure>
                    )
                } else {
                    return null; 
                }

            })
        })}


    </section>
    </>

)


      }