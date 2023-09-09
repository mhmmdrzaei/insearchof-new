import { PortableTextBlock } from "sanity"

export type Home = {
  _id: string,
  title: string,
  images_url: {
    url: string, 
    _key: string,

  },
};