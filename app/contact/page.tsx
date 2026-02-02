import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Juan Carlos García Arriero",
  description: "Get in touch for hiring, consulting, or speaking opportunities."
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-slate-50">
        Get In Touch
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Let's Connect</h2>
            <p className="text-slate-300 leading-relaxed">
              If you're looking for someone who can lead end-to-end digital banking, 
              payments, and AI solutions – from architecture to operations – let's talk.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Email
              </h3>
              <a
                href="mailto:juanca755@hotmail.com"
                className="text-slate-200 hover:text-cyan-400 transition-colors"
              >
                juanca755@hotmail.com
              </a>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/juancarlosga/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-cyan-400 transition-colors"
              >
                linkedin.com/in/juancarlosga
              </a>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Location
              </h3>
              <p className="text-slate-200">Madrid, Spain</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">Available For</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-cyan-400">•</span>
                <div>
                  <strong className="text-slate-200">Technical Leadership Roles</strong>
                  <p className="text-sm text-slate-400">
                    Senior positions in cloud architecture and digital banking
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-cyan-400">•</span>
                <div>
                  <strong className="text-slate-200">Consulting</strong>
                  <p className="text-sm text-slate-400">
                    Architecture reviews, cloud strategy, DevOps transformation
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-cyan-400">•</span>
                <div>
                  <strong className="text-slate-200">Speaking Engagements</strong>
                  <p className="text-sm text-slate-400">
                    Tech talks on cloud, payments, AI in banking
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4">
            <p className="text-sm text-slate-300">
              <strong className="text-slate-50">Response Time:</strong> I typically respond to 
              professional inquiries within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
