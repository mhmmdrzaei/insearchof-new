import { PortableTextBlock } from "sanity"

export type CastingPub = {
  casting: any;
  _id: string,
  title: string,
  casting_posts: {
    url: string, 
    _key: string,
    attribution: string,
    caption: string,
    width: number

  },
  casting_contact: PortableTextBlock[]
};