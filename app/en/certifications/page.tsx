import { Metadata } from "next"
import { CertificationShowcase } from "@/components/certifications/CertificationShowcase"

export const metadata: Metadata = {
  title: "Certifications | Juan Carlos García Arriero",
  description: "140+ professional certifications in Azure, Oracle Cloud, MongoDB, DevOps, and AI."
}

export default function EnCertificationsPage() {
  return <CertificationShowcase locale="en" />
}
