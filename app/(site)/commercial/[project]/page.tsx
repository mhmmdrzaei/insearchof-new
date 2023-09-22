import { getComCasting, getComCastingsAll, getsettings } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
export const dynamic = 'force-dynamic'
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";

type Props = {
    params: {project: string}
}
export default async function Casting({params}:Props) {
    const slug = params.project;

    const project = await getComCasting(slug)
    const allProjects = await getComCastingsAll();
    const settings = await getsettings()
    console.log(project)
    if (!project) {
        return <div>Nothing Found...</div>;
    }
    
    return (
        <>
        <section className="pageSide">
        {settings.map((setting) => ( 
                <header key={uuidv4()} >

                    <Link href={"/"} key={uuidv4()} >
                        <h1>{setting.title}</h1>
                    </Link>

                </header>           
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
            {project?.casting_embed_video ? <div className="embedVideoCotnet">{project.casting_embed_video}</div> : null}
            {project?.castingVideo_url ?
            <video controls>
            <source src={project.castingVideo_url} type="video/mp4" />
            Your browser does not support the video tag.
            </video> : null}
            {project?.casting ?
            project.casting.map((castItem: { _type: string, url: string, _key: string, attribution: string, caption: string }) => {
                return <figure key={castItem._key}>
                    <Image src={castItem.url} width={700} height={700} className="homeImg" alt={`${castItem.attribution} 
                `} loading="lazy" />
                </figure>;

            }) : null}
        </section>
        </>
    );
}