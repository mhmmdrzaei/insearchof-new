import { PortableTextBlock } from "sanity"
export type Social = {
  social_name: string;
  _key: string;
  social_link: string;
  soc: string | import("url").UrlObject;
};

export type Settings = {
  password: string;
  _id: string;
  _createdAt: Date;
  title: string;
  mission: PortableTextBlock[];
  description: PortableTextBlock[];
  social: Social[];  // This line is adjusted to be an array of the Social type
  seoTitle: string;
  seoDescription: string;
  seoImageUrl: string;
  twitterSeoImageUrl: string;
  cache: string;
};

