import { PortableTextBlock } from "sanity"

export type Settings = {
  _id: string,
  _createdAt: Date,
  title: string,
  mission: PortableTextBlock[],
  description: PortableTextBlock[],
  social: {
    map(arg0: (social: { social_name: string; _key: string; social_link: string; soc: string | import("url").UrlObject; }) => import("react").JSX.Element): import("react").ReactNode;
    social_name: string,
    social_link: string,
    _key: string
  },
  seoTitle: string,
  seoDescription: string,
  seoImageUrl: string,
  twitterSeoImageUrl: string,



};
