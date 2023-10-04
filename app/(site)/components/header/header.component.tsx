
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import Press from '../press/press.component';
import { v4 as uuidv4 } from 'uuid';
import { PortableTextBlock } from "sanity"
import Menu from '../headerInteractive/headerinteractive.client';

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
    const [activeMission, setActiveMission] = useState(false);
    const [activePress, setActivePress] = useState(false);

    return (
        <>
             {set.map((setting) => ( 
                <React.Fragment key={uuidv4()}>

                        <Menu 
                            social={setting.social} 
                            title= {setting.title}
                            description={setting.description}
                            mission={setting.mission}
                            pressContent={<Press />} // Passing the rendered Press component
                        />

                </React.Fragment>
          ))}
        </>
    );
}



