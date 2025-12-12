import { CogIcon, HomeIcon, IceCreamIcon, LemonIcon, CaseIcon, TagIcon } from "@sanity/icons";
import type { StructureBuilder } from "sanity/desk";

/**
 * Desk structure used by sanity/deskTool.
 * Keep the return type inferred to avoid TS value/type issues across Sanity versions.
 */
export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("In Search Of")
    .items([
      // Home
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(
  S.document()
    .schemaType("home")
    .documentId("home")
),

      // About
      // S.listItem()
      //   .title("About")
      //   .icon(LemonIcon)
      //   // .child(S.documentTypeList("about")),

      // Press
      S.listItem()
        .title("Press")
        .icon(IceCreamIcon)
        .child(
  S.document()
    .schemaType("press")
    .documentId("press")
),

      // Casting
      S.listItem()
        .title("Casting")
        .icon(CaseIcon)
        .child(
  S.document()
    .schemaType("casting")
    .documentId("casting")
),

      // Commercial Casting
      S.listItem()
        .title("Commercial Casting")
        .icon(CaseIcon)
        .child(S.documentTypeList("commercial-casting")),

      // Settings
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
  S.document()
    .schemaType("siteSettings")
    .documentId("siteSettings")
)

      // // Media Tag (sanity-plugin-media)
      // S.listItem()
      //   .title("Media Tag")
      //   .icon(TagIcon)
      //   .child(S.documentTypeList("media.tag")),
    ]);
