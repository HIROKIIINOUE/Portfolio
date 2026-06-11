import { useState } from 'react'
import { FaEnvelope, FaMoon } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { IoLanguage } from 'react-icons/io5'

const navItems = ['Top', 'Skill', 'About Me', 'Project'] as const

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(6,78,59,0.78)_50%,rgba(2,6,23,0.94)_100%)] px-3 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.34)] ring-1 ring-emerald-300/10 backdrop-blur-xl opacity-90">
          <div className="flex items-center justify-start gap-3 md:flex-1 md:justify-between">
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200 sm:hidden"
            >
              {isMenuOpen ? <HiX className="text-[1.35rem]" /> : <HiMenuAlt3 className="text-[1.35rem]" />}
            </button>

            <nav className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto sm:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium tracking-[0.08em] text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-emerald-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Email"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
            >
              <FaEnvelope className="text-base" />
            </button>
            <button
              type="button"
              aria-label="Switch language"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
            >
              <IoLanguage className="text-lg" />
            </button>
            <button
              type="button"
              aria-label="Toggle theme"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
            >
              <FaMoon className="text-base" />
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav className="mt-3 grid gap-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(6,78,59,0.82)_50%,rgba(2,6,23,0.98)_100%)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] ring-1 ring-emerald-300/10 backdrop-blur-xl md:hidden">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="cursor-pointer rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-sm font-medium tracking-[0.08em] text-slate-100 transition hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
              >
                {item}
              </button>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}

export default Header
