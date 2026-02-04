"use client"

import { notFound } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/data/blog-posts"
import { LikeButton } from "@/components/blog/LikeButton"
import { CommentForm } from "@/components/blog/CommentForm"

interface Comment {
  id: string
  author: string
  content: string
  date: string
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

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  )
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
        <ArrowLeftIcon className="h-4 w-4" />
        Back to blog
      </Link>

      <article className="mb-12">
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-50">
            {post.title.en}
          </h1>

          <p className="text-xl text-slate-300">{post.excerpt.en}</p>

          <div className="mt-6 flex flex-wrap gap-2">
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
        </header>

        <div className="prose prose-invert prose-cyan max-w-none">
          <div
            className="text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.en }}
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
