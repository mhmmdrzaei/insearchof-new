// app/casting/page.tsx
import { Metadata } from 'next'
import { v4 as uuidv4 } from 'uuid'
import { getCasting, getsettings } from '@/sanity/sanity.utils'
import Header from '@/app/(site)/components/header/header.component'
import { PortableText } from '@portabletext/react'
import MasonryComponent from '../components/masonryIayout/masonrylayout.client'

export async function generateMetadata(): Promise<Metadata> {
  // 1) Fetch both settings and casting docs
  const settingsArr = await getsettings()
  const castingArr  = await getCasting()

  const settings    = settingsArr[0]
  const castingPage = castingArr[0]

  if (!settings) throw new Error('No site settings found')
  if (!castingPage) throw new Error('No casting document found')

  // 2) Page‐vs‐site SEO pick
  const pageSeo = castingPage.page_seo
  const siteSeo = settings.page_seo

  const baseTitle = pageSeo?.title ?? siteSeo?.title ?? settings.title
  const title = baseTitle.includes(settings.title)
    ? baseTitle
    : `${baseTitle} | ${settings.title}`

  const description = pageSeo?.description ?? siteSeo?.description ?? ''
  const seoImageUrl =
    pageSeo?.seo_image?.asset?.url ??
    siteSeo?.seo_image?.asset?.url ??
    ''

  // 3) Return Next metadata
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: settings.title,
      locale: 'en_CA',
      type: 'website',
      images: [
        { url: seoImageUrl, width: 1200, height: 628 },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [seoImageUrl],
    },
  }
}

export default async function Casting() {
  // pull arrays and destructure first items
  const settingsArr = await getsettings()
  const castingArr  = await getCasting()
  const settings    = settingsArr[0]
  const castingDocs = castingArr

  if (!settings || castingDocs.length === 0) {
    return <div>Loading…</div>
  }

  return (
    <>
      <aside className="pageSide">
        <Header settings={settings} />
      </aside>

      {castingDocs.map((doc) => (
        <section className="castingWrapper" key={doc._id}>
          <div className="castingText">
            <PortableText value={doc.casting_contact} />
          </div>

          <div className="pageMain castingPage">
            <div className="grid">
              <MasonryComponent castingItems={doc.casting} />
            </div>
            <div className="grid-item item--is-invisible grid-size" />
            <div className="grid-item item--is-invisible grid--gutter" />
          </div>
        </section>
      ))}
    </>
  )
}
