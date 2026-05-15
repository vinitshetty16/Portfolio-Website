import { assetUrl } from './assetUrl'

export const site = {
  name: 'Vinit Shetty',
  github: 'https://github.com/vinitshetty16',
  linkedin: 'https://www.linkedin.com/in/vinitshetty/',
  linkedinDisplay: 'linkedin.com/in/vinitshetty',
  resumePdf: assetUrl('Vinit_Shetty_Data_Analyst_Resume.pdf'),
  email: 'vinitshetty31@gmail.com',
}

export const hero = {
  eyebrow: 'DATA ANALYST · MELBOURNE · OPEN TO ONSITE, HYBRID & REMOTE',
  headline: 'I turn messy data into decisions that move businesses.',
  subheading:
    'Four years embedded in the reporting infrastructure of Fortune 500 supply chains, enterprise ERP systems, and inspection operations — building the dashboards, pipelines, and automated workflows that leadership teams actually make decisions from.',
  seeking:
    'Seeking: Data Analyst · Power BI Developer · Supply Chain Analyst · Victoria & NSW',
  ctaPrimary: 'View My Work',
  ctaSecondary: 'Download CV',
}

export const about = {
  photo: assetUrl('images/about-me.jpeg'),
  title: 'About',
  lead:
    "I am a Data Analyst with four years of experience and a Master's in Applied AI — I have spent my career inside the reporting layers that enterprise teams depend on daily. At Thirdware I owned the analytics stack for procurement, inventory, and supply chain operations across 15-plus Fortune 500 manufacturers. At GWMI I rebuilt the entire reporting cycle from fragmented spreadsheets into a structured, audit-ready data layer. I combine deep SQL and Power BI craft with a genuine understanding of how operations actually run — which means the insights I deliver are not just technically correct, they are ones stakeholders can act on immediately.",
  focusLabel: 'Currently seeking',
  focusValue:
    '→ Data Analyst · Power BI Developer · Supply Chain Analyst roles across Victoria and NSW — available with 2 weeks notice, full Australian work rights.',
  statChips: ['4 YEARS EXPERIENCE', 'PL-300 CERTIFIED', "MASTER'S IN APPLIED AI", 'MELBOURNE VIC', 'FULL WORK RIGHTS'],
}

export type SkillCategory = {
  icon: 'query' | 'viz' | 'cloud' | 'ai'
  name: string
  tags: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'query',
    name: 'Data & Querying',
    tags: ['SQL', 'Python', 'Excel', 'Statistics', 'Data Modelling', 'ETL', 'EDA'],
  },
  {
    icon: 'viz',
    name: 'Visualisation and BI',
    tags: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'KPI Reporting'],
  },
  {
    icon: 'cloud',
    name: 'Cloud & Platforms',
    tags: ['Snowflake', 'Azure', 'Git', 'Jira', 'ERP Systems'],
  },
  {
    icon: 'ai',
    name: 'AI & Emerging',
    tags: ['Generative AI', 'LLMs', 'Azure ML', 'Machine Learning Pipelines'],
  },
]

export const skillCerts = [
  'Microsoft PL-300 Power BI Associate',
  'Azure Data Fundamentals DP-900',
  'Azure AI Fundamentals AI-900',
  'SQL Gold — HackerRank',
  'Microsoft Power Platform Fundamentals PL-900',
]

export const skillsIntro =
  'Four years across ERP, supply chain, and inspection analytics — these are the tools I use to solve real problems.'

export type ExperienceItem = {
  date: string
  title: string
  company: string
  narrative: string
  outcomes: string[]
  tools: string[]
}

export const experienceIntro =
  'Four years moving data from operational noise to decisions — ERP foundations, enterprise reporting at scale, and regulated inspection analytics where accuracy is non-negotiable.'

