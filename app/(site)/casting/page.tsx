import { v4 as uuidv4 } from 'uuid';
import {getCasting, getsettings} from '@/sanity/sanity.utils'
import Header from '@/app/(site)/components/header/header.component'
import { PortableText } from '@portabletext/react';
import MasonryComponent from '../components/masonryIayout/masonrylayout.client';

export default async function Casting() {
  const casting = await getCasting();
  const settings = await getsettings()
  
return (
    <>
    <section className="pageSide">
        <Header set={settings} />
 

    </section>
  
    {casting.map((castingPage) => {
        // console.log('castingPage.casting structure:', castingPage.casting);
         const castingArray = castingPage.casting;
        
            return (
                <>
                <section className="castingText">
                <PortableText value={castingPage.casting_contact}/>
                </section>
                <section className="pageMain castingPage" key={uuidv4()}>
                <div className="grid">
                <MasonryComponent castingItems={castingArray} />
                </div>
                <div className="grid-item  item--is-invisible grid-size"></div>
                <div className="grid-item item--is-invisible grid--gutter"></div>

                </section>
   
            </>
            )
           
            
            
        
        })}


    
    </>

)


      }