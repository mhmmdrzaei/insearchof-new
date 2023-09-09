import {getsettings} from '@/sanity/sanity.utils'
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import { UrlObject } from 'url';
import Press from '../press/press.component';
export default async function Header() {

    const settings = await getsettings();

    return (
        <>
             {settings.map((setting) => ( 
                <header>
                    <section className='headingInfo'>

                    <Link href={"/"}>
                        <h1>{setting.title}</h1>
                    </Link>
                    <section className='headingDesc'>
                    <PortableText value={setting.description} />
                        
                    </section>
                    <section className="headingMenu">
                        <Link href={"/casting"}>
                            Casting
                        </Link>
                        <button className='pressButton'>Press</button>
                        <button className='missionButton'>Mission</button>
                        {
                            setting.social.map((social: {
                                social_name: string; _key: string;
                                social_link: string; soc: string | UrlObject; }) => (
                                <Link href={social.social_link} key={social._key}>{social.social_name}</Link>
                                

                            ))
                        }

                    </section>

                    </section>
                    <section className='mission'>
                    <PortableText value={setting.mission} />
                    </section>
                    <section>
                        <Press/>
                    </section>
                </header>
            

          ))}
        </>

       
    )

    
}