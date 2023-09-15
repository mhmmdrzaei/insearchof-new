import Image from 'next/image';
import {getComCastings} from '@/sanity/sanity.utils'
import Link from 'next/link';
export const dynamic = 'auto'
export default async function ComCasting() {
  const castings = await getComCastings();

  return (
    <div> 

             {castings.map((project) => ( 
              <Link href={`/commercial/${project.slug}`} key={project._id}>
              <h1>{project.title}</h1>
              </Link>
              

            ))}

    
    
    </div>
  )
}