import type { SkillLabel } from "../components/SkillBadge/skillCatalog";
import idealGapImage from "../assets/projects/ideal-gap.png";
import tripCalculatorImage from "../assets/projects/trip-calculator.png";
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
const locaLinkSkills: SkillLabel[] = ["React", "Node.js", "Express", "MongoDB"];
const clientFlowSkills: SkillLabel[] = ["React", "TypeScript", "Supabase"];
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
      fr: "Equipe",
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
      fr: "Categorie de projet",
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
        "Ideal Gap aide les utilisateurs a transformer leurs efforts en habitudes pour se rapprocher de la personne qu ils veulent devenir, tout en rendant leur progression plus visible. J ai gere seul l ensemble du projet, de la definition des besoins et de la conception de la base de donnees jusqu a l implementation et la mise en ligne. L application est developpee avec React Native pour iOS et Android. La version iOS est deja publiee et la version Android approche de sa sortie.",
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
        "Trip Calculator recupere des taux de change recents via une API externe afin de permettre aux voyageurs de gerer leurs depenses a l etranger dans leur devise d origine. J ai pris en charge seul tout le projet, de la definition des besoins et de la conception de la base de donnees jusqu a l implementation et la mise en ligne. Cote backend, j ai utilise JWT, bcrypt, zxcvbn et zod pour securiser la gestion des donnees. Cote frontend, j ai vise un design simple, accessible et une experience utilisateur intuitive.",
    },
  },
  localink: {
    common: {
      category: "team",
      image: "",
      liveUrl: "https://example.com/localink",
      gitHubUrl: "https://github.com/example/localink",
      skills: [...locaLinkSkills],
    },
    en: {
      platform: "Web App",
      title: "LocaLink",
      description:
        "LocaLink was a team project aimed at making local transactions feel more discoverable and trustworthy. I focused on the buyer-side browsing experience, card layouts, and filter interactions to reduce friction in exploring listings. I also collaborated on API integration and helped align the UI with the team product direction.",
    },
    ja: {
      platform: "Webアプリ",
      title: "LocaLink",
      description:
        "LocaLink は、地域内の取引をより見つけやすく、安心して行えるようにすることを目指したチーム開発です。私は購入者向けの一覧体験、カードレイアウト、絞り込み操作の設計を担当し、掲載情報を探しやすくすることに注力しました。加えて API 連携にも関わり、チーム全体のプロダクト方針に沿って UI を整えました。",
    },
    fr: {
      platform: "Application Web",
      title: "LocaLink",
      description:
        "LocaLink etait un projet d equipe visant a rendre les transactions locales plus visibles et plus fiables. Je me suis concentre sur l experience de navigation cote acheteur, les cartes d annonces et les filtres pour reduire les frictions. J ai aussi participe a l integration API et a l alignement de l UI avec la direction produit de l equipe.",
    },
  },
  clientflow: {
    common: {
      category: "team",
      image: "",
      liveUrl: "https://example.com/clientflow",
      gitHubUrl: "https://github.com/example/clientflow",
      skills: [...clientFlowSkills],
    },
    en: {
      platform: "Web App",
      title: "ClientFlow",
      description:
        "ClientFlow was developed to give a small freelance team better visibility into leads, active clients, and delivery status. I worked on the dashboard experience, progress indicators, and data presentation so the team could understand project status at a glance. My role covered frontend implementation, component structuring, and coordination around shared requirements.",
    },
    ja: {
      platform: "Webアプリ",
      title: "ClientFlow",
      description:
        "ClientFlow は、小規模なフリーランスチームがリード、進行中案件、納品状況を把握しやすくするために開発したツールです。私はダッシュボード体験、進捗表示、データ可視化を担当し、ひと目で状況が分かる画面作りに取り組みました。役割としては、フロントエンド実装、コンポーネント設計、要件のすり合わせを担いました。",
    },
    fr: {
      platform: "Application Web",
      title: "ClientFlow",
      description:
        "ClientFlow a ete developpe pour offrir a une petite equipe freelance une meilleure visibilite sur les prospects, les clients actifs et l avancement des livraisons. J ai travaille sur l experience du tableau de bord, les indicateurs de progression et la presentation des donnees afin que l etat des projets soit lisible d un coup d oeil. Mon role couvrait l implementation frontend, la structuration des composants et la coordination des besoins partages.",
    },
  },
  campusloop: {
    common: {
      category: "team",
      image: "",
      liveUrl: "https://example.com/campusloop",
      gitHubUrl: "https://github.com/example/campusloop",
      skills: [...campusLoopSkills],
    },
    en: {
      platform: "Web App",
      title: "CampusLoop",
      description:
        "CampusLoop was built as a group project to simplify event discovery and coordination on campus. I focused on event cards, filtering flows, and the information hierarchy that helps students understand what is happening quickly. I also contributed to shared component patterns and frontend implementation details across the team.",
    },
    ja: {
      platform: "Webアプリ",
      title: "CampusLoop",
      description:
        "CampusLoop は、学内イベントの発見と運営をよりスムーズにするためのチームプロジェクトです。私はイベントカード、絞り込みフロー、情報の優先順位設計を担当し、学生が必要な情報を素早く把握できることを重視しました。共通コンポーネント設計やフロントエンド実装にも貢献しています。",
    },
    fr: {
      platform: "Application Web",
      title: "CampusLoop",
      description:
        "CampusLoop a ete cree comme projet de groupe pour simplifier la decouverte et la coordination des evenements sur le campus. Je me suis concentre sur les cartes d evenements, les parcours de filtrage et la hierarchie d information permettant aux etudiants de comprendre rapidement ce qui se passe. J ai aussi contribue aux patterns de composants partages et aux details d implementation frontend.",
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
