// 次回ココから
// プロジェクトカードの編集と完成
// 技術スタックはアイコンを共通コンポーネント化してスキルセクションと共用できないか

import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import SkillBadge from '../SkillBadge/SkillBadge'
import type { Project } from '../../locales/project'

type Props = {
  project: Project
  index: number
}

const screenshotTheme =
  'bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.26),transparent_36%),linear-gradient(145deg,rgba(6,78,59,0.92)_0%,rgba(15,23,42,0.98)_72%,rgba(2,6,23,0.98)_100%)]'

const ProjectCard = ({ project, index }: Props) => {
  const { t } = useTranslation('project')
  const hasImage = project.common.image.length > 0
  const hasLiveUrl = project.common.liveUrl.length > 0
  const hasGitHubUrl = project.common.gitHubUrl.length > 0
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
      className="theme-card reveal-on-scroll card-sheen flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-emerald-300/30 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_30%),linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(6,78,59,0.52)_42%,rgba(15,23,42,0.98)_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.26)] ring-1 ring-white/6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-100"
    >
      <div
        className={`theme-project-shot relative min-h-52 overflow-hidden border-b border-white/10 ${hasImage ? 'bg-slate-950' : screenshotTheme}`}
      >
        {hasImage ? (
          <img
            src={project.common.image}
            alt={project.title}
            className="absolute rounded-t-3xl inset-0 h-full w-full border-4 border-emerald-300 object-cover"
          />
        ) : null}
        <div className="theme-project-shot-overlay absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.22)_40%,rgba(2,6,23,0.88)_100%)]" />
        <div className="relative flex h-full flex-col justify-between">
          {!hasImage ? (
            <div className="mt-auto px-5 pb-5 pt-24">
              <p className="theme-kicker text-sm font-semibold text-emerald-200/82 drop-shadow-[0_2px_8px_rgba(2,6,23,0.8)]">
                {project.platform} ({t(`section.category.${project.common.category}`)})
              </p>
              <p className="theme-heading mt-2 text-2xl font-semibold tracking-[0.18em] text-white drop-shadow-[0_4px_18px_rgba(2,6,23,0.92)]">
                {project.title}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {hasImage ? (
          <div>
            <p className="theme-kicker text-sm font-semibold text-emerald-200/82">
              {project.platform} ({t(`section.category.${project.common.category}`)})
            </p>
            <p className="theme-heading mt-2 text-2xl font-semibold tracking-[0.18em] text-white">
              {project.title}
            </p>
          </div>
        ) : null}
        <div>
          <p className={`theme-body text-sm leading-7 text-slate-200 ${hasImage ? 'mt-4' : 'mt-3'}`}>
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.common.skills.map((tech) => (
            <SkillBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {hasLiveUrl ? (
            <a
              href={project.common.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="theme-primary-button inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/18 bg-[linear-gradient(135deg,rgba(6,95,70,0.88)_0%,rgba(5,150,105,0.84)_55%,rgba(4,120,87,0.9)_100%)] px-4 py-2.5 text-sm font-semibold text-emerald-50 shadow-[0_14px_34px_rgba(4,120,87,0.18)] ring-1 ring-emerald-300/8 transition hover:-translate-y-0.5 hover:border-emerald-300/28 hover:brightness-110"
            >
              <FaArrowUpRightFromSquare className="text-xs" />
              {t('section.actions.live')}
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="theme-primary-button inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-950/30 px-4 py-2.5 text-sm font-semibold text-emerald-100/45 opacity-60 shadow-[0_14px_34px_rgba(4,120,87,0.08)]"
            >
              <FaArrowUpRightFromSquare className="text-xs" />
              {t('section.actions.live')}
            </span>
          )}
          {hasGitHubUrl ? (
            <a
              href={project.common.gitHubUrl}
              target="_blank"
              rel="noreferrer"
              className="theme-secondary-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.07]"
            >
              <FaGithub className="text-sm" />
              {t('section.actions.github')}
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="theme-secondary-button inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-4 py-2.5 text-sm font-semibold text-slate-100/45 opacity-60"
            >
              <FaGithub className="text-sm" />
              {t('section.actions.github')}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