export const experience: ExperienceItem[] = [
  {
    date: '2023 – Present',
    title: 'Data Reporting Analyst',
    company: 'GWMI Group',
    narrative:
      "GWMI is Victoria's leading building inspection provider, producing compliance-grade reporting across Geelong and western Melbourne. I own the entire data layer — from raw inspection inputs through to the structured, audit-ready reporting that senior leadership use for capacity planning, compliance monitoring, and operational decisions.",
    outcomes: [
      '↑ 20% improvement in data accuracy after consolidating fragmented multi-source inspection data into a single master dataset',
      'Weekly, monthly, and quarterly dashboards now the primary compliance and capacity planning tool for senior leadership',
      'SQL-based reporting workflows enabling same-day operational KPI visibility across scheduling and inspection cycles',
      'Eliminated manual reconciliation across all reporting cycles — zero tolerance for data errors in a regulated environment',
    ],
    tools: ['SQL', 'Power BI', 'Excel', 'Power Query', 'PivotTables', 'Data Cleaning', 'Stakeholder Reporting'],
  },
  {
    date: '2019 – 2021',
    title: 'ERP Data Analyst',
    company: 'Thirdware Solutions',
    narrative:
      'Thirdware, part of the Tech Mahindra Group, delivers ERP transformation programmes to Fortune 500 manufacturers, retailers, and financial institutions. As the embedded analytics resource across 15-plus enterprise accounts, I owned the reporting layer that procurement, supply chain, and finance leads briefed from every month — designing data models, building SQL extracts, and publishing Power BI dashboards that replaced weeks of manual reconciliation with one scheduled refresh.',
    outcomes: [
      '↑ 40% faster reporting turnaround through automated ERP extract and reconciliation workflows',
      '15+ Fortune 500 clients supported across automotive and manufacturing supply chains',
      'Power BI dashboards deployed for real-time procurement and inventory KPI monitoring',
      'Enabled 10% faster e-commerce adoption rollout across client portfolio through integrated ERP reporting',
    ],
    tools: ['Power BI', 'SQL', 'ERP Reporting', 'DAX', 'Inventory Optimisation', 'Stakeholder Reporting'],
  },
  {
    date: '2018 – 2019',
    title: 'ERP Software Engineer',
    company: 'Thirdware Solutions',
    narrative:
      'Foundation year building the data extraction and transaction reporting pipelines that analyst teams depended on. I engineered the SQL infrastructure — automated queries, data validation routines, and structured Excel reporting templates — that became the operational baseline for client reporting across procurement and inventory tracking.',
    outcomes: [
      '↑ 20% reduction in manual operations effort through automated ERP data extraction pipelines',
      'Structured reporting templates adopted as daily operational tools across multiple client teams',
      'Complex ERP workflow diagnostics resolved in collaboration with senior consultants ensuring timely delivery',
    ],
    tools: ['SQL', 'Excel', 'ERP Systems', 'Data Extraction', 'Process Automation'],
  },
]

export type EducationFlip = {
  id: string
  frontTitle: string
  frontSchool: string
  /** Optional extra line on the card front (dates avoided on purpose). */
  frontMeta?: string
  backBody: string
  pulse?: boolean
  microsoft?: boolean
}

export const educationCards: EducationFlip[] = [
  {
    id: 'masters',
    frontTitle: 'Master of Applied Artificial Intelligence',
    frontSchool: 'Deakin University',
    frontMeta: 'WAM 75/100',
    backBody:
      'Machine Learning, Data Engineering, AI Ethics, Smart City Analytics Capstone — applied research translating sensor and behavioural data into forecasting models and geospatial visualisations.',
  },
  {
    id: 'py',
    frontTitle: 'ACS Professional Year Program',
    frontSchool: 'Performance Education',
    frontMeta: 'Australian Computer Society accredited pathway',
    backBody:
      'Australian Computer Society accredited programme for internationally qualified technology graduates — professional communications, workplace ethics, and industry project work.',
    pulse: true,
  },
  {
    id: 'bachelors',
    frontTitle: 'Bachelor of Engineering (Electronics)',
    frontSchool: 'Mumbai University',
    frontMeta: 'WAM 72/100',
    backBody:
      'Electronics systems, signal processing, and data systems fundamentals — the engineering discipline behind structured analytical thinking.',
  },
  {
    id: 'msft',
    frontTitle: 'Microsoft Certified',
    frontSchool: 'Power BI & Azure fundamentals',
    frontMeta: 'Data, analytics, and AI associate-level stack',
    backBody:
      'PL-300 Power BI Associate, DP-900 Data Fundamentals, and AI-900 — Power BI data modelling, DAX, Azure data fundamentals, and AI services for enterprise reporting environments.',
    microsoft: true,
  },
]

export const projectsIntro =
  'Decision-grade analytics: each build connects data to a business outcome — capacity, margin, compliance, or revenue — not charts for their own sake.'

/** Each value maps to a domain-obvious banner (no abstract geometry). */
export type ProjectBanner = 'f1-car' | 'afl-oval' | 'bars' | 'grid' | 'donut' | 'scatter' | 'recycle'

export type ProjectItem = {
  title: string
  href: string
  description: string
  tech: string[]
  featured?: boolean
  banner: ProjectBanner
}

