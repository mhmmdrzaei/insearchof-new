// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Settings } from "./types/Settings";



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