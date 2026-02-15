import React, { useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import NewsletterSignup from '@/components/blog/NewsletterSignup'
import {
  blogPosts,
  blogCategories,
  getBlogPostsByCategory,
} from '@/data/blogPosts'
import type { BlogPost } from '@/types/blog'

interface Props {
  posts: BlogPost[]
}

export default function BlogIndexPage({ posts }: Props) {
  const router = useRouter()
  const category = typeof router.query.category === 'string' ? router.query.category : null
  const filteredPosts = useMemo(
    () => (category ? getBlogPostsByCategory(category) : posts),
    [category, posts]
  )

  const metaTitle = category
    ? `Blog: ${blogCategories.find((c) => c.slug === category)?.name ?? category} | IndiaJobSupport`
    : 'Blog | IndiaJobSupport'
  const metaDescription =
    'Guides, how-tos, and insights on IT job support: React, Angular, Node.js, Python, Java, and how to choose and use job support effectively.'

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in'
  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalPath="/blog"
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="IndiaJobSupport Blog RSS"
          href={`${siteUrl}/api/rss`}
        />
      </Head>
      <Layout metaTitle={metaTitle} pageHref="blog">
        <div className="bg-white py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Blog
            </h1>
            <p className="text-slate-600 mb-8">
              Guides, how-tos, and insights on job support and the technologies we work with.
            </p>

            {/* Category filter */}
            <nav className="flex flex-wrap gap-2 mb-10" aria-label="Blog categories">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All
              </Link>
              {blogCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog?category=${c.slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === c.slug
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>

          {/* Post list */}
          <ul className="space-y-8">
            {filteredPosts.map((post) => (
              <li key={post.slug} className="border-b border-slate-200 pb-8 last:border-0">
                <article>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <span className="text-sm font-medium text-indigo-600">
                      {blogCategories.find((c) => c.slug === post.category)?.name ?? post.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mt-2 line-clamp-2">{post.excerpt}</p>
                    <span className="mt-2 inline-block text-sm text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      {' · '}
                      {post.readTimeMinutes} min read
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Category filtering is done client-side via query param; for static export we show all.
  // If you need category-specific static paths, add getStaticPaths with category and use query in client.
  return {
    props: {
      posts: blogPosts,
    },
  }
}
