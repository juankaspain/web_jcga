export type Locale = 'es' | 'en'

export type HeroClaims = {
  users: string
  transactionsPerDay: string
  sla: string
  years: string
  certifications: string
  teamSize: string
}

export type HeroCopy = {
  greeting: string
  kicker: string
  h1Line1: string
  h1Line2: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
}

export const HERO_CLAIMS: HeroClaims = {
  users: '5M+',
  transactionsPerDay: '2M',
  sla: '99.95%',
  years: '15+',
  certifications: '140+',
  teamSize: '12',
}

export const HERO_COPY: Record<Locale, HeroCopy> = {
  es: {
    greeting: 'Hola, soy Juan Carlos...',
    kicker: 'Senior Technical Lead @ Santander Digital Services',
    h1Line1: 'Arquitecto soluciones de pago',
    h1Line2: 'que escalan a millones de usuarios',
    description:
      'Diseño y lidero arquitecturas cloud (Azure/Oracle) para sistemas de pago SEPA e internacionales en banca digital. Mi trabajo impacta a ' +
      `${HERO_CLAIMS.users} usuarios procesando ${HERO_CLAIMS.transactionsPerDay} transacciones/día con SLA ${HERO_CLAIMS.sla}.`,
    ctaPrimary: 'Caso de estudio: Plataforma SEPA',
    ctaSecondary: 'Mi expertise técnico',
  },
  en: {
    greeting: "Hi, I'm Juan Carlos...",
    kicker: 'Senior Technical Lead @ Santander Digital Services',
    h1Line1: 'I architect payment solutions',
    h1Line2: 'that scale to millions of users',
    description:
      'I design and lead cloud architectures (Azure/Oracle) for SEPA and international payment systems in digital banking. My work impacts ' +
      `${HERO_CLAIMS.users} users processing ${HERO_CLAIMS.transactionsPerDay} transactions/day with ${HERO_CLAIMS.sla} SLA.`,
    ctaPrimary: 'Case study: SEPA Platform',
    ctaSecondary: 'My technical expertise',
  },
}
