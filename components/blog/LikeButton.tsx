"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

interface LikeButtonProps {
  postId: string
  initialLikes: number
  locale?: 'es' | 'en'
}

export function LikeButton({ postId, initialLikes, locale = 'es' }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [isLiked, setIsLiked] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleLike = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
    
    // In production, save to backend/localStorage
    setTimeout(() => setIsAnimating(false), 600)
  }

  return (
    <motion.button
      onClick={handleLike}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all ${
        isLiked
          ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg shadow-pink-500/25'
          : 'border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-pink-500/50 hover:text-pink-400'
      }`}
    >
      {/* Glow effect */}
      {isLiked && (
        <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-50 blur" />
      )}
      
      <motion.svg
        className="relative h-5 w-5"
        fill={isLiked ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={isAnimating ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </motion.svg>
      <span className="relative">{likes}</span>
    </motion.button>
  )
}

interface ShareButtonsProps {
  postTitle: string
  postUrl: string
  locale?: 'es' | 'en'
}

export function ShareButtons({ postTitle, postUrl, locale = 'es' }: ShareButtonsProps) {
  const text = locale === 'es' ? 'Compartir' : 'Share'
  const shareData = {
    title: postTitle,
    url: postUrl
  }

  const handleShare = async (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`
    }

    if (platform === 'copy') {
      await navigator.clipboard.writeText(postUrl)
      return
    }

    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-slate-400">{text}:</span>
      <div className="flex gap-2">
        <button
          onClick={() => handleShare('twitter')}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 transition-all hover:border-sky-500 hover:bg-sky-500/10 hover:text-sky-400"
          aria-label="Share on Twitter"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </button>
        
        <button
          onClick={() => handleShare('linkedin')}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
          aria-label="Share on LinkedIn"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </button>
        
        <button
          onClick={() => handleShare('copy')}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
          aria-label="Copy link"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

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
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder={t.namePlaceholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={t.commentPlaceholder}
        rows={4}
        className="w-full rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
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
