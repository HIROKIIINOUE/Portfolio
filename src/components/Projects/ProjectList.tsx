import { getProjects } from '../../locales/project'
import ProjectCard from './ProjectCard'

type Props = {
  isOwnProject: boolean
  locale: 'en' | 'ja' | 'fr'
}

const ProjectList = (props: Props) => {
  const { isOwnProject, locale } = props
  const projects = getProjects(locale)

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
