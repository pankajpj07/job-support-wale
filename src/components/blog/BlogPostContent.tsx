import type { BlogPostBlock } from '@/types/blog'

interface BlogPostContentProps {
  body: BlogPostBlock[]
}

export default function BlogPostContent({ body }: BlogPostContentProps) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-p:leading-relaxed">
      {body.map((block, i) => {
        const key = `block-${i}`
        if (block.type === 'p') {
          return (
            <p key={key} className="text-slate-700 leading-relaxed">
              {block.content as string}
            </p>
          )
        }
        if (block.type === 'h2') {
          return (
            <h2 key={key} className="text-xl font-semibold text-slate-900 mt-8 mb-3">
              {block.content as string}
            </h2>
          )
        }
        if (block.type === 'h3') {
          return (
            <h3 key={key} className="text-lg font-semibold text-slate-900 mt-6 mb-2">
              {block.content as string}
            </h3>
          )
        }
        if (block.type === 'ul') {
          return (
            <ul key={key} className="list-disc list-inside text-slate-700 space-y-1 my-4">
              {(block.content as string[]).map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'ol') {
          return (
            <ol key={key} className="list-decimal list-inside text-slate-700 space-y-1 my-4">
              {(block.content as string[]).map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ol>
          )
        }
        return null
      })}
    </div>
  )
}