export const featuredProject: ProjectItem = {
  featured: true,
  banner: 'f1-car',
  title: 'F1 Race Analytics Pipeline',
  href: 'https://github.com/vinitshetty16',
  description:
    'An end-to-end analytics pipeline ingesting 75 years of Formula 1 race data — 1950 through 2024 — into Snowflake using a two-layer raw and analytics schema. Complex SQL views surface qualifying conversion rates, constructor failure patterns, and era-by-era championship dominance. Published as a 4-page interactive Power BI report with live Snowflake connectivity, advanced DAX measures, and Generative AI used to accelerate and validate insight generation.',
  tech: ['Snowflake', 'SQL', 'Power BI', 'DAX', 'Python', 'Generative AI'],
}

export const secondaryProject: ProjectItem = {
  banner: 'afl-oval',
  title: 'Australian Football League Insights (Power BI)',
  href: 'https://github.com/vinitshetty16/AFL-Insights-PowerBI',
  description:
    'Star-schema data model across 6,416 player-game records — advanced DAX measures including custom Efficiency Scores, rolling averages, and opponent benchmarking. Drill-through dashboards combining match results, attendance trends, and granular player statistics published live to Power BI Service.',
  tech: ['Power BI', 'DAX', 'Star Schema', 'Power BI Service'],
}

export const gridProjects: ProjectItem[] = [
  {
    banner: 'bars',
    title: 'Woolworths Product & Sales Insights (SQL)',
    href: 'https://github.com/vinitshetty16/Woolworths-Product-And-Sales-Insights-Using-SQL',
    description:
      'SQL analysis across Woolworths product and sales data — identifying top-performing SKUs, pricing gaps, and revenue trends to surface the decisions that drive category growth.',
    tech: ['SQL', 'Retail', 'Category Growth'],
  },
  {
    banner: 'grid',
    title: 'Melbourne City Geospatial (Python)',
    href: 'https://github.com/vinitshetty16/City-of-Melbourne/tree/main',
    description:
      'Dynamic geospatial map built in Python for Melbourne City Council — tourist guidance across landmarks and food outlets, with foot traffic modelling projecting 20 percent lift scenarios for infrastructure planning.',
    tech: ['Python', 'Geospatial', 'Public Planning'],
  },
  {
    banner: 'donut',
    title: 'Human Resources Insights (Tableau)',
    href: 'https://github.com/vinitshetty16/Human-Resources-Insights-using-Tableau',
    description:
      'Interactive HR dashboard in Tableau — employee demographics, hiring trends, and attrition patterns visualised for leadership decision-making across the talent lifecycle.',
    tech: ['Tableau', 'HR Analytics', 'Leadership KPIs'],
  },
  {
    banner: 'scatter',
    title: 'Taxi Revenue — Hypothesis Testing',
    href: 'https://github.com/vinitshetty16/Maximizing-Revenue-for-Taxi-Cab-Hypothesis-Testing',
    description:
      'Hypothesis testing on NYC taxi payment behaviour — statistical analysis of fare impact by payment type, delivering data-backed recommendations for revenue maximisation.',
    tech: ['Statistics', 'Hypothesis Testing', 'NYC Taxi Data'],
  },
]

export const expertisePanels = [
  {
    title: 'ERP and Supply Chain',
    body: 'Analytics across procurement, inventory, and order fulfilment for Fortune 500 manufacturers — turning ERP transaction data into decisions that reduce cost and accelerate delivery cycles.',
    icon: 'db' as const,
  },
  {
    title: 'Business Problem Solving',
    body: 'I start with what moves the business — revenue drivers, customer behaviour, operational bottlenecks — then apply the right logic in SQL and BI to answer it.',
    icon: 'map' as const,
  },
  {
    title: 'Reporting & Data Operations',
    body: 'I map broken reporting workflows and data-quality gaps first, then rebuild pipelines and KPI packs that stakeholders actually run the business on.',
    icon: 'clip' as const,
  },
  {
    title: 'AI-Augmented Analytics',
    body: 'Generative AI integrated into analytics workflows to accelerate insight generation — all outputs validated against underlying SQL results for full analytical integrity.',
    icon: 'spark' as const,
  },
]

export const contact = {
  heading: "Let's connect.",
  body:
    'I am actively seeking Data Analyst, Power BI Developer, and Supply Chain Analyst roles across Victoria and NSW — available with two weeks notice, full Australian work rights. If you have a data problem that needs solving, LinkedIn is the fastest way to start that conversation.',
  linkedinCta: 'Connect on LinkedIn',
  emailCta: 'Send an Email',
}

export const impactCards = [
  {
    title: '4 years',
    subtitle: 'Embedded in ERP, inspection, and enterprise reporting where bad data has a real cost.',
  },
  {
    title: "Master's · Applied AI",
    subtitle: 'Deakin — ML, data engineering, and translating research into operational models.',
  },
  {
    title: '15+ enterprises',
    subtitle: 'Fortune-scale programmes where reporting replaced weeks of reconciliation.',
  },
]
