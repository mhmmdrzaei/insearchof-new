import imageUrlBuilder from "@sanity/image-url";
import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: '5zyxoqnf', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2023-08-31',
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) =>
  builder.image(source).auto("format").fit("max").quality(70);