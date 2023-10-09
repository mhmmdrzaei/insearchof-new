import {getComCastingsAll, getsettings} from '@/sanity/sanity.utils'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';


import dynamic from 'next/dynamic';

const PasswordProtected = dynamic(
  () => import('../components/passwordProtected/passwrodProtectd.client'),
  { ssr: false }
);


export default async function ComCasting() {
  const castings = await getComCastingsAll();
  const settings = await getsettings()
  const password = settings[0].password;


  return (
      <>
        <section className="ComCastingHead">
        {settings.map((setting) => ( 
                

                <Link href={"/"} key={uuidv4()} >
                    <h1>{setting.title}</h1>
                </Link>

                    
          ))}
           </section>  

          <section className="pageMain comCastingPage">
          <PasswordProtected pw={password}>
          <h2>Commercial Casting Projects</h2>
          {castings.map((project) => ( 
          <span key={uuidv4()}>
            <Link href={`/commercial/${project.slug}`} >
            {project.title}
            </Link> /</span>
            

          ))}
           </PasswordProtected>
          </section>
        

      </>
    
  )
}