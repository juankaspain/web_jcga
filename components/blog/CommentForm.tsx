"use client"

import { useState } from 'react'

interface CommentFormProps {
  postId: string
  onSubmit: (comment: { author: string; content: string }) => void
  locale?: 'es' | 'en'
}

export function CommentForm({ postId, onSubmit, locale = 'es' }: CommentFormProps) {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const copy = {
    es: {
      namePlaceholder: 'Tu nombre',
      commentPlaceholder: 'Escribe tu comentario...',
      submit: 'Publicar comentario',
      submitting: 'Publicando...'
    },
    en: {
      namePlaceholder: 'Your name',
      commentPlaceholder: 'Write your comment...',
      submit: 'Post comment',
      submitting: 'Posting...'
    }
  }

  const t = copy[locale]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!author.trim() || !content.trim()) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    onSubmit({ author, content })
    setAuthor('')
    setContent('')
    setIsSubmitting(false)

    // In production, save to backend/localStorage
    setTimeout(() => setIsSubmitting(false), 600)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder={t.namePlaceholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={t.commentPlaceholder}
        rows={4}
        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:hover:scale-100"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
    </form>
  )
}
