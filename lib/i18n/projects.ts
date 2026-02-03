// Translations for project data
export const projectTranslations: Record<string, Record<'es' | 'en', any>> = {
  'payment-platform': {
    es: {
      title: 'Plataforma de Pagos Multicanal',
      subtitle: 'Procesamiento centralizado de pagos para bancos internacionales',
      description: 'Plataforma empresarial de pagos que gestiona pagos internacionales, domésticos, SEPA y cámaras paneuropeas para múltiples bancos del Grupo Santander.',
      metrics: [
        { label: 'Txns Diarias', value: '10M+' },
        { label: 'Disponibilidad', value: '99.9%' }
      ]
    },
    en: {
      title: 'Multi-Channel Payment Platform',
      subtitle: 'Centralized payment processing for international banks',
      description: 'Enterprise payment platform managing international, domestic, SEPA, and pan-European chamber payments for multiple banks within Santander Group.',
      metrics: [
        { label: 'Daily Txns', value: '10M+' },
        { label: 'Uptime', value: '99.9%' }
      ]
    }
  },
  'digital-banking': {
    es: {
      title: 'Plataforma de Banca Digital y Salud Financiera',
      subtitle: 'Soluciones PFM/BFM para 7M+ clientes',
      description: 'Plataforma integral de banca digital con Gestión Financiera Personal (PFM), Gestión Financiera Empresarial (BFM), categorización de transacciones, control de suscripciones y ahorro automático.',
      metrics: [
        { label: 'Clientes', value: '7M+' },
        { label: 'Países', value: '4' }
      ]
    },
    en: {
      title: 'Digital Banking & Financial Health Platform',
      subtitle: 'PFM/BFM solutions for 7M+ customers',
      description: 'Comprehensive digital banking platform featuring Personal Financial Management (PFM), Business Financial Management (BFM), transaction categorization, subscription control, and automatic savings.',
      metrics: [
        { label: 'Customers', value: '7M+' },
        { label: 'Countries', value: '4' }
      ]
    }
  },
  'instant-payments': {
    es: {
      title: 'Pagos Instantáneos e Integración Verifactu',
      subtitle: 'Procesamiento de pagos en tiempo real con cumplimiento normativo',
      description: 'Plataforma para procesamiento de pagos instantáneos integrada con la normativa española Verifactu de facturación, permitiendo pagos en tiempo real para autónomos y PYMEs.',
      metrics: [
        { label: 'PYMEs', value: '500K+' },
        { label: 'Éxito', value: '99.95%' }
      ]
    },
    en: {
      title: 'Instant Payments & Verifactu Integration',
      subtitle: 'Real-time payment processing with regulatory compliance',
      description: 'Platform for instant payment processing integrated with Spanish Verifactu invoicing regulations, enabling real-time payments for freelancers and SMEs.',
      metrics: [
        { label: 'SMEs', value: '500K+' },
        { label: 'Success', value: '99.95%' }
      ]
    }
  },
  'psd2-api': {
    es: {
      title: 'Plataforma API de Open Banking PSD2',
      subtitle: 'Gestión empresarial de APIs para Open Banking',
      description: 'Plataforma completa de APIs Open Banking conforme a PSD2 con seguridad OAuth2/OpenID Connect, limitación de tasa y gestión integral de APIs.',
      metrics: [
        { label: 'Integraciones', value: '50+' },
        { label: 'Respuesta', value: '<200ms' }
      ]
    },
    en: {
      title: 'PSD2 Open Banking API Platform',
      subtitle: 'Enterprise API management for Open Banking',
      description: 'Complete PSD2-compliant Open Banking API platform with OAuth2/OpenID Connect security, rate limiting, and comprehensive API management.',
      metrics: [
        { label: 'Integrations', value: '50+' },
        { label: 'Response', value: '<200ms' }
      ]
    }
  },
  'risk-engine': {
    es: {
      title: 'Motor de Riesgo y Plataforma de Autenticación',
      subtitle: 'Evaluación de riesgo potenciada por IA para onboarding digital',
      description: 'Motor inteligente de evaluación de riesgo para onboarding de clientes, firma de transacciones y autenticación fuerte con detección de fraude basada en aprendizaje automático.',
      metrics: [
        { label: 'Fraude -', value: '70%' },
        { label: 'Scoring', value: '<100ms' }
      ]
    },
    en: {
      title: 'Risk Engine & Authentication Platform',
      subtitle: 'AI-powered risk assessment for digital onboarding',
      description: 'Intelligent risk assessment engine for customer onboarding, transaction signing, and strong authentication with machine learning-based fraud detection.',
      metrics: [
        { label: 'Fraud -', value: '70%' },
        { label: 'Scoring', value: '<100ms' }
      ]
    }
  },
  'devops-platform': {
    es: {
      title: 'Plataforma DevOps y Excelencia en Ingeniería',
      subtitle: 'Pipeline CI/CD y plataforma de desarrolladores',
      description: 'Plataforma DevOps integral con pipelines CI/CD automatizados, frameworks de testing, observabilidad y capacidades de autoservicio para desarrolladores.',
      metrics: [
        { label: 'Deploy +', value: '300%' },
        { label: 'Cobertura', value: '85%+' }
      ]
    },
    en: {
      title: 'DevOps Platform & Engineering Excellence',
      subtitle: 'CI/CD pipeline and developer platform',
      description: 'Comprehensive DevOps platform with automated CI/CD pipelines, testing frameworks, observability, and developer self-service capabilities.',
      metrics: [
        { label: 'Deploy +', value: '300%' },
        { label: 'Coverage', value: '85%+' }
      ]
    }
  }
}

// Helper function to get translated project data
export function getTranslatedProject(projectId: string, locale: 'es' | 'en') {
  return projectTranslations[projectId]?.[locale]
}
