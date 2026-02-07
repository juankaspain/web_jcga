import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Juan Carlos García Arriero",
  description: "Ponte en contacto para contratación, consultoría u oportunidades de conferencias."
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-slate-50">
        Contacto
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Conectémonos</h2>
            <p className="text-slate-300 leading-relaxed">
              Si buscas a alguien que pueda liderar soluciones end-to-end de banca digital,
              pagos e IA - desde la arquitectura hasta las operaciones - hablemos.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Email
              </h3>
              <a
                              href="mailto:contact@jcga.dev"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                              contact@jcga.dev
              </a>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/juancarlosgarciarriero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                linkedin.com/in/juancarlosgarciarriero
              </a>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                GitHub
              </h3>
              <a
                href="https://github.com/juankaspain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                github.com/juankaspain
              </a>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Ubicación
              </h3>
              <p className="text-slate-300">Madrid, España</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="mb-4 text-xl font-semibold text-slate-50">Abierto a</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Roles de liderazgo técnico
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Consultoría de arquitectura cloud
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Proyectos de banca digital
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Conferencias y charlas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">✓</span>
              Mentoría técnica
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
