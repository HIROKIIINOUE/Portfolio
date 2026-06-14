import AboutMeCard from './AboutMeCard'

const AboutMeSection = () => {
  return (
    <section id="about" className="scroll-mt-28 px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6">
          <h2 className="theme-section-title text-sm font-semibold tracking-[0.38em] text-emerald-200/78 uppercase text-center sm:text-2xl">
            About Me
          </h2>
        </div>
        <AboutMeCard />
      </div>
    </section>
  )
}

export default AboutMeSection
