import { Hero } from "@/components/home/Hero"
import { ImpactStats } from "@/components/home/ImpactStats"

export const metadata = {
  title: "Home | Juan Carlos García Arriero",
  description:
    "Senior Technical Lead & Cloud Solutions Architect specializing in digital banking, payments, and AI-driven solutions.",
}

export default function EnHomePage() {
  return (
    <>
      <Hero locale="en" />
      <ImpactStats />
    </>
  )
}
