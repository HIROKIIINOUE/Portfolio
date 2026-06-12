import AboutMeCard from './AboutMeCard'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const AboutMeSection = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0,
    rootMargin: '0px 0px -20% 0px',
    minScrollY: 10,
  })

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div
        ref={ref}
        data-visible={isVisible}
        className="reveal-on-scroll mx-auto w-full max-w-3xl"
      >
        <div className="mb-6">
          <h2 className="text-xs font-semibold tracking-[0.38em] text-emerald-200/78 uppercase text-center sm:text-sm">
            About Me
          </h2>
        </div>
        <AboutMeCard isVisible={isVisible} />
      </div>
    </section>
  )
}

export default AboutMeSection
