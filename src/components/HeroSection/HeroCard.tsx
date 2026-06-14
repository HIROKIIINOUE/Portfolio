import { uiCopy } from '../../locales/ui'
import { FaDownload, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const HeroCard = () => {
  const locale = 'en'
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -5% 0px',
  })

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className="theme-card reveal-on-scroll card-sheen mx-auto w-full max-w-3xl rounded-[2rem] border-2 border-emerald-300/30 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.14),transparent_30%),linear-gradient(145deg,rgba(15,23,42,0.96)_0%,rgba(6,78,59,0.52)_42%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_32px_120px_rgba(0,0,0,0.34)] ring-1 ring-white/6 backdrop-blur-xl sm:p-8"
    >
      <div className="space-y-4">
        <h1 className="theme-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Hello, I&apos;m {uiCopy.hero.name}
        </h1>
        <p className="theme-body max-w-2xl text-lg text-slate-200 sm:text-xl">
          Web Development Co-op student experienced in building and deploying production-ready full-stack
          web and mobile applications
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href="#projects"
          className="theme-primary-button inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/18 bg-[linear-gradient(135deg,rgba(6,95,70,0.88)_0%,rgba(5,150,105,0.84)_55%,rgba(4,120,87,0.9)_100%)] px-5 py-3 text-sm font-semibold text-emerald-50 shadow-[0_14px_34px_rgba(4,120,87,0.18)] ring-1 ring-emerald-300/8 transition hover:-translate-y-0.5 hover:border-emerald-300/28 hover:brightness-110"
        >
          <FaLaptopCode className="text-sm" />
          {uiCopy.hero.primaryCta[locale]}
        </a>
        <a
          href="/resume/resume-20260610.pdf"
          download
          className="theme-secondary-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.07]"
        >
          <FaDownload className="text-xs" />
          {uiCopy.hero.resumeCta[locale]}
        </a>
        <a
          href="mailto:tyynh.hiroki@gmail.com?subject=From%20your%20portfolio"
          className="theme-secondary-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.06]"
        >
          <MdEmail className="text-base" />
          {uiCopy.hero.secondaryCta[locale]}
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
        <a
          href="https://github.com/HIROKIIINOUE"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="theme-social-button inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100 shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/[0.1] hover:text-emerald-200"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hiroki-inoue"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="theme-social-button inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100 shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/[0.1] hover:text-emerald-200"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default HeroCard
