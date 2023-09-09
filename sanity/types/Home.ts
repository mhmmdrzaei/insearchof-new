import { PortableTextBlock } from "sanity"

export type Home = {
  _id: string,
  title: string,
  images_url: {
    map(arg0: (homeImage: { url: string; _key: string; }) => string): any;
    url: string, 
    _key: string,

  },
};