// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { SiteSettings } from "./types/Settings";
import { Casting } from "./types/Casting";
import { Home } from "./types/Home";
import { CastingPub } from "./types/CastingPub";
import { Press } from "./types/Press";

export async function getsettings(): Promise<SiteSettings[]> {
  return createClient(clientConfig).fetch(
    `*[_type == "siteSettings"]{
        _id,
       description,
       password,
       mission,
       title,
       "social": social[]{
          social_name,
          social_link,
          _key
       },
       page_seo {
        title,
        description,
        seo_image {
        asset -> {
        url
        }
        },
        seo_image_twitter {
          asset -> {
          url
          }
        },
       }
       
       
 }`,

  );
}

export async function getComCastingsAll(): Promise<Casting[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "commercial-casting"]{
        _id,
        title,
        "slug": slug.current,
        
        
    }`,

  );
}
export async function getComCasting(slug: string): Promise<Casting> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "commercial-casting" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        castingdescription,
        "casting": com_casting_img[]{
          "url":asset->url,
          alt,
          width
        },
        "castingVideo_url": casting_video.asset->url,
        casting_embed_video
        
        
    }`,
    { slug }
  );
}

// home page
export async function getHome(): Promise<Home[]> {
  return createClient(clientConfig).fetch<Home[]>(
    `*[_type == "home"]{
      _id,
      title,
      home_images[]{            // ← matches your schema field
        _key,
        asset->{
          url                     // ← pull in the URL
        }
        // hotspot, crop, etc. if you need them
      },
      page_seo {
        title,
        description,
        seo_image{ asset->{url} },
        seo_image_twitter{ asset->{url} }
      }
    }`
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
            _type,
            attribution,
            caption,
            width,
            },
                 page_seo {
        title,
        description,
        seo_image {
        asset -> {
        url
        }
        },
        seo_image_twitter {
          asset -> {
          url
          }
        },
       }
            
      }`,

  );
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

  );
}
