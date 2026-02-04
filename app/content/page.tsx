import { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/data/blog-posts"

export const metadata: Metadata = {
  title: "Blog | Juan Carlos García Arriero",
  description: "Artículos sobre IA, Cloud, DevOps, arquitectura y mejores prácticas de desarrollo.",
}

// SVG Icons as components to replace lucide-react
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-50">
          Blog
        </h1>
        <p className="text-lg text-slate-300">
          Artículos, insights y tutoriales sobre tecnología
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/content/${post.slug}`}
            className="group block rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-6 transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="h-4 w-4" />
                {post.readTime} min
              </span>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-slate-50 transition-colors group-hover:text-cyan-400">
              {post.title.es}
            </h2>

            <p className="mb-4 text-slate-300">{post.excerpt.es}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                >
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
