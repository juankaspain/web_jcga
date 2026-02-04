"use client"

import { notFound } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/data/blog-posts"
import { LikeButton } from "@/components/blog/LikeButton"
import { CommentForm } from "@/components/blog/CommentForm"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"

interface Comment {
  id: string
  author: string
  content: string
  date: string
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const [comments, setComments] = useState<Comment[]>([])

  const handleCommentSubmit = (comment: { author: string; content: string }) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      ...comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    setComments([...comments, newComment])
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link
        href="/en/content"
        className="mb-8 inline-flex items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <article className="mb-12">
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-50">
            {post.title}
          </h1>

          <p className="text-xl text-slate-300">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2">
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
        </header>

        <div className="prose prose-invert prose-cyan max-w-none">
          <div
            className="text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <LikeButton postId={post.id} initialLikes={post.likes} locale="en" />
        </div>
      </article>

      <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8">
        <h2 className="mb-6 text-2xl font-bold text-slate-50">Comments</h2>
        
        {comments.length > 0 && (
          <div className="mb-8 space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl border border-slate-700 bg-slate-900/50 p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-cyan-400">{comment.author}</span>
                  <span className="text-sm text-slate-400">{comment.date}</span>
                </div>
                <p className="text-slate-300">{comment.content}</p>
              </div>
            ))}
          </div>
        )}

        <CommentForm postId={post.id} onSubmit={handleCommentSubmit} locale="en" />
      </section>
    </div>
  )
}
