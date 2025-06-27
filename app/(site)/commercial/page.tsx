import { getComCastingsAll, getsettings } from "@/sanity/sanity.utils";
import { Metadata } from "next";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import PasswordProtected from "../components/passwordProtected/passwrodProtectd.client";

export async function generateMetadata(): Promise<Metadata> {
  const settingsArr = await getsettings();
  const settings = settingsArr[0];
  if (!settings) throw new Error("No site settings found");

  // Use site-level SEO only, since this listing has no own page_seo
  const siteSeo = settings.page_seo;
  const baseTitle = "Commercial Casting";
  const title = baseTitle.includes(settings.title)
    ? baseTitle
    : `${baseTitle} | ${settings.title}`;

  const description = siteSeo?.description ?? "";
  const seoImageUrl = siteSeo?.seo_image?.asset?.url ?? "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: settings.title,
      locale: "en_CA",
      type: "website",
      images: [{ url: seoImageUrl, width: 1200, height: 628 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [seoImageUrl],
    },
  };
}

export default async function ComCasting() {
  const castings = await getComCastingsAll();
  const settings = await getsettings();
  const password = settings[0].password;

  return (
    <>
      <section className="ComCastingHead">
        {settings.map((setting) => (
          <Link href={"/"} key={uuidv4()}>
            <h1>{setting.title}</h1>
          </Link>
        ))}
      </section>

      <section className="pageMain comCastingPage">
        <h2>Commercial Casting Projects</h2>
        <PasswordProtected pw={password}>
          {castings.map((project) => (
            <>
              <Link key={uuidv4()} href={`/commercial/${project.slug}`}>{project.title}</Link>
              <span>{" "}
              / {" "}</span>

            </>
          ))}
        </PasswordProtected>
      </section>
    </>
  );
}
