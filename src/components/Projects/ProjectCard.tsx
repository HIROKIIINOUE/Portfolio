// 次回ココから
// プロジェクトカードの編集と完成
// 技術スタックはアイコンを共通コンポーネント化してスキルセクションと共用できないか

import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import SkillBadge from '../SkillBadge/SkillBadge'
import type { SkillLabel } from '../SkillBadge/skillCatalog'

type Props = {
  project: {
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
  index: number
}

const screenshotThemes: Record<string, string> = {
  studyhub:
    'bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.26),transparent_36%),linear-gradient(145deg,rgba(6,78,59,0.92)_0%,rgba(15,23,42,0.98)_72%,rgba(2,6,23,0.98)_100%)]',
  devtrack:
    'bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.22),transparent_34%),linear-gradient(145deg,rgba(15,23,42,0.98)_0%,rgba(6,78,59,0.6)_48%,rgba(2,6,23,0.98)_100%)]',
  tripcanvas:
    'bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.22),transparent_34%),linear-gradient(145deg,rgba(6,78,59,0.9)_0%,rgba(15,23,42,0.98)_68%,rgba(2,6,23,0.98)_100%)]',
  localink:
    'bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.24),transparent_32%),linear-gradient(145deg,rgba(2,6,23,0.96)_0%,rgba(15,23,42,0.98)_52%,rgba(6,78,59,0.6)_100%)]',
  clientflow:
    'bg-[radial-gradient(circle_at_top_right,rgba(192,132,252,0.2),transparent_32%),linear-gradient(145deg,rgba(15,23,42,0.98)_0%,rgba(6,78,59,0.52)_42%,rgba(2,6,23,0.98)_100%)]',
  campusloop:
    'bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.22),transparent_30%),linear-gradient(145deg,rgba(6,78,59,0.88)_0%,rgba(15,23,42,0.98)_62%,rgba(2,6,23,0.98)_100%)]',
}

const ProjectCard = ({ project, index }: Props) => {
  const screenshotTheme = screenshotThemes[project.id] ?? screenshotThemes.studyhub
  const { t } = useTranslation('project')
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>({
    threshold: 0.08,
    rootMargin: '0px 0px -12% 0px',
    minScrollY: 10,
  })

  return (
    <article
      ref={ref}
      data-visible={isVisible}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="theme-card reveal-on-scroll card-sheen flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-emerald-300/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-emerald-100"
    >
      <div className={`theme-project-shot relative min-h-52 overflow-hidden border-b border-white/10 p-5 ${screenshotTheme}`}>
        <div className="theme-project-shot-overlay absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.18)_100%)]" />
        <div className="relative flex h-full flex-col justify-between">

          <div className="grid gap-3">
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="theme-project-panel rounded-2xl border border-white/10 bg-slate-950/28 p-3 backdrop-blur-sm">
                <div className="h-3 w-20 rounded-full bg-emerald-200/28" />
                <div className="theme-project-block mt-3 h-20 rounded-xl border border-white/8 bg-white/[0.05]" />
              </div>
              <div className="grid gap-3">
                <div className="theme-project-panel rounded-2xl border border-white/10 bg-slate-950/28 p-3 backdrop-blur-sm">
                  <div className="theme-project-line h-3 w-12 rounded-full bg-white/20" />
                  <div className="theme-project-accent mt-3 h-7 rounded-lg bg-emerald-300/18" />
                </div>
                <div className="theme-project-panel rounded-2xl border border-white/10 bg-slate-950/28 p-3 backdrop-blur-sm">
                  <div className="theme-project-line h-3 w-16 rounded-full bg-white/20" />
                  <div className="theme-project-block mt-3 h-7 rounded-lg bg-white/[0.08]" />
                </div>
              </div>
            </div>

            <div>
              <p className="theme-kicker text-md font-semibold text-emerald-200/82">
                {project.platform} ({t(`section.category.${project.common.category}`)})
              </p>
              <p className="theme-heading mt-2 text-2xl tracking-[0.2em] font-semibold text-white">
                {project.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <p className="theme-body mt-3 text-sm leading-7 text-slate-200">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.common.skills.map((tech) => (
            <SkillBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.common.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="theme-primary-button inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/18 bg-[linear-gradient(135deg,rgba(6,95,70,0.88)_0%,rgba(5,150,105,0.84)_55%,rgba(4,120,87,0.9)_100%)] px-4 py-2.5 text-sm font-semibold text-emerald-50 shadow-[0_14px_34px_rgba(4,120,87,0.18)] ring-1 ring-emerald-300/8 transition hover:-translate-y-0.5 hover:border-emerald-300/28 hover:brightness-110"
          >
            <FaArrowUpRightFromSquare className="text-xs" />
            {t('section.actions.live')}
          </a>
          <a
            href={project.common.gitHubUrl}
            target="_blank"
            rel="noreferrer"
            className="theme-secondary-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.07]"
          >
            <FaGithub className="text-sm" />
            {t('section.actions.github')}
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
