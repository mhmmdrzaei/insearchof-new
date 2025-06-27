import { PortableTextBlock } from 'sanity'
import { PageSeo } from './Seo'

// 1. Social link entries in your settings
export interface SocialLink {
  _key: string
  social_name: string
  social_link: string
}


// 3. Your top‐level Site Settings document
export interface SiteSettings {
  _id: string
  _createdAt: string      // Sanity returns ISO strings by default
  title: string
  description: PortableTextBlock[]
  mission: PortableTextBlock[]
  social: SocialLink[]    // matches your “social” array of objects
  password?: string       // your “Commercial Casting Page Password”
  page_seo: PageSeo       // matches the “SEO Tags” nested object
}
