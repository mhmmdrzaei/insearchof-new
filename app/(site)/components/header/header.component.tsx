import {getsettings} from '@/sanity/sanity.utils'
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import { UrlObject } from 'url';
import Press from '../press/press.component';
import { v4 as uuidv4 } from 'uuid';
export const dynamic = 'auto'

export default async function Header() {

    const settings = await getsettings()

    return (
        <>
             {settings.map((setting) => ( 
                <header key={uuidv4()} >
                    <section className='headingInfo'>

                    <Link href={"/"} key={uuidv4()} >
                        <h1>{setting.title}</h1>
                    </Link>
                    <section className='headingDesc'>
                    <PortableText value={setting.description} />
                        
                    </section>
                    <section className="headingMenu">
                        <Link href={"/casting"} key={uuidv4()} >
                            Casting
                        </Link>
                        <button className='pressButton' key={uuidv4()} >Press</button>
                        <button className='missionButton' key={uuidv4()} >Mission</button>
                        {
                            setting.social.map((social: {
                                social_name: string; _key: string;
                                social_link: string; soc: string | UrlObject; }) => (
                                <Link href={social.social_link} key={social._key}>{social.social_name}</Link>
                                

                            ))
                        }

                    </section>

                    </section>
                    <section className='mission' >
                    <PortableText value={setting.mission} key={uuidv4()}  />
                    </section>
                    <section>
                        <Press key={uuidv4()}  />
                    </section>
                </header>
            

          ))}
        </>

       
    )

    
}


