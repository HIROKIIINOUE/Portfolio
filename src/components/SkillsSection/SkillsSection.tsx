import SkillsCard from './SkillsCard'

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-28 px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto mb-6 flex w-full max-w-3xl justify-center">
        <h2 className="theme-section-title text-center text-sm font-semibold tracking-[0.38em] text-emerald-200/78 uppercase sm:text-2xl">
          Skills
        </h2>
      </div>
      <SkillsCard />
    </section>
  )
}

export default SkillsSection
