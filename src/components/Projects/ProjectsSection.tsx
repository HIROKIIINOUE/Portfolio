import { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { uiCopy } from '../../locales/ui'
import ProjectList from './ProjectList'

const ProjectsSection = () => {
  const locale = 'en'
  const [isOwnProjects, setIsOwnProjects] = useState(true)

  return (
    <section id="projects" className="scroll-mt-28 px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:items-center">
          <h2 className="text-xs font-semibold tracking-[0.38em] text-emerald-200/78 uppercase sm:text-sm">
            {uiCopy.sections.projects[locale]}
          </h2>
          <ToggleButtonGroup
            value={isOwnProjects ? 'personal' : 'team'}
            exclusive
            onChange={(_, nextView: 'personal' | 'team' | null) => {
              if (nextView) setIsOwnProjects(nextView === 'personal')
            }}
            aria-label="Project category"
            sx={{
              p: '6px',
              my: "12px",
              borderRadius: '999px',
              border: '1px solid rgba(52, 211, 153, 0.22)',
              background:
                'linear-gradient(145deg, rgba(2, 6, 23, 0.94) 0%, rgba(6, 78, 59, 0.5) 100%)',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.04), 0 12px 32px rgba(2,12,18,0.28)',
              backdropFilter: 'blur(24px)',
              '& .MuiToggleButtonGroup-grouped': {
                margin: 0,
                border: 0,
                borderRadius: '999px !important',
              },
            }}
          >
            <ToggleButton
              value="personal"
              aria-label="Show personal projects"
              sx={{
                px: 2.25,
                py: 1,
                color: 'rgb(226 232 240)',
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                '&.Mui-selected': {
                  color: 'rgb(236 253 245)',
                  background:
                    'linear-gradient(135deg, rgba(6,95,70,0.92) 0%, rgba(5,150,105,0.9) 100%)',
                  boxShadow: '0 10px 26px rgba(4, 120, 87, 0.22)',
                },
                '&.Mui-selected:hover': {
                  background:
                    'linear-gradient(135deg, rgba(6,95,70,0.96) 0%, rgba(5,150,105,0.94) 100%)',
                },
              }}
            >
              Personal Projects
            </ToggleButton>
            <ToggleButton
              value="team"
              aria-label="Show group projects"
              sx={{
                px: 2.25,
                py: 1,
                color: 'rgb(226 232 240)',
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                '&.Mui-selected': {
                  color: 'rgb(236 253 245)',
                  background:
                    'linear-gradient(135deg, rgba(6,95,70,0.92) 0%, rgba(5,150,105,0.9) 100%)',
                  boxShadow: '0 10px 26px rgba(4, 120, 87, 0.22)',
                },
                '&.Mui-selected:hover': {
                  background:
                    'linear-gradient(135deg, rgba(6,95,70,0.96) 0%, rgba(5,150,105,0.94) 100%)',
                },
              }}
            >
              Group Projects
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <ProjectList isOwnProject={isOwnProjects} locale={locale} />
      </div>
    </section>
  )
}

export default ProjectsSection
