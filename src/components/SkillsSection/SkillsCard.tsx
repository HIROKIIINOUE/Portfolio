import useRevealOnScroll from '../../hooks/useRevealOnScroll'
import SkillBadge from '../SkillBadge/SkillBadge'
import { skillLabels } from '../SkillBadge/skillCatalog'

const SkillsCard = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0,
    rootMargin: '0px 0px -25% 0px',
    minScrollY: 10,
  })
  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="theme-card reveal-on-scroll card-sheen mx-auto w-full max-w-3xl rounded-[2rem] border-2 border-emerald-300/30 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_30%),linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(6,78,59,0.52)_42%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] ring-1 ring-white/6 backdrop-blur-xl"
    >
      <ul className="flex flex-wrap gap-2.5">
        {skillLabels.map((label) => (
          <li key={label}>
            <SkillBadge label={label} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsCard
