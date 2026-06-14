import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { aboutMeEntries } from './locales/aboutMe'
import { headerCopy } from './locales/header'
import { fallbackLocale, supportedLocales, type Locale } from './locales'
import { heroCopy } from './locales/hero'
import { projectCatalog, projectSectionCopy } from './locales/project'
import type { Resource } from 'i18next'

const buildHeaderResources = (locale: Locale) => ({
  nav: {
    landing: headerCopy.nav.landing[locale],
    skills: headerCopy.nav.skills[locale],
    about: headerCopy.nav.about[locale],
    projects: headerCopy.nav.projects[locale],
  },
  aria: {
    openNavigation: headerCopy.aria.openNavigation[locale],
    closeNavigation: headerCopy.aria.closeNavigation[locale],
    email: headerCopy.aria.email[locale],
    switchLanguage: headerCopy.aria.switchLanguage[locale],
    toggleTheme: headerCopy.aria.toggleTheme[locale],
  },
  languageOptions: {
    en: headerCopy.languageOptions.en,
    ja: headerCopy.languageOptions.ja,
    fr: headerCopy.languageOptions.fr,
  },
})

const buildHeroResources = (locale: Locale) => ({
  heading: heroCopy.heading[locale],
  description: heroCopy.description[locale],
  cta: {
    primary: heroCopy.cta.primary[locale],
    resume: heroCopy.cta.resume[locale],
    secondary: heroCopy.cta.secondary[locale],
  },
})

const buildAboutMeResources = (locale: Locale) => ({
  entries: aboutMeEntries.map((entry) => ({
    code: entry.code,
    period: entry.period[locale],
    place: entry.place[locale],
    summary: entry.summary[locale],
  })),
})

const buildProjectResources = (locale: Locale) => ({
  section: {
    toggle: {
      personal: projectSectionCopy.toggle.personal[locale],
      team: projectSectionCopy.toggle.team[locale],
    },
    category: {
      personal: projectSectionCopy.category.personal[locale],
      team: projectSectionCopy.category.team[locale],
    },
    actions: {
      live: projectSectionCopy.actions.live[locale],
      github: projectSectionCopy.actions.github[locale],
    },
    aria: {
      group: projectSectionCopy.aria.group[locale],
      personal: projectSectionCopy.aria.personal[locale],
      team: projectSectionCopy.aria.team[locale],
    },
  },
  catalog: Object.fromEntries(
    Object.entries(projectCatalog).map(([id, project]) => [
      id,
      {
        ...project[locale],
      },
    ]),
  ),
})

const resources = supportedLocales.reduce((acc, locale) => {
  acc[locale] = {
    header: buildHeaderResources(locale),
    hero: buildHeroResources(locale),
    aboutMe: buildAboutMeResources(locale),
    project: buildProjectResources(locale),
  }

  return acc
}, {} as Resource)

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: fallbackLocale,
      supportedLngs: [...supportedLocales],
      ns: ['header', 'hero', 'aboutMe', 'project'],
      defaultNS: 'header',
      nonExplicitSupportedLngs: true,
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
      compatibilityJSON: 'v4',
      returnNull: false,
    })
}

export type AppResource = typeof resources

export const isSupportedLanguage = (
  lang?: string | null,
): lang is Locale => !!lang && supportedLocales.includes(lang as Locale)

export default i18n
