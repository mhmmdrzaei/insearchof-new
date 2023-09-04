import { PortableTextBlock } from "sanity"

export type Settings = {
  _id: string,
  _createdAt: Date,
  title: string,
  mission: PortableTextBlock[],
  description: PortableTextBlock[]
};