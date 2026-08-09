import React, { useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { Calendar, Clock } from 'lucide-react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import NewsletterSignup from '@/components/blog/NewsletterSignup'
import {
  blogPosts,
  blogCategories,
  getBlogPostsByCategory,
} from '@/data/blogPosts'
import { blogMetaKeywords } from '@/constants/constants'
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
    ? `${blogCategories.find((c) => c.slug === category)?.name ?? category} Job Support from India | Blog | IndiaJobSupport`
    : 'Job Support Blog | Job Support from India – Guides & Tips | IndiaJobSupport'
  const metaDescription =
    'Guides and tips on job support, job support from India, and job support services from India: React, Angular, Node.js, Python, Java, DevOps, data science. Learn how to choose and use IT job support effectively.'

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in'
  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={blogMetaKeywords}
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
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 py-14 md:py-20 px-4 md:px-8">
          <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
          <div className="glow-blob left-1/4 top-6 h-72 w-72 bg-primary-600/40 animate-float" aria-hidden />
          <div className="glow-blob right-1/5 bottom-0 h-56 w-56 bg-accent-400/20 animate-float-slow" aria-hidden />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Job Support from India – Blog & Guides
            </h1>
            <p className="text-slate-300">
              Guides and insights on job support and job support from India: React, Angular, Node.js, Python, Java, and how to choose and use IT job support effectively.
            </p>
          </div>
        </section>

        <div className="bg-white py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category filter */}
            <nav className="flex flex-wrap gap-2 mb-10" aria-label="Blog categories">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !category
                    ? 'bg-primary-600 text-white shadow-glow-sm'
                    : 'glass-card-light text-slate-700 hover:text-primary-700'
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
                  ? 'bg-primary-600 text-white shadow-glow-sm'
                  : 'glass-card-light text-slate-700 hover:text-primary-700'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>

          {/* Post list */}
          <ul className="grid gap-6 sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <li key={post.slug}>
                <article className="h-full">
                  <Link href={`/blog/${post.slug}`} className="group glass-card-light flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
                    <span className="text-sm font-medium text-primary-600">
                      {blogCategories.find((c) => c.slug === post.category)?.name ?? post.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mt-1 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mt-2 line-clamp-2">{post.excerpt}</p>
                    <span className="mt-4 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" aria-hidden />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" aria-hidden />
                        {post.readTimeMinutes} min read
                      </span>
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
