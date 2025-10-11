// app/page.tsx (or wherever your Home page lives)
import { Metadata } from 'next'
import Image from 'next/image'
import { getHome, getsettings } from '@/sanity/sanity.utils'
import Header from '@/app/(site)/components/header/header.component'

export async function generateMetadata(): Promise<Metadata> {
  // Step 1: get arrays
  const settingsArr = await getsettings()
  const homeArr     = await getHome()

  // Step 2: pull out the first element
  const settings = settingsArr[0]
  const homePage = homeArr[0]

  // Fallback guards
  if (!settings) {
    throw new Error('No site settings found')
  }
  if (!homePage) {
    throw new Error('No home document found')
  }

  // Now you can safely access settings.page_seo and homePage.page_seo
  const pageSeo = homePage.page_seo
  const siteSeo = settings.page_seo

  // Build title: prefer pageSeo.title, then siteSeo.title, then site title
  const baseTitle = pageSeo?.title ?? "Home"
  const title = baseTitle.includes(settings.title)
    ? baseTitle
    : `${baseTitle} | ${settings.title}`

  // Description & image fallbacks
  const description = pageSeo?.description ?? siteSeo?.description ?? ''
  const seoImageUrl =
    pageSeo?.seo_image?.asset?.url ??
    siteSeo?.seo_image?.asset?.url ??
    ''

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
        {
          url: seoImageUrl,
          width: 1200,
          height: 628,
        },
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

export default async function Home() {
  // Again, pull arrays and destructure
  const settingsArr = await getsettings()
  const homeArr     = await getHome()
  const settings    = settingsArr[0]
  const homePage    = homeArr[0]

  if (!settings || !homePage) {
    return <div>Loading…</div>
  }

  return (
    <section className='homepageContainer'>
      <aside className="pageSide homepageSide">
        <Header settings={settings} />
      </aside>
      <section className='pageMain homepage'>
        {homePage.home_images?.map((img) => (
          <Image
            key={img._key}
            src={img.asset.url!}
            width={600}
            height={600}
            alt={settings.title}
            className="homeImg"
            unoptimized
          />
        ))}
      </section>
    </section>
  )
}
