
import React, { useState } from 'react';
import Link from 'next/link';
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from 'sanity';
type SocialType = {
    social_name: string;
    _key: string;
    social_link: string;
};

type MenuProps = {
    social: SocialType[];
    mission: PortableTextBlock[];
    pressContent: React.ReactNode;
    title: string;
    description: PortableTextBlock[] // For the rendered Press component
};

export default function Menu({ social, mission, pressContent, title, description }: MenuProps) {
    const [activeMission, setActiveMission] = useState(false);
    const [activePress, setActivePress] = useState(false);
    const handlePressClick = () => {
        if (activeMission) {
            setActiveMission(false);
        }
        setActivePress(prevState => !prevState);
    };

    const handleMissionClick = () => {
        if (activePress) {
            setActivePress(false);
        }
        setActiveMission(prevState => !prevState);
    };

    return (
        <>
        <section className="headingInfo">
        <section className='headingDetails'>
                        <Link href={"/"}>
                            <h1>{title}</h1>
                        </Link>
                        <section className='headingDesc'>
                            <PortableText value={description} />
                        </section>
        </section>
        <section className='headingMenu'>
        <Link href={"/casting"}>
                Casting
            </Link>
            <button className='pressButton'
               onClick={handlePressClick}
            >
                Press
            </button>
            <button className='missionButton'
                onClick={handleMissionClick}
            >
                Mission
            </button>
            {social.map((s) => (
                <Link href={s.social_link} key={s._key} target='_blank'>{s.social_name}</Link>
            ))}

        </section>

        </section>
        
            <section 
                className={`mission ${activeMission ? 'activemission' : ''}`}
            >
                <section className="missionInner">
                <h1>Mission</h1>
                <button  onClick={handleMissionClick}>← CLOSE</button>
                <PortableText value={mission} />

                </section>

            </section>
            <section 
                className={`press ${activePress ? 'activepress' : ''}`}
            >
                <section className="pressInner">
                <button onClick={handlePressClick} >← CLOSE</button>
                {pressContent}

                </section>

            </section>
         </>
        
    );
}
