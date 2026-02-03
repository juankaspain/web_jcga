import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content | Juan Carlos García Arriero",
  description: "Articles, talks, and insights on cloud architecture, digital banking, and AI."
}

export default function ContentPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-slate-50">
        Content & Insights
      </h1>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 text-center">
        <p className="text-lg text-slate-300">
          This section will showcase articles, talks, and insights on:
        </p>
        <ul className="mt-6 space-y-2 text-slate-400">
          <li>• Cloud architecture best practices</li>
          <li>• Digital banking and payment systems</li>
          <li>• AI and data-driven solutions</li>
          <li>• DevOps and engineering excellence</li>
        </ul>
        <p className="mt-8 text-sm text-slate-500">
          Content coming soon...
        </p>
      </div>
    </div>
  )
}
