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
                Currently at <span className="text-cyan-400">Santander Digital Services</span>, I lead technical solutions that serve millions of customers daily, combining cloud
                architecture, data-driven insights, and AI-powered services.
              </p>
            </div>
          </section>

          {/* My Mission */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">My Mission</h2>
            <p>
              Connecting cloud architecture, data, and AI to build resilient, secure, and customer-centric banking platforms that make a
              real difference in people's financial lives.
            </p>
          </section>

          {/* Work Philosophy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Work Philosophy</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Collaborative Leadership</h3>
                <p className="text-sm text-slate-400">
                  Leading through collaboration, fostering team growth, and building trust through transparent communication.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">DevOps Culture</h3>
                <p className="text-sm text-slate-400">
                  Automation, observability, and continuous improvement as the foundation of reliable software delivery.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Continuous Learning</h3>
                <p className="text-sm text-slate-400">
                  With 140+ certifications, I'm committed to staying at the forefront of technology and best practices.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="mb-2 font-semibold text-slate-50">Quality & Resilience</h3>
                <p className="text-sm text-slate-400">
                  Obsessive focus on code quality, system reliability, and engineering excellence in everything we build.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Core Values</h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Excellence in every line of code</li>
              <li>User-centric design thinking</li>
              <li>Data-driven decision making</li>
              <li>Transparent and honest communication</li>
              <li>Mentorship and knowledge sharing</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
