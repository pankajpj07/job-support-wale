import React from 'react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData'
import BlogPostContent from '@/components/blog/BlogPostContent'
import SocialSharingButtons from '@/components/blog/SocialSharingButtons'
import NewsletterSignup from '@/components/blog/NewsletterSignup'
import {
  getBlogPostBySlug,
  getRelatedPosts,
  getPostBodyPlainText,
  getAllBlogSlugs,
  blogCategories,
} from '@/data/blogPosts'
import type { BlogPost } from '@/types/blog'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiajobsupport.in'

interface Props {
  post: BlogPost | null
  related: BlogPost[]
  slug: string
}

export default function BlogPostPage({ post, related, slug }: Props) {
  if (!post) {
    return (
      <Layout metaTitle="Post not found" pageHref="blog">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-indigo-600 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </Layout>
    )
  }

  const canonicalPath = `/blog/${slug}`
  const categoryName = blogCategories.find((c) => c.slug === post.category)?.name ?? post.category
  const bodyPlainText = getPostBodyPlainText(post.body)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalPath={canonicalPath}
        image={post.image}
        article
      />
      <Head>
        <ArticleSchema
          headline={post.title}
          description={post.excerpt}
          datePublished={post.date}
          dateModified={post.dateModified ?? post.date}
          author={post.author}
          image={post.image}
          url={`${SITE_URL}${canonicalPath}`}
          bodyPlainText={bodyPlainText}
        />
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: canonicalPath },
          ]}
        />
      </Head>
      <Layout metaTitle={post.title} pageHref={canonicalPath.replace(/^\//, '')}>
        <article className="py-10 md:py-16 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="text-indigo-600 font-medium hover:underline mb-6 inline-block"
            >
              ← Blog
            </Link>

            <header className="mb-8">
              <span className="text-sm font-medium text-indigo-600">{categoryName}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
                {post.title}
              </h1>
              <p className="text-slate-600 mt-3 text-lg">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>·</span>
                <span>{post.readTimeMinutes} min read</span>
                {post.author && (
                  <>
                    <span>·</span>
                    <span>{post.author}</span>
                  </>
                )}
              </div>
            </header>

            <BlogPostContent body={post.body} />

            <footer className="mt-10 pt-8 border-t border-slate-200">
              <SocialSharingButtons
                url={canonicalPath}
                title={post.title}
                description={post.excerpt}
              />
            </footer>

            {related.length > 0 && (
              <section className="mt-12 pt-10 border-t border-slate-200" aria-labelledby="related-posts">
                <h2 id="related-posts" className="text-xl font-semibold text-slate-900 mb-4">
                  Related posts
                </h2>
                <ul className="space-y-3">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-indigo-600 hover:underline font-medium"
                      >
                        {p.title}
                      </Link>
                      <span className="text-slate-500 text-sm ml-2">
                        {new Date(p.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-14">
              <NewsletterSignup />
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllBlogSlugs().map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const post = getBlogPostBySlug(slug) ?? null
  const related = post ? getRelatedPosts(post, 3) : []
  return { props: { post, related, slug } }
}
