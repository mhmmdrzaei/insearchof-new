import Image from 'next/image';
import {getsettings} from '@/sanity/sanity.utils'
import {getComCastings} from '@/sanity/sanity.utils'
import Link from 'next/link';

export default async function Home() {
  const settings = await getsettings();
  const castings = await getComCastings();

  return (
    <div> 
            {settings.map((setting) => ( 
              <h1>{setting.title}</h1>

            ))}
             {castings.map((project) => ( 
              <Link href={`/commercial/${project.slug}`} key={project._id}>
              <h1>{project.title}</h1>
              </Link>
              

            ))}

    
    
    </div>
  )
}
