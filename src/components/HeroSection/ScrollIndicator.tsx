import { FaArrowCircleDown } from 'react-icons/fa'

const ScrollIndicator = () => {
  return (
    <div
      aria-hidden="true"
      className="theme-scroll-indicator mt-8 inline-flex w-fit items-center gap-4 self-center rounded-full border border-emerald-300/30 bg-[linear-gradient(135deg,rgba(5,150,105,0.18)_0%,rgba(15,23,42,0.85)_45%,rgba(6,78,59,0.4)_100%)] px-6 py-3.5 text-[0.8rem] font-semibold tracking-[0.3em] text-emerald-100 uppercase shadow-[0_18px_50px_rgba(16,185,129,0.16)] ring-1 ring-emerald-300/12 select-none"
    >
      <span className="theme-kicker text-emerald-200/80">Scroll</span>
      <span className="theme-scroll-pill flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200/20 bg-emerald-300/10 text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <FaArrowCircleDown className="theme-scroll-arrow animate-[scroll-indicator-bounce_1.4s_ease-in-out_infinite] text-2xl drop-shadow-[0_0_12px_rgba(110,231,183,0.45)]" />
      </span>
    </div>
  )
}

export default ScrollIndicator
