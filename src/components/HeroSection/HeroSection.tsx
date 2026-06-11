import Bio from './Bio'
import ScrollIndicator from './ScrollIndicator'

const HeroSection = () => {
  return (
    <section
      id="landing"
      className="relative overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_#030712_0%,_#04110b_100%)]" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6">
        <Bio />
        <ScrollIndicator />
      </div>
    </section>
  )
}

export default HeroSection
