import { getComCasting } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";


type Props = {
    params: {project: string}
}
export default async function Casting({params}:Props) {
    const slug = params.project;

    const project = await getComCasting(slug)
    if (!project) {
        return <div>Loading...</div>;
    }
    
    return (
        <section>
            <h1>{project.title}</h1>
            <div><PortableText value={project.castingdescription} /></div>
        </section>
    );
}