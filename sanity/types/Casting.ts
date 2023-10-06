import { PortableTextBlock } from "sanity"

export type Casting = {
  _id: string,
  title: string,
  slug: string,
  castingdescription: PortableTextBlock[],
  casting: {
    map(arg0: (castItem: { _type: string; url: string; _key: string; attribution: string; caption: string; width: string;}) => import("react").JSX.Element | null): import("react").ReactNode;
    url: string,
    alt: string,
    width: string
  },
  castingVideo_url: string,
  casting_embed_video: string
};