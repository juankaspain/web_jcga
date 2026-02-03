import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contenido | Juan Carlos García Arriero",
  description: "Artículos, charlas e insights sobre arquitectura cloud, banca digital e IA."
}

export default function ContentPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-slate-50">
        Contenido & Insights
      </h1>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 text-center">
        <p className="text-lg text-slate-300">
          Esta sección mostrará artículos, charlas e insights sobre:
        </p>
        <ul className="mt-6 space-y-2 text-slate-400">
          <li>• Mejores prácticas de arquitectura cloud</li>
          <li>• Banca digital y sistemas de pagos</li>
          <li>• Soluciones de IA y data</li>
          <li>• DevOps y excelencia en ingeniería</li>
        </ul>
        <p className="mt-8 text-sm text-slate-500">
          Contenido próximamente...
        </p>
      </div>
    </div>
  )
}
