import { Hero } from '@/components/home/Hero'

interface HeroSectionProps {
  locale?: 'es' | 'en'
}

export function HeroSection({ locale = 'es' }: HeroSectionProps) {
  return <Hero locale={locale} />
}
