import { useState } from 'react'
import { FaEnvelope, FaMoon } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { IoLanguage } from 'react-icons/io5'

const navItems = ['Top', 'Skill', 'About Me', 'Project'] as const
const languageOptions = ['English', 'Japanese', 'French'] as const
type DropdownState = 'close' | 'navigation' | 'language'

const Header = () => {
  const [dropdownState, setDropdownState] = useState<DropdownState>('close')

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      {dropdownState !== 'close' ? (
        <div
          className="fixed inset-0 z-0 bg-slate-950/45 backdrop-blur-sm"
          onClick={() => setDropdownState('close')}
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <div className="rounded-full border-2 border-emerald-300/50 shadow-[0_0_28px_rgba(16,185,129,0.26),0_12px_36px_rgba(2,12,18,0.42)]">
          <div className="flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(6,78,59,0.78)_50%,rgba(2,6,23,0.94)_100%)] px-3 py-3 ring-1 ring-emerald-300/10 backdrop-blur-xl">
            <div className="flex items-center justify-start gap-3 md:flex-1 md:justify-between">
              <button
                type="button"
                aria-label={dropdownState === 'navigation' ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={dropdownState === 'navigation'}
                onClick={() =>
                  setDropdownState((current) =>
                    current === 'navigation' ? 'close' : 'navigation'
                  )
                }
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200 sm:hidden"
              >
                {dropdownState === 'navigation' ? <HiX className="text-[1.35rem]" /> : <HiMenuAlt3 className="text-[1.35rem]" />}
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
              <div className="relative">
                <button
                  type="button"
                  aria-label="Switch language"
                  aria-expanded={dropdownState === 'language'}
                  onClick={() =>
                    setDropdownState((current) =>
                      current === 'language' ? 'close' : 'language'
                    )
                  }
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
                >
                  <IoLanguage className="text-lg" />
                </button>


              </div>
              <button
                type="button"
                aria-label="Toggle theme"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
              >
                <FaMoon className="text-base" />
              </button>
            </div>
          </div>
        </div>

        {dropdownState === 'navigation' ? (
          <div className="z-10 mt-3 rounded-[1.75rem] border border-emerald-300/25 md:hidden">
            <nav className="grid gap-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(6,78,59,0.82)_50%,rgba(2,6,23,0.98)_100%)] p-3 ring-1 ring-emerald-300/10 backdrop-blur-xl">
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
          </div>
        ) : dropdownState === 'language' ? (
          <div className="absolute top-[calc(100%+0.75rem)] right-0 z-10 w-44 rounded-[1.75rem] border border-emerald-300/25 shadow-[0_0_24px_rgba(16,185,129,0.22),0_12px_32px_rgba(2,12,18,0.4)]">
            <nav className="grid gap-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(6,78,59,0.82)_50%,rgba(2,6,23,0.98)_100%)] p-3 ring-1 ring-emerald-300/10 backdrop-blur-xl">
              {languageOptions.map((language) => (
                <button
                  key={language}
                  type="button"
                  className="cursor-pointer rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-sm font-medium tracking-[0.08em] text-slate-100 transition hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
                >
                  {language}
                </button>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Header
