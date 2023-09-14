// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Settings } from "./types/Settings";
import {Casting} from './types/Casting'
import { Home } from "./types/Home";
import { CastingPub } from "./types/CastingPub";
import { Press } from "./types/Press";



export async function getsettings(): Promise<Settings[]> {
    return createClient(clientConfig).fetch(
      `*[_type == "siteSettings"]{
        _id,
       description,
       mission,
       title,
       "social": social[]{
          social_name,
          social_link,
          _key
       },
      "seoTitle": page_seo.title,
      "seoDescription": page_seo.description,
      "seoImageUrl": page_seo.seo_image.asset->url,
      "twitterSeoImageUrl": page_seo.seo_image_twitter.asset->url
       
       
 }`,       {next: {
  revalidate: 20
}
  
}
    )
  }

  export async function getComCastings(): Promise<Casting[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "commercial-casting"]{
        _id,
        title,
        "slug": slug.current,
        castingdescription,
        com_casting_img[]{
          "url":asset->url,
          alt,
          width
        },
        "castingVideo_url": casting_video.asset->url,
        casting_embed_video
        
        
    }`,
    {next: {
      revalidate: 20
    }
      
    }
    )
  }
  export async function getComCasting( slug: string): Promise<Casting>{
    return createClient(clientConfig).fetch(
      groq`*[_type == "commercial-casting" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        castingdescription,
        com_casting_img[]{
          "url":asset->url,
          alt,
          width
        },
        "castingVideo_url": casting_video.asset->url,
        casting_embed_video
        
        
    }`,
    {slug,   
      next: {
        revalidate: 20
      }
        
      
    }
    )
  }

  // home page 
  export async function getHome(): Promise<Home[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "home"]{
        _id,
        title,
        "images_url":   home_images[]{
          "homeImgUrl":asset->url,
          _key,
          }
    }`,
    {next: {
      revalidate: 20
    }
      
    }
    )
  }


  // casting page 
    export async function getCasting(): Promise<CastingPub[]> {
      return createClient(clientConfig).fetch(
        groq`*[_type == "casting"]{
          _id,
          title,
          casting_contact,
          
    "casting":   casting_posts[]{
            
            "url":asset->url,
            _key,
            attribution,
            caption,
            width,
            }
            
      }`,
      {next: {
        revalidate: 20
      }
        
      }
      )
    }

  // press
  export async function getPress(): Promise<Press[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "press"]{
        _id,
        title,      
  "pressItems":   press_posts[]{
            _key,
            press_hed,
          press_link
          
          }
          
    }`,
    {next: {
      revalidate: 20
    }
      
    }
    )
  }