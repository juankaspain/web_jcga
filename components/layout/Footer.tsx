export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Juan Carlos García Arriero.</p>
        <p>Digital Banking · Payments · Cloud · Data & AI.</p>
      </div>
    </footer>
  )
}
