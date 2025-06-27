import { PortableTextBlock } from 'sanity'
import {PageSeo } from './Seo'

export interface HomeImage {
  _key: string
  _type: 'image'
  asset: {
    _ref: string
    url?: string
  }
  // optional crop/hotspot if you use them
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface Home {
  _id: string
  _createdAt: string       // Sanity returns ISO timestamps by default
  title: string            // your “Tab Title” (readOnly in studio)
  home_images: HomeImage[] // matches the `home_images` array of image items
  page_seo: PageSeo        // your nested SEO object
}
