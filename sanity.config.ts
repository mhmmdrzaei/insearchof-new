
import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import {schemaTypes} from './sanity/schemas'
import { myStructure } from "./sanity/deskstructure";
import {visionTool} from '@sanity/vision';
import {media, mediaAssetSource} from 'sanity-plugin-media'



const config =  defineConfig({
      projectId: '5zyxoqnf',
      dataset: 'production',
      title: 'In Search Of',
      apiVersion: '2023-08-31',
      basePath:'/admin',
      plugins: [deskTool({structure: myStructure,}), visionTool(),media()],
      schema: {
        types: schemaTypes,
      },
})

export default config;