import { skills } from '../../locales/skills'
import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSentry,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const iconMap: Record<string, IconType> = {
  typescript: SiTypescript,
  react: SiReact,
  'react-native': SiReact,
  next: SiNextdotjs,
  node: SiNodedotjs,
  express: SiExpress,
  'postgres-sql': SiPostgresql,
  prisma: SiPrisma,
  supabase: SiSupabase,
  firebase: SiFirebase,
  mongo: SiMongodb,
  docker: SiDocker,
  'github-action': SiGithubactions,
  expo: SiExpo,
  sentry: SiSentry,
  tailwind: SiTailwindcss,
}

const SkillsCard = () => {
  const locale = 'en'
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0,
    rootMargin: '0px 0px -25% 0px',
    minScrollY: 10,
  })
  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="reveal-on-scroll card-sheen mx-auto w-full max-w-3xl rounded-[2rem] border-2 border-emerald-300/30 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_26%),linear-gradient(145deg,rgba(2,6,23,0.94)_0%,rgba(15,23,42,0.96)_55%,rgba(6,78,59,0.38)_100%)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] ring-1 ring-white/6 backdrop-blur-xl"
    >
      <ul className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.id] ?? FaCode

          return (
            <li key={`${skill.id}-${index}`}>
              <div className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] px-3.5 py-2 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08]">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/12 text-xs text-emerald-300 shadow-[0_8px_20px_rgba(16,185,129,0.14)]">
                  <Icon />
                </span>
                <span className="font-medium text-slate-200">
                  {skill.label[locale]}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillsCard