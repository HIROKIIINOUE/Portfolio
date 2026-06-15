import HeroCard from './HeroCard'
import ScrollIndicator from './ScrollIndicator'

const HeroSection = () => {
  return (
    <section
      id="landing"
      className="relative scroll-mt-28 overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36"
    >
      <div className="theme-page-gradient absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(6,95,70,0.28),_transparent_48%),linear-gradient(180deg,_rgba(3,7,18,0.58)_0%,_rgba(4,17,11,0.18)_100%)]" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">
        <HeroCard />
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default HeroSection
