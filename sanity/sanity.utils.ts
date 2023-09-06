// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Settings } from "./types/Settings";
import {Casting} from './types/Casting'



export async function getsettings(): Promise<Settings[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "siteSettings"]{
             _id,
            description,
            mission,
            title,
      }`
    )
  }

  export async function getComCastings(): Promise<Casting[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type=="commercial-casting"]{
        _id,
        title,
        "slug": slug.current,
        castingdescription,
        
        
    }`
    )
  }
  export async function getComCasting( slug: string): Promise<Casting>{
    return createClient(clientConfig).fetch(
      groq`*[_type == "commercial-casting" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        castingdescription,
        
        
    }`,
    {slug}
    )
  }