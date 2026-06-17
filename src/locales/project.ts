import type { SkillLabel } from "../components/SkillBadge/skillCatalog";
import idealGapImage from "../assets/projects/ideal-gap.png";
import tripCalculatorImage from "../assets/projects/trip-calculator.png";
import portfolioImage from "../assets/projects/portfolio.png";
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

const cicccGroupProjectSkills: SkillLabel[] = [
  "TypeScript",
  "React Native",
  "Expo",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "GitHub Actions",
  "i18n",
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
        "Voici le site web que vous consultez actuellement. Il s’agit de mon portfolio, dans lequel je présente mon parcours et mon expérience.J’ai cherché à créer un design simple, moderne et facile à lire. Le mode sombre est activé par défaut, mais les visiteurs peuvent passer au mode clair selon leurs préférences.Le site est également disponible en plusieurs langues, notamment en anglais, en japonais et en français, grâce à l’implémentation d’i18n.Merci de visiter mon portfolio et de prendre le temps de le parcourir !",
    },
  },
  tsunagaruLink: {
    common: {
      category: "team",
      image: "",
      liveUrl: "",
      gitHubUrl: "",
      skills: [...tsunagaruSkills],
    },
    en: {
      platform: "Web App",
      title: "Sales Link Project",
      description:
        "I joined the development of a sales application that connects with Slack and LinkedIn. My main contributions included UI refinements, Sentry integration, spam prevention using a honeypot, and some refactoring. This was my first full-scale group project, where I experienced practical workflows and the overall flow of team development. For security reasons, the project name shown above is a placeholder, and I have also chosen not to include a project image for the same reason.",
    },
    ja: {
      platform: "Webアプリ",
      title: "Sales Link Project",
      description:
        "Slack、LinkedInと接続可能な営業アプリケーションの開発に参加しました。主にUI修正、Sentry導入、Honey Potを導入したスパムメッセージ防止、一部リファクタリングなどを担当しました。自身初となる本格的なグループプロジェクトに参入し、実践的なワークフロー、チーム開発の流れを経験しました。セキュリティの関係上、上記プロジェクト名は仮の名前になります。また、プロジェクト画像の添付も同理由により控えております。",
    },
    fr: {
      platform: "Application Web",
      title: "Sales Link Project",
      description:
        "J'ai participé au développement d'une application commerciale connectée à Slack et LinkedIn. J'ai principalement pris en charge des ajustements d'interface, l'intégration de Sentry, la prévention des messages indésirables à l'aide d'un honeypot, ainsi qu'une partie du refactoring. Il s'agissait de mon premier véritable projet de groupe, au cours duquel j'ai découvert des workflows concrets et le déroulement du développement en équipe. Pour des raisons de sécurité, le nom du projet affiché ci-dessus est provisoire, et je n'ai pas non plus joint d'image du projet pour la même raison.",
    },
  },
  quotation: {
    common: {
      category: "team",
      image: "",
      liveUrl: "",
      gitHubUrl: "",
      skills: [...quotationSkills],
    },
    en: {
      platform: "Web Site",
      title: "Quotation Site",
      description:
        "I supported a friend who is an engineer on a quotation page project for a certain company. I mainly handled the UI design and application logic, and I was also involved in the database design. To achieve a simple and user-friendly interface, I used MUI to build a clean and consistent design system. For security reasons, the project name shown above is a placeholder, and I have also chosen not to include a project image for the same reason.",
    },
    ja: {
      platform: "Webサイト",
      title: "見積り作成サイト",
      description:
        "エンジニアの友人の「某企業様の見積もり作成ページ設立プロジェクト」の支援をしました。主にUIデザイン・ロジックを対応し、データベースデザイン設計にも携わりました。デザインではシンプルでユーザフレンドリーなUIを達成するため、MUIを活用しシンプルかつ統一されたデザインを構築しました。セキュリティの関係上、上記プロジェクト名は仮の名前になります。また、プロジェクト画像の添付も同理由により控えております。",
    },
    fr: {
      platform: "Site Web",
      title: "Site de devis",
      description:
        "J'ai apporté mon soutien à un ami ingénieur sur un projet de page de création de devis pour une certaine entreprise. J'ai principalement pris en charge le design de l'interface et la logique de l'application, tout en participant également à la conception de la base de données. Afin d'obtenir une interface simple et conviviale, j'ai utilisé MUI pour construire un design sobre et cohérent. Pour des raisons de sécurité, le nom du projet affiché ci-dessus est provisoire, et je n'ai pas non plus joint d'image du projet pour la même raison.",
    },
  },
  finalPJCICCC: {
    common: {
      category: "team",
      image: "",
      liveUrl: "",
      gitHubUrl: "",
      skills: [...cicccGroupProjectSkills],
    },
    en: {
      platform: "finalPJCICCC",
      title: "finalPJCICCC",
      description:
        "This is the final group project for the college I am currently attending. The project is still in progress, and we are building a mobile application. We plan to develop a cross-platform app with React Native and Expo for both iOS and Android that supports the entire travel experience with friends, from planning to the end of the trip. I will add more details here as the project progresses.",
    },
    ja: {
      platform: "finalPJCICCC",
      title: "finalPJCICCC",
      description:
        "現在私が通っているカレッジの最終グループプロジェクトになります。現在進行中でモバイルアプリを作成しています。React NativeとExpoを採用したクロスプラットフォームでiOS、Androidに対応した「友人との旅行の計画から終了までをサポートするアプリ」を開発予定です。プロジェクトが進み次第ここに詳細を記載します。",
    },
    fr: {
      platform: "finalPJCICCC",
      title: "finalPJCICCC",
      description:
        "Il s'agit du projet de groupe final du collège que je fréquente actuellement. Le projet est encore en cours, et nous développons une application mobile. Nous prévoyons de créer, avec React Native et Expo, une application cross-platform compatible iOS et Android qui accompagnera les voyages entre amis, de la planification jusqu'à la fin du séjour. J'ajouterai plus de détails ici à mesure que le projet avancera.",
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
