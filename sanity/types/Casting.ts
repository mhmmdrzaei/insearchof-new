import { PortableTextBlock } from "sanity"

export type Casting = {
  _id: string,
  title: string,
  slug: {
    current: string,
    _id: string
  },
  castingdescription: PortableTextBlock[],
  com_casting_img: {
    url: string,
    alt: string,
    width: string
  },
  castingVideo_url: string,
  casting_embed_video: string
};