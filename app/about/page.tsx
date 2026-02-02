import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Juan Carlos García Arriero",
  description: "Senior Technical Lead & Cloud Solutions Architect with 15+ years of experience in digital banking, payments, and cloud architecture."
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-50">
            About Me
          </h1>
          <p className="text-lg text-cyan-300">
            Senior Technical Lead & Cloud Solutions Architect
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-slate-300">
          {/* Who I Am */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Who I Am</h2>
            <div className="space-y-4">
              <p>
                I'm a Senior Technical Lead & Cloud Solutions Architect specializing in digital banking 
                and payments, with more than 15 years of experience across healthcare, telecommunications, 
                and, primarily, the financial sector.
              </p>
              <p>
                Currently at <span className="font-semibold text-cyan-300">Santander Digital Services</span>, 
                I lead technical solutions that serve millions of customers daily, combining cloud architecture, 
                data-driven insights, and AI-powered services.
              </p>
            </div>
          </section>

          {/* My Mission */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">My Mission</h2>
            <p>
              Connecting cloud architecture, data, and AI to build resilient, secure, and 
              customer-centric banking platforms that make a real difference in people's financial lives.
            </p>
          </section>

          {/* Work Philosophy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Work Philosophy</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="mb-2 font-semibold text-slate-50">Collaborative Leadership</h3>
                <p className="text-sm text-slate-400">
                  Leading through collaboration, fostering team growth, and building trust through 
                  transparent communication.
                </p>
              </div>
              
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="mb-2 font-semibold text-slate-50">DevOps Culture</h3>
                <p className="text-sm text-slate-400">
                  Automation, observability, and continuous improvement as the foundation of 
                  reliable software delivery.
                </p>
              </div>
              
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="mb-2 font-semibold text-slate-50">Continuous Learning</h3>
                <p className="text-sm text-slate-400">
                  With 140+ certifications, I'm committed to staying at the forefront of 
                  technology and best practices.
                </p>
              </div>
              
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                <h3 className="mb-2 font-semibold text-slate-50">Quality & Resilience</h3>
                <p className="text-sm text-slate-400">
                  Obsessive focus on code quality, system reliability, and engineering excellence 
                  in everything we build.
                </p>
              </div>
            </div>
          </section>

          {/* Areas of Impact */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Where I Add Value</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">☁️</span>
                <div>
                  <strong className="text-slate-50">Cloud Architecture</strong>
                  <p className="text-sm text-slate-400">
                    Designing scalable Azure solutions for digital banking channels and payment platforms
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">🔄</span>
                <div>
                  <strong className="text-slate-50">API & Microservices</strong>
                  <p className="text-sm text-slate-400">
                    Building PSD2-compliant APIs, Open Banking integrations, ESB orchestrations, and API governance
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">👥</span>
                <div>
                  <strong className="text-slate-50">Technical Governance & Leadership</strong>
                  <p className="text-sm text-slate-400">
                    Leading multidisciplinary teams (up to 12 people), mentoring engineers, and establishing technical standards
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-cyan-400">🤖</span>
                <div>
                  <strong className="text-slate-50">Data & AI in Banking</strong>
                  <p className="text-sm text-slate-400">
                    Implementing AI-powered categorization, PFM/BFM solutions, risk engines, and intelligent banking services
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Journey Highlights */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Career Journey</h2>
            <div className="space-y-3 border-l-2 border-cyan-500 pl-6">
              <div>
                <p className="font-semibold text-slate-50">2025-2026</p>
                <p className="text-sm text-slate-400">
                  AI & Data Science Specialization at UNIR (9.3/10) + Advanced AI/Data certifications
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-50">2018-Present</p>
                <p className="text-sm text-slate-400">
                  Senior Technical Lead & Cloud Solutions Architect at Santander Digital Services
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-50">2012-2018</p>
                <p className="text-sm text-slate-400">
                  Payment Platform Architecture at CSI-Isban (Santander Group)
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
