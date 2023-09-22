import {getsettings} from '@/sanity/sanity.utils'
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import { UrlObject } from 'url';
import Press from '../press/press.component';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
export const dynamic = 'force-dynamic'
import { PortableTextBlock } from "sanity"

type SocialType = {
    social_name: string;
    _key: string;
    social_link: string;
};

type SettingType = {
    title: string;
    description: PortableTextBlock[]; 
    mission: PortableTextBlock[];  
    social: SocialType[];
};

type HeaderProps = {
    set: SettingType[];
};


export default function Header({ set }: HeaderProps) {

    return (
        <>
             {set.map((setting) => ( 
                <React.Fragment key={uuidv4()}>
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
                            {setting.social.map((social) => (
                                <Link href={social.social_link} key={social._key}>{social.social_name}</Link>
                            ))}
                        </section>
                    </section>
                    <section className='mission'>
                        <PortableText value={setting.mission} />
                    </section>
                    <section className='press'>
                        <Press />
                    </section>
                </React.Fragment>
          ))}
        </>
    );
}



