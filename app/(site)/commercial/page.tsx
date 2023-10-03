import {getComCastingsAll, getsettings} from '@/sanity/sanity.utils'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default async function ComCasting() {
  const castings = await getComCastingsAll();
  const settings = await getsettings()

  return (
      <>
        <section className="pageSide">
        <section className='headingInfo'>
        {settings.map((setting) => ( 
                

                <Link href={"/"} key={uuidv4()} >
                    <h1>{setting.title}</h1>
                </Link>

                    
          ))}
           </section>   
        </section>
        <section className="pageMain">
        <h2>Commercial Casting Projects</h2>
        {castings.map((project) => ( 
              <Link href={`/commercial/${project.slug}`} key={uuidv4()}>
              <h1>{project.title}</h1>
              </Link>
              

            ))}

            
        </section>
      </>
    
  )
}