import { useTranslation } from 'react-i18next'
import type { SkillLabel } from '../SkillBadge/skillCatalog'
import ProjectCard from './ProjectCard'

type ProjectData = {
  id: string
  common: {
    category: 'personal' | 'team'
    image: string
    liveUrl: string
    gitHubUrl: string
    skills: SkillLabel[]
  }
  platform: string
  title: string
  description: string
}

type Props = {
  isOwnProject: boolean
}

const ProjectList = (props: Props) => {
  const { isOwnProject } = props
  const { t } = useTranslation('project')
  const catalog = t('catalog', { returnObjects: true }) as Record<string, Omit<ProjectData, 'id'>>
  const projects = Object.entries(catalog).map(([id, project]) => ({
    id,
    ...project,
  }))

  const filteredProjects = projects.filter((project) =>
    isOwnProject
      ? project.common.category === 'personal'
      : project.common.category === 'team'
  )

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

export default ProjectList
