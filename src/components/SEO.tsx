import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in';
const SITE_NAME = 'IndiaJobSupport';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  schema?: object;
  canonicalPath?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  article = false,
  schema,
  canonicalPath,
  noindex = false,
}: SEOProps) {
  const router = useRouter();
  const canonicalUrl = canonicalPath
    ? `${SITE_URL}${canonicalPath}`
    : `${SITE_URL}${router.asPath === '/' ? '' : router.asPath}`;

  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} – Professional IT Job Support for US Developers`;

  const pageDescription =
    description ||
    'Get professional job support from India\'s top IT experts. Real-time help for React, Angular, Node.js, Python & 50+ technologies. Trusted by developers across the USA.';

  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="language" content="English" />
      <meta name="author" content={SITE_NAME} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={imageUrl} />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}
