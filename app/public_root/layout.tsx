import type { ReactNode } from "react"
import "../globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata = {
  title: "Juan Carlos García Arriero | Cloud & Payments Architect",
  description:
    "Senior Technical Lead & Cloud Solutions Architect specializing in digital banking, payments, and AI-driven solutions.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
