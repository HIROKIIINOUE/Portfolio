import { useTranslation } from 'react-i18next'
import { getProjects } from '../../locales/project'
import { isSupportedLanguage } from '../../i18n'
import ProjectCard from './ProjectCard'

type Props = {
  isOwnProject: boolean
}

const ProjectList = (props: Props) => {
  const { isOwnProject } = props
  const { i18n } = useTranslation('project')
  const locale = isSupportedLanguage(i18n.resolvedLanguage) ? i18n.resolvedLanguage : 'en'
  const projects = getProjects(locale)

  const filteredProjects = projects.filter((project) =>
    isOwnProject
      ? project.common.category === 'personal'
      : project.common.category === 'team'
  )
  const gridClassName =
    filteredProjects.length === 1
      ? 'grid gap-5 max-w-2xl mx-auto'
      : filteredProjects.length === 2
        ? 'grid gap-5 md:grid-cols-2 max-w-5xl mx-auto'
        : 'grid gap-5 md:grid-cols-2 xl:grid-cols-3'

  return (
    <div className={gridClassName}>
      {filteredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

export default ProjectList
