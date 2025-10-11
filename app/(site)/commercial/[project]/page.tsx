import { getComCasting, getComCastingsAll, getsettings } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import {IMAGE_SIZE_COM} from "@/app/(site)/components/stylingComponent/stylingComponent.component"
import { Metadata } from "next";


export async function generateMetadata({params}:Props): Promise<Metadata> {
    const slug = params.project;
  const settingsArr = await getsettings();
  const project = await getComCasting(slug)
  const settings = settingsArr[0];
  if (!settings) throw new Error("No site settings found");

  // Use site-level SEO only, since this listing has no own page_seo
  const siteSeo = settings.page_seo;
  const baseTitle = project.title;
  const title = baseTitle.includes(settings.title)
    ? baseTitle
    : `${baseTitle} | ${settings.title}`;

  const description = siteSeo?.description ?? "";
  const seoImageUrl = siteSeo?.seo_image?.asset?.url ?? "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: settings.title,
      locale: "en_CA",
      type: "website",
      images: [{ url: seoImageUrl, width: 1200, height: 628 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [seoImageUrl],
    },
  };
}


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
        <section className="pageSideCom">
        <section className='comcastHeadingInfo' key={uuidv4()}>
        {settings.map((setting) => ( 
                

                    <Link href={"/"} key={uuidv4()} >
                        <h1>{setting.title}</h1>
                    </Link>

                      
          ))}
            <Link className="comCastBack" href={"/commercial"} key={uuidv4()} >
            ← Commercial Casting Projects
            </Link>

            <div className="allProjectsList">
                <h2>Commercial Casting Projects</h2>
                {allProjects.map((proj) => (
                <Link className={(slug && proj.slug && slug === proj.slug) ? 'activeLink' : ''} href={`/commercial/${proj.slug}`} key={uuidv4()}>
                {proj.title}
                </Link>
                ))}
                </div>
           </section>  


        </section>
        <section className="pageMain comCastingProj">
            <div className="projDescription">
            <h3>{project.title}</h3>
            <div><PortableText value={project.castingdescription} /></div>

            </div>

           
            <section className="comCastingContent">
            {project?.casting_embed_video ? 
            <div className="embeddedContainer">
            <div className="embedVideoContent" dangerouslySetInnerHTML={{ __html: project.casting_embed_video }} />
            </div>
            : null}
            {project?.castingVideo_url ?
            <div className="htmlVideoContainer">
                <video controls playsInline controlsList="nodownload">
                <source src={project.castingVideo_url} type="video/mp4" />
                Your browser does not support the video tag.
                </video>

            </div> : null}
            {project?.casting ?
            project.casting.map((castItem: {
                width: string; _type: string, url: string, _key: string, attribution: string, caption: string }) => {
                return <figure key={uuidv4()} className={getSizeClassName(castItem.width)}>
                    <Image src={castItem.url} width={800} height={700} className="homeImg" alt={`${castItem.attribution} 
                `} loading="lazy" unoptimized />
                </figure>;

            }) : null}

            </section>
            
        </section>
        </>
    );
} 