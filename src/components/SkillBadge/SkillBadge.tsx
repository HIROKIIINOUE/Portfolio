import { renderSkillIcon } from './skillCatalog'
import type { SkillLabel } from './skillCatalog'

type Props = {
  label: SkillLabel
}

const SkillBadge = ({ label }: Props) => {
  return (
    <div className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] px-3.5 py-2 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08]">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/12 text-xs text-emerald-300 shadow-[0_8px_20px_rgba(16,185,129,0.14)]">
        {renderSkillIcon(label)}
      </span>
      <span className="font-medium text-slate-200">{label}</span>
    </div>
  )
}

export default SkillBadge
