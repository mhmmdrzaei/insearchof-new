// ./deskStructure.js
import React from 'react';
import { CogIcon, IceCreamIcon, LemonIcon, HomeIcon,CaseIcon,TagIcon } from '@sanity/icons';


// Define broad types (these are approximations and might need adjustments)
interface ListItem {
  title(title: string): ListItem;
  icon(icon: any): ListItem;
  child(child: any): ListItem;
}

interface List {
  title(title: string): List;
  items(items: any[]): List;
}

interface Document {
  schemaType(type: string): Document;
  documentId(id: string): Document;
}

interface Structure {
  [x: string]: any;
  list(): List;
  listItem(): ListItem;
  document(): Document;
  documentTypeListItems(): { getId(): string }[];
}

export const myStructure = (S: Structure) => {
  return S.list()
    .title('In Search Of')
    .items([
      ...S.documentTypeListItems().reverse().filter(listItem => !['siteSettings', 'press', 'casting', 'home','commercial-casting','media.tag'].includes(listItem.getId())),
      // settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // home
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      // Custom Press list item
      S.listItem()
        .title('Press')
        .icon(IceCreamIcon)
        .child(
          S.document()
            .schemaType('press')
            .documentId('press')
        ),
      // Casting
      S.listItem()
        .title('Casting')
        .icon(LemonIcon)
        .child(
          S.document()
            .schemaType('casting')
            .documentId('casting')
        ),
       // Commercial Casting
      S.listItem()
        .title('Commercial Casting')
        .icon(CaseIcon) // Or whatever icon you prefer
        .child(S.documentTypeList('commercial-casting')),
            //media tag 
    S.listItem()
    .title('Media Tag')
    .icon(TagIcon)
    .child(S.documentTypeList('media.tag'))
    ]);

};
