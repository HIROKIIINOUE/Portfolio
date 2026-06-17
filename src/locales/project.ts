import type { SkillLabel } from "../components/SkillBadge/skillCatalog";
import idealGapImage from "../assets/projects/ideal-gap.png";
import tripCalculatorImage from "../assets/projects/trip-calculator.png";
import portfolioImage from "../assets/projects/portfolio.png";
import tsunagaruImage from "../assets/projects/tsunagaru.png";
import quotationImage from "../assets/projects/quotation.png";
import type { Locale } from "./index";

// ここで各プロジェクトのスキルセットを管理
const idealGapSkills: SkillLabel[] = [
  "TypeScript",
  "React Native",
  "Expo",
  "PostgreSQL",
  "Supabase",
  "GitHub Actions",
  "Sentry",
  "Revenue Cat",
  "i18n",
];
const tripCalculatorSkills: SkillLabel[] = [
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "i18n",
];
const portfolioSkills: SkillLabel[] = [
  "TypeScript",
  "React",
  "Tailwind CSS",
  "i18n",
];

const tsunagaruSkills: SkillLabel[] = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Supabase",
  "Docker",
  "Tailwind CSS",
  "Sentry",
  "Codex",
];
const quotationSkills: SkillLabel[] = [
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
];

const campusLoopSkills: SkillLabel[] = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
];

export const projectSectionCopy = {
  toggle: {
    personal: {
      en: "Personal Projects",
      ja: "個人プロジェクト",
      fr: "Projets personnels",
    },
    team: {
      en: "Group Projects",
      ja: "グループプロジェクト",
      fr: "Projets de groupe",
    },
  },
  category: {
    personal: {
      en: "Personal",
      ja: "個人開発",
      fr: "Personnel",
    },
    team: {
      en: "Team",
      ja: "チーム開発",
      fr: "Équipe",
    },
  },
  actions: {
    live: {
      en: "Link",
      ja: "リンク",
      fr: "Link",
    },
    github: {
      en: "GitHub",
      ja: "GitHub",
      fr: "GitHub",
    },
  },
  aria: {
    group: {
      en: "Project category",
      ja: "プロジェクトカテゴリ",
      fr: "Catégorie de projet",
    },
    personal: {
      en: "Show personal projects",
      ja: "個人プロジェクトを表示",
      fr: "Afficher les projets personnels",
    },
    team: {
      en: "Show group projects",
      ja: "グループプロジェクトを表示",
      fr: "Afficher les projets de groupe",
    },
  },
} as const;

