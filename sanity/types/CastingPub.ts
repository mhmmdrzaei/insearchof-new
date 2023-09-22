import { PortableTextBlock } from "sanity"

export type CastingPub = {
  casting: {
    map(arg0: (castItem: { _type: string; url: string; _key: string; attribution: string; caption: string; }) => import("react").JSX.Element | null): any;
    url: string, 
    _key: string,
    attribution: string,
    caption: string,
    width: number

  },
  _id: string,
  title: string,
  castImg: { url: string;_key: string; _type: string; attribution: string; caption: string;}
  casting_contact: PortableTextBlock[]
};