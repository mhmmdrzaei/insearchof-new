import { PortableTextBlock } from "sanity"

export type Settings = {
  _id: string,
  _createdAt: Date,
  title: string,
  mission: PortableTextBlock[],
  description: PortableTextBlock[],
  social: {
    social_name: string,
    social_link: string,
    _key: string
  },
  seoTitle: string,
  seoDescription: string,
  seoImageUrl: string,
  twitterSeoImageUrl: string,



};
