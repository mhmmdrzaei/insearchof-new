import { getComCasting, getComCastingsAll, getsettings } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
export const dynamic = 'force-dynamic'
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import {IMAGE_SIZE_COM} from "@/app/(site)/components/stylingComponent/stylingComponent.component"


type Props = {
    params: {project: string}
}

function getSizeClassName(size?: string): string {
    if (typeof size === 'undefined' || !IMAGE_SIZE_COM[size]) {
        return "hundredWidth";
    }
    return IMAGE_SIZE_COM[size];
}

export default async function Casting({params}:Props) {
    const slug = params.project;

    const project = await getComCasting(slug)
    const allProjects = await getComCastingsAll();
    const settings = await getsettings()
    if (!project) {
        return <div>Nothing Found...</div>;
    }
    
    return (
        <>
        <section className="pageSide">
        {settings.map((setting) => ( 
                <section className='headingInfo'>

                    <Link href={"/"} key={uuidv4()} >
                        <h1>{setting.title}</h1>
                    </Link>

                </section>         
          ))}
                <div className="allProjectsList">
                <h2>Commercial Casting Projects</h2>
                {allProjects.map((proj) => (
                <Link href={`/commercial/${proj.slug}`} key={proj._id}>
                <h1>{proj.title}</h1>
                </Link>
                ))}
                </div>

        </section>
        <section className="pageMain">

            <h3>{project.title}</h3>
            <div><PortableText value={project.castingdescription} /></div>
            {project?.casting_embed_video ? 
            <div className="embedVideoCotnet" dangerouslySetInnerHTML={{ __html: project.casting_embed_video }} />
            : null}
            {project?.castingVideo_url ?
            <div className="htmlVideoContainer">
                <video controls>
                <source src={project.castingVideo_url} type="video/mp4" />
                Your browser does not support the video tag.
                </video>

            </div> : null}
            {project?.casting ?
            project.casting.map((castItem: {
                width: string; _type: string, url: string, _key: string, attribution: string, caption: string }) => {
                return <figure key={castItem._key} className={getSizeClassName(castItem.width)}>
                    <Image src={castItem.url} width={900} height={900} className="homeImg" alt={`${castItem.attribution} 
                `} loading="lazy" />
                </figure>;

            }) : null}
        </section>
        </>
    );
} 