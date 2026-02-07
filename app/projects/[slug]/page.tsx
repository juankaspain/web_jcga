import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ProjectDetailPage } from '@/components/projects/ProjectDetailPage'
import { getProject, getProjectSlugs } from '@/lib/data/projects'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all projects (ISR)
export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject(params.slug, 'es')
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado | Juan Carlos García Arriero',
    }
  }

  return {
    title: `${project.title} | Juan Carlos García Arriero`,
    description: project.problem,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      type: 'article',
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 800,
          alt: project.thumbnailAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.subtitle,
      images: [project.thumbnail],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug, 'es')

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} locale="es" />
}

// Revalidate every hour for ISR
export const revalidate = 3600
