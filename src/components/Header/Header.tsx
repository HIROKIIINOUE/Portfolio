import { useState } from 'react'
import { FaEnvelope, FaMoon, FaSun } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import type { Theme } from '../../App'
import { headerLocales } from '../../locales/header'
import { MdLanguage } from 'react-icons/md'

type DropdownState = 'close' | 'navigation' | 'language'

type Props = {
  theme: Theme
  onToggleTheme: () => void
}

const Header = ({ theme, onToggleTheme }: Props) => {
  const [dropdownState, setDropdownState] = useState<DropdownState>('close')
  const { t, i18n } = useTranslation('header')
  const navItems = [
    { label: t('nav.landing'), href: '#landing' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
  ] as const

  const handleNavigate = (href: (typeof navItems)[number]['href']) => {
    const target = document.querySelector(href)

    if (!(target instanceof HTMLElement)) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setDropdownState('close')
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      {dropdownState !== 'close' ? (
        <div
          className="theme-backdrop fixed inset-0 z-0 bg-slate-950/45 backdrop-blur-sm"
          onClick={() => setDropdownState('close')}
        />
      ) : null}

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <div className="theme-header-shell rounded-full border-2 border-emerald-300/50 shadow-[0_0_28px_rgba(16,185,129,0.26),0_12px_36px_rgba(2,12,18,0.42)]">
          <div className="theme-header-panel flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.92)_0%,rgba(6,78,59,0.78)_50%,rgba(2,6,23,0.94)_100%)] px-3 py-3 ring-1 ring-emerald-300/10 backdrop-blur-xl">
            <div className="flex items-center justify-start gap-3 md:flex-1 md:justify-between">
              <button
                type="button"
                aria-label={
                  dropdownState === 'navigation'
                    ? t('aria.closeNavigation')
                    : t('aria.openNavigation')
                }
                aria-expanded={dropdownState === 'navigation'}
                onClick={() =>
                  setDropdownState((current) =>
                    current === 'navigation' ? 'close' : 'navigation'
                  )
                }
                className="theme-header-icon-button flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200 sm:hidden"
              >
                {dropdownState === 'navigation' ? <HiX className="text-[1.35rem]" /> : <HiMenuAlt3 className="text-[1.35rem]" />}
              </button>

              <nav className="hidden min-w-0 flex-1 items-center gap-1 overflow-x-auto sm:flex">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    className="theme-nav-button shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium tracking-[0.08em] text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-emerald-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex shrink-0 items-center justify-end gap-2">
              <a
                href="mailto:tyynh.hiroki@gmail.com?subject=From%20portfolio%20site"
                aria-label={t('aria.email')}
                className="theme-header-icon-button flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
              >
                <FaEnvelope className="text-base" />
              </a>
              <div className="relative">
                <button
                  type="button"
                  aria-label={t('aria.switchLanguage')}
                  aria-expanded={dropdownState === 'language'}
                  onClick={() =>
                    setDropdownState((current) =>
                      current === 'language' ? 'close' : 'language'
                    )
                  }
                  className="theme-header-icon-button flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
                >
                  <MdLanguage className="text-lg" />
                </button>


              </div>
              <button
                type="button"
                aria-label={t('aria.toggleTheme')}
                onClick={onToggleTheme}
                className="theme-header-icon-button flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
              >
                {theme === 'dark' ? (
                  <FaMoon className="text-base" />
                ) : (
                  <FaSun className="text-base" />
                )}
              </button>
            </div>
          </div>
        </div>

        {dropdownState === 'navigation' ? (
          <div className="theme-dropdown-shell z-10 mt-3 rounded-[1.75rem] border border-emerald-300/25 md:hidden">
            <nav className="theme-dropdown-panel grid gap-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(6,78,59,0.82)_50%,rgba(2,6,23,0.98)_100%)] p-3 ring-1 ring-emerald-300/10 backdrop-blur-xl">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className="theme-dropdown-item cursor-pointer rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-sm font-medium tracking-[0.08em] text-slate-100 transition hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        ) : dropdownState === 'language' ? (
          <div className="theme-dropdown-shell absolute top-[calc(100%+0.75rem)] right-0 z-10 w-44 rounded-[1.75rem] border border-emerald-300/25 shadow-[0_0_24px_rgba(16,185,129,0.22),0_12px_32px_rgba(2,12,18,0.4)]">
            <nav className="theme-dropdown-panel grid gap-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.96)_0%,rgba(6,78,59,0.82)_50%,rgba(2,6,23,0.98)_100%)] p-3 ring-1 ring-emerald-300/10 backdrop-blur-xl">
              {headerLocales.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => {
                    void i18n.changeLanguage(language)
                    setDropdownState('close')
                  }}
                  className="theme-dropdown-item cursor-pointer rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-sm font-medium tracking-[0.08em] text-slate-100 transition hover:border-emerald-300/35 hover:bg-emerald-400/[0.08] hover:text-emerald-200"
                >
                  {t(`languageOptions.${language}`)}
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
