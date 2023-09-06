import { PortableTextBlock } from "sanity"

export type Casting = {
  _id: string,
  title: string,
  slug: {
    current: string,
    _id: string
  },
  castingdescription: PortableTextBlock[]
};