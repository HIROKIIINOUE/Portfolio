import SkillsCard from './SkillsCard'
import { uiCopy } from '../../locales/ui'

const SkillsSection = () => {
  const locale = 'en'

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto mb-6 flex w-full max-w-3xl justify-center">
        <h2 className="text-center text-xs font-semibold tracking-[0.38em] text-emerald-200/78 uppercase sm:text-sm">
          {uiCopy.sections.skills[locale]}
        </h2>
      </div>
      <SkillsCard />
    </section>
  )
}

export default SkillsSection
