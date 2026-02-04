import { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/data/blog-posts"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Juan Carlos García Arriero",
  description: "Artículos sobre IA, Cloud, DevOps, arquitectura y mejores prácticas de desarrollo.",
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
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <h2 className="mb-3 text-2xl font-bold text-slate-50 transition-colors group-hover:text-cyan-400">
              {post.title}
            </h2>

            <p className="mb-4 text-slate-300">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                >
                  <Tag className="h-3 w-3" />
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