export const projectCatalog = {
  idealGap: {
    common: {
      category: "personal",
      image: idealGapImage,
      liveUrl: "https://apps.apple.com/app/id6759301711",
      gitHubUrl: "https://github.com/HIROKIIINOUE/Ideal_Gap",
      skills: [...idealGapSkills],
    },
    en: {
      platform: "Mobile App",
      title: "Ideal Gap",
      description:
        "Ideal Gap helps users build habits that move them closer to their ideal selves by making consistent effort visible and maximizing their concentration. I handled the full process alone, from requirements definition and database design to implementation and release. The app is built with React Native as a cross-platform product for both iOS and Android. The iOS version is already released, and the Android version is close to launch.",
    },
    ja: {
      platform: "モバイルアプリ",
      title: "Ideal Gap",
      description:
        "本アプリはユーザが理想の自分に近づくために努力を習慣化させることを助け、タスクへの集中力上昇と努力の見える化を実現するアプリです。要件定義やデータベース設計、実装からリリースまで一人で行いました。本プロジェクトはReact Nativeを採用、iOS/Android両方で使用できるクロスプラットフォーム開発になります。iOS版は既にリリース済み、Android版はリリース間近です。",
    },
    fr: {
      platform: "Application Mobile",
      title: "Ideal Gap",
      description:
        "Ideal Gap aide les utilisateurs à transformer leurs efforts en habitudes pour se rapprocher de la personne qu'ils veulent devenir, tout en rendant leur progression plus visible. J'ai géré seul l'ensemble du projet, de la définition des besoins et de la conception de la base de données jusqu'à l'implémentation et la mise en ligne. L'application est développée avec React Native pour iOS et Android. La version iOS est déjà publiée et la version Android approche de sa sortie.",
    },
  },
  tripCalculator: {
    common: {
      category: "personal",
      image: tripCalculatorImage,
      liveUrl: "https://trip-calculator-jrio.onrender.com/",
      gitHubUrl: "https://github.com/HIROKIIINOUE/TripCalculator",
      skills: [...tripCalculatorSkills],
    },
    en: {
      platform: "Web App",
      title: "Trip Calculator",
      description:
        "Trip Calculator fetches timely exchange rates from an external API so travelers can manage expenses abroad in their home currency. I handled the project end to end on my own, including requirements definition, database design, implementation, and release. On the backend I used JWT authentication, bcrypt, zxcvbn, and zod to keep data handling secure. On the frontend I focused on a simple, user-friendly design with an intuitive UX.",
    },
    ja: {
      platform: "Webアプリ",
      title: "Trip Calculator",
      description:
        "外部APIよりタイムリーな外貨レートを取得し、海外での旅行時でも自国の通貨で旅行費を管理できるアプリです。要件定義やデータベース設計、実装からリリースまで一人で行いました。バックエンドではJWT認証、becrypt、zxcvbn、zodを使用し安全にデータが管理できるように設計し、フロントではシンプルでユーザフレンドリーなデザイン、直感的に操作できる高いUXを意識して作成しました。",
    },
    fr: {
      platform: "Application Web",
      title: "Trip Calculator",
      description:
        "Trip Calculator récupère des taux de change récents via une API externe afin de permettre aux voyageurs de gérer leurs dépenses à l'étranger dans leur devise d'origine. J'ai pris en charge seul tout le projet, de la définition des besoins et de la conception de la base de données jusqu'à l'implémentation et la mise en ligne. Côté backend, j'ai utilisé JWT, bcrypt, zxcvbn et zod pour sécuriser la gestion des données. Côté frontend, j'ai visé un design simple, accessible et une expérience utilisateur intuitive.",
    },
  },
  portfolio: {
    common: {
      category: "personal",
      image: portfolioImage,
      liveUrl: "portfolio-five-pied-61.vercel.app/",
      gitHubUrl: "https://github.com/HIROKIIINOUE/Portfolio",
      skills: [...portfolioSkills],
    },
    en: {
      platform: "Web Site",
      title: "Portfolio",
      description:
        "This is the website you are viewing right now. It is my portfolio, including an introduction to my background. I aimed for a simple, easy-to-read, and modern design. Night mode is the default, but viewers can switch to light mode based on their preference. It also supports multiple languages, including English, Japanese, and French, implemented with i18n. Thank you for visiting my portfolio and taking the time to look through it!",
    },
    ja: {
      platform: "Webサイト",
      title: "ポートフォリオ",
      description:
        "現在ご覧になってる本サイトです。私の自己紹介を含めたポートフォリオになります。シンプルで見やすく、かつモダンなデザインを意識しました。ナイトモードをデフォルトとしていますがユーザの好みでライトモードへの変更も可能です。また、i18nを使用し英語、日本語、フランス語と多言語に対応しております。このポートフォリオまで辿り着き、ご覧になったくださりありがとうございます！",
    },
    fr: {
      platform: "Site Web",
      title: "Portfolio",
      description:
        "Il s'agit du site web que vous consultez en ce moment. C'est mon portfolio, avec une présentation de mon parcours. J'ai cherché à créer un design simple, moderne et facile à consulter. Le mode nuit est activé par défaut, mais les visiteurs peuvent passer au mode clair selon leurs préférences. Le site prend également en charge plusieurs langues, dont l'anglais, le japonais et le français, grâce à i18n. Merci d'avoir visité mon portfolio et d'avoir pris le temps de le parcourir !",
    },
  },
  tsunagaruLink: {
    common: {
      category: "team",
      image: tsunagaruImage,
      liveUrl: "",
      gitHubUrl: "",
      skills: [...tsunagaruSkills],
    },
    en: {
      platform: "Web App",
      title: "Tsunagaru Link Project",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
    ja: {
      platform: "Webアプリ",
      title: "Tsunagaru Link Project",
      description:
        "Slack、LinkedInと接続可能な営業アプリケーションの開発に参加しました。主にUI修正、Sentry導入、Honey Potを導入したスパムメッセージ防止、一部リファクタリングなどを担当しました。初となる本格的なグループプロジェクトに参入し、リアルなワークフローに触れ、実際のプロジェクトの難しさを経験しました。",
    },
    fr: {
      platform: "Application Web",
      title: "Tsunagaru Link Project",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
  },
  quotation: {
    common: {
      category: "team",
      image: quotationImage,
      liveUrl: "",
      gitHubUrl: "",
      skills: [...quotationSkills],
    },
    en: {
      platform: "Web Site",
      title: "Quotation Site",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
    ja: {
      platform: "Webサイト",
      title: "某企業の見積もり作成サイト",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
    fr: {
      platform: "Site Web",
      title: "LATER",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
  },
  finalPJCICCC: {
    common: {
      category: "team",
      image: "",
      liveUrl: "https://example.com/campusloop",
      gitHubUrl: "https://github.com/example/campusloop",
      skills: [...campusLoopSkills],
    },
    en: {
      platform: "finalPJCICCC",
      title: "finalPJCICCC",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
    ja: {
      platform: "finalPJCICCC",
      title: "finalPJCICCC",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
    fr: {
      platform: "finalPJCICCC",
      title: "finalPJCICCC",
      description:
        "(Translate later)Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolor nobis nulla quam harum itaque quibusdam, unde eius, quis, impedit dolore. Veniam aperiam sapiente asperiores dignissimos fugit beatae dolorum explicabo!",
    },
  },
} as const;

type ProjectCatalog = typeof projectCatalog;
type ProjectEntry = ProjectCatalog[keyof ProjectCatalog];
type ProjectLocaleContent = ProjectEntry[Locale];

export type Project = {
  id: string;
  common: ProjectEntry["common"];
} & ProjectLocaleContent;

export const getProjects = (locale: Locale): Project[] =>
  Object.entries(projectCatalog).map(([id, project]) => ({
    id,
    common: project.common,
    ...project[locale],
  }));
