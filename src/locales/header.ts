import type { Locale } from "./index";

export const headerLocales: Locale[] = ["en", "ja", "fr"];

export const headerCopy = {
  nav: {
    landing: { en: "Top", ja: "トップ", fr: "Accueil" },
    skills: { en: "Skill", ja: "スキル", fr: "Competences" },
    about: { en: "About Me", ja: "自己紹介", fr: "Moi" },
    projects: { en: "Project", ja: "プロジェクト", fr: "Projets" },
  },
  aria: {
    openNavigation: {
      en: "Open navigation menu",
      ja: "ナビゲーションメニューを開く",
      fr: "Ouvrir le menu de navigation",
    },
    closeNavigation: {
      en: "Close navigation menu",
      ja: "ナビゲーションメニューを閉じる",
      fr: "Fermer le menu de navigation",
    },
    email: {
      en: "Email",
      ja: "メール",
      fr: "Email",
    },
    switchLanguage: {
      en: "Switch language",
      ja: "言語を切り替える",
      fr: "Changer de langue",
    },
    toggleTheme: {
      en: "Toggle theme",
      ja: "テーマを切り替える",
      fr: "Changer le theme",
    },
  },
  languageOptions: {
    en: "English",
    ja: "日本語",
    fr: "Français",
  },
} as const;
