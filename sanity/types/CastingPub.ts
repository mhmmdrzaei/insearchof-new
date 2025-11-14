import { PortableTextBlock } from "sanity"
import { PageSeo } from "./Seo";



export type CastingPub = {
  casting: Array<{
    _type: string;
    url: string;
    asset: any,
    _key: string;
    attribution: string;
    caption: string;
    width: number;
}>
  _id: string,
  title: string,
  castImg: { url: string;_key: string; _type: string; attribution: string; caption: string;}
  casting_contact: PortableTextBlock[],
page_seo: PageSeo       
};