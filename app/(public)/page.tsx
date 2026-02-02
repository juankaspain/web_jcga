import { Hero } from "@/components/home/Hero"
import { ImpactStats } from "@/components/home/ImpactStats"

export const metadata = {
  title: "Inicio | Juan Carlos García Arriero",
  description:
    "Senior Technical Lead & Cloud Solutions Architect en banca digital, especializado en pagos, cloud, datos y AI.",
}

export default function HomePage() {
  return (
    <>
      <Hero locale="es" />
      <ImpactStats />
    </>
  )
}
