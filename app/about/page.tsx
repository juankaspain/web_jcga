import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Juan Carlos García Arriero",
  description: "Learn about my professional journey in cloud architecture, digital banking, and AI solutions."
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-slate-50">
        About Me
      </h1>

      <div className="space-y-6 text-slate-300">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">Who I Am</h2>
          <p className="leading-relaxed">
            I'm a Senior Technical Lead & Cloud Solutions Architect specializing in digital banking and payments, 
            with over 15 years of experience across healthcare, telecommunications, and financial services.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">My Mission</h2>
          <p className="leading-relaxed">
            Connecting cloud architecture, data, and AI to build resilient, secure, and customer-centric banking platforms 
            that serve millions of users across multiple countries.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">My Approach</h2>
          <ul className="space-y-2 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>Close-knit teamwork and leadership</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>DevOps culture, automation, and observability</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>Continuous learning (140+ certifications and counting)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>Obsessive focus on quality and resilience</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-slate-50">Where I Add Value</h2>
          <ul className="space-y-2 leading-relaxed">
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>Cloud architecture in Azure for digital channels and payments</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>API and microservices design (PSD2, Open Banking, ESB, API Managers)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>Technical governance and leadership of multidisciplinary teams up to 12 people</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-cyan-400">•</span>
              <span>Data & AI in banking products (PFM/BFM, categorization, risk)</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
