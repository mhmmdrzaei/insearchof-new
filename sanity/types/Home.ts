import { PortableTextBlock } from "sanity"

export type Home = {
  _id: string,
  title: string,
  home_images: {
    url: string, 
    _key: string,

  },
};