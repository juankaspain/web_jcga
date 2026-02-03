import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Mí | Juan Carlos García Arriero",
  description: "Senior Technical Lead y Arquitecto de Soluciones Cloud con más de 15 años de experiencia en banca digital, pagos y arquitectura cloud."
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-50">
            Sobre Mí
          </h1>
          <p className="text-lg text-cyan-300">
            Senior Technical Lead & Cloud Solutions Architect
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-slate-300">
          {/* Quién Soy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Quién Soy</h2>
            <div className="space-y-4">
              <p>
                Soy Senior Technical Lead y Arquitecto de Soluciones Cloud especializado en banca digital
                y pagos, con más de 15 años de experiencia en sanidad, telecomunicaciones
                y, principalmente, el sector financiero.
              </p>
              <p>
                Actualmente en <span className="text-cyan-400">Santander Digital Services</span>, lidero soluciones técnicas que sirven a millones de clientes diariamente, combinando
                arquitectura cloud, insights basados en datos y servicios impulsados por IA.
              </p>
            </div>
          </section>

          {/* Mi Misión */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Mi Misión</h2>
            <p>
              Conectar arquitectura cloud, datos e IA para construir plataformas bancarias resilientes, seguras y centradas en el cliente que marquen una
              diferencia real en la vida financiera de las personas.
            </p>
          </section>

          {/* Filosofía de Trabajo */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Filosofía de Trabajo</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Liderazgo Colaborativo</h3>
                <p className="text-sm text-slate-400">
                  Liderar a través de la colaboración, fomentando el crecimiento del equipo y construyendo confianza mediante comunicación transparente.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Cultura DevOps</h3>
                <p className="text-sm text-slate-400">
                  Automatización, observabilidad y mejora continua como base de la entrega de software fiable.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Aprendizaje Continuo</h3>
                <p className="text-sm text-slate-400">
                  Con más de 140 certificaciones, estoy comprometido a mantenerme a la vanguardia de la tecnología y las mejores prácticas.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Calidad y Resiliencia</h3>
                <p className="text-sm text-slate-400">
                  Enfoque obsesivo en la calidad del código, la fiabilidad del sistema y la excelencia en ingeniería en todo lo que construimos.
                </p>
              </div>
            </div>
          </section>

          {/* Valores */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Valores Fundamentales</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Excelencia en cada línea de código</li>
              <li>Diseño centrado en el usuario</li>
              <li>Toma de decisiones basada en datos</li>
              <li>Comunicación transparente y honesta</li>
              <li>Mentoría y compartir conocimiento</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
