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
  eyebrow: 'DATA ANALYST | MELBOURNE | ONSITE, HYBRID AND REMOTE',
  headline: 'I turn messy data into decisions that move businesses.',
  subheading:
    'Four years inside reporting for Fortune 500 supply chains and enterprise ERP teams. I build the SQL, Power BI dashboards, and automated workflows leaders use every week.',
  seeking: 'Open to Data Analyst, Power BI Developer, and Supply Chain Analyst roles in Victoria and NSW.',
  ctaPrimary: 'View My Work',
  ctaSecondary: 'Download CV',
}

export const about = {
  photo: assetUrl('images/about-me.jpeg'),
  title: 'About',
  lead:
    "I am a Data Analyst with four years of experience and a Master's in Applied AI. Most of my work sits in the reporting layer: SQL, Power BI, and the pipelines that feed them. At Thirdware I supported procurement and supply chain analytics across 15-plus Fortune 500 accounts. At GWMI I rebuilt reporting from scattered spreadsheets into one audit-ready data layer. I care about numbers that match operations, not just numbers that look right on a slide.",
  focusLabel: 'Currently seeking',
  focusValue:
    'Data Analyst, Power BI Developer, or Supply Chain Analyst in Victoria or NSW. Available with two weeks notice. Full Australian work rights.',
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
  'SQL Gold, HackerRank',
  'Microsoft Power Platform Fundamentals PL-900',
]

export const skillsIntro =
  'Tools I use daily across ERP, supply chain, and reporting work. Nothing here is filler for a keyword list.'

export type ExperienceItem = {
  date: string
  title: string
  company: string
  narrative: string
  outcomes: string[]
  tools: string[]
}

export const experienceIntro =
  'Four years turning operational data into reporting leaders trust. ERP, enterprise scale, and regulated environments where errors are costly.'

export const experience: ExperienceItem[] = [
  {
    date: '2023 - Present',
    title: 'Data Reporting Analyst',
    company: 'GWMI Group',
    narrative:
      'GWMI runs compliance-heavy operations across Geelong and western Melbourne. I own the reporting stack: ingesting messy inputs, cleaning them in SQL, and publishing Power BI packs for capacity planning and day-to-day KPIs.',
    outcomes: [
      '20% better data accuracy after merging fragmented sources into one master dataset',
      'Weekly, monthly, and quarterly dashboards became the main planning tool for senior leadership',
      'SQL workflows gave same-day KPI visibility across scheduling and reporting cycles',
      'Removed manual reconciliation across reporting cycles in a regulated setting',
    ],
    tools: ['SQL', 'Power BI', 'Excel', 'Power Query', 'PivotTables', 'Data Cleaning', 'Stakeholder Reporting'],
  },
  {
    date: '2019 - 2021',
    title: 'ERP Data Analyst',
    company: 'Thirdware Solutions',
    narrative:
      'Thirdware (Tech Mahindra Group) delivers ERP programmes for large manufacturers and retailers. I was the analytics contact on 15-plus accounts: data models, SQL extracts, and Power BI dashboards that replaced weeks of manual reconciliation with a scheduled refresh.',
    outcomes: [
      '40% faster reporting through automated ERP extract and reconciliation workflows',
      '15+ Fortune 500 clients supported across automotive and manufacturing supply chains',
      'Power BI dashboards for live procurement and inventory KPIs',
      'Helped speed e-commerce rollout reporting across the client portfolio',
    ],
    tools: ['Power BI', 'SQL', 'ERP Reporting', 'DAX', 'Inventory Optimisation', 'Stakeholder Reporting'],
  },
  {
    date: '2018 - 2019',
    title: 'ERP Software Engineer',
    company: 'Thirdware Solutions',
    narrative:
      'Built the SQL extraction and validation jobs analyst teams relied on. Automated queries and Excel templates became the baseline for client procurement and inventory reporting.',
    outcomes: [
      '20% less manual effort through automated ERP extraction pipelines',
      'Reporting templates adopted as daily tools across multiple client teams',
      'Worked with senior consultants to fix complex ERP workflow issues on deadline',
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
      'Coursework in machine learning, data engineering, AI ethics, and a smart-city capstone. Research work turned sensor and behavioural data into forecasts and maps stakeholders could use.',
  },
  {
    id: 'py',
    frontTitle: 'ACS Professional Year Program',
    frontSchool: 'Performance Education',
    frontMeta: 'Australian Computer Society accredited pathway',
    backBody:
      'ACS programme for internationally qualified tech graduates: workplace communication, ethics, and an industry project.',
    pulse: true,
  },
  {
    id: 'bachelors',
    frontTitle: 'Bachelor of Engineering (Electronics)',
    frontSchool: 'Mumbai University',
    frontMeta: 'WAM 72/100',
    backBody:
      'Electronics, signal processing, and data systems. Good foundation for structured problem solving in analytics.',
  },
  {
    id: 'msft',
    frontTitle: 'Microsoft Certified',
    frontSchool: 'Power BI and Azure fundamentals',
    frontMeta: 'Data, analytics, and AI associate-level stack',
    backBody:
      'PL-300 Power BI Associate, DP-900 Data Fundamentals, and AI-900. Covers modelling, DAX, Azure data services, and AI tools used in enterprise reporting.',
    microsoft: true,
  },
]

export const projectsIntro =
  'Each project ties analysis to a business outcome: capacity, margin, compliance, or revenue. Not charts for their own sake.'

/** Each value maps to a domain-obvious banner (no abstract geometry). */
export type ProjectBanner = 'f1-car' | 'afl-oval' | 'bars' | 'grid' | 'donut' | 'scatter'

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
    'End-to-end pipeline for 75 years of Formula 1 data (1950-2024) in Snowflake, with raw and analytics layers. SQL views for qualifying trends, reliability, and era comparisons. Live Power BI report with DAX and gen-AI checks against the underlying SQL.',
  tech: ['Snowflake', 'SQL', 'Power BI', 'DAX', 'Python', 'Generative AI'],
}

export const secondaryProject: ProjectItem = {
  banner: 'afl-oval',
  title: 'Australian Football League Insights (Power BI)',
  href: 'https://github.com/vinitshetty16/AFL-Insights-PowerBI',
  description:
    'Star-schema model over 6,416 player-game rows. Custom DAX for efficiency, rolling form, and opponent benchmarks. Drill-through dashboards for results, attendance, and player stats on Power BI Service.',
  tech: ['Power BI', 'DAX', 'Star Schema', 'Power BI Service'],
}

export const gridProjects: ProjectItem[] = [
  {
    banner: 'bars',
    title: 'Woolworths Product & Sales Insights (SQL)',
    href: 'https://github.com/vinitshetty16/Woolworths-Product-And-Sales-Insights-Using-SQL',
    description:
      'SQL on Woolworths product and sales data to find top SKUs, pricing gaps, and revenue trends that inform category decisions.',
    tech: ['SQL', 'Retail', 'Category Growth'],
  },
  {
    banner: 'grid',
    title: 'Melbourne City Geospatial (Python)',
    href: 'https://github.com/vinitshetty16/City-of-Melbourne/tree/main',
    description:
      'Python map for Melbourne City Council: landmarks, food spots, and foot-traffic scenarios for planning (including a 20% lift case).',
    tech: ['Python', 'Geospatial', 'Public Planning'],
  },
  {
    banner: 'donut',
    title: 'Human Resources Insights (Tableau)',
    href: 'https://github.com/vinitshetty16/Human-Resources-Insights-using-Tableau',
    description:
      'Tableau dashboard on demographics, hiring, and attrition so HR and leadership can track the talent pipeline.',
    tech: ['Tableau', 'HR Analytics', 'Leadership KPIs'],
  },
  {
    banner: 'scatter',
    title: 'Taxi Revenue, Hypothesis Testing',
    href: 'https://github.com/vinitshetty16/Maximizing-Revenue-for-Taxi-Cab-Hypothesis-Testing',
    description:
      'Hypothesis tests on NYC taxi fares by payment type, with clear recommendations for revenue.',
    tech: ['Statistics', 'Hypothesis Testing', 'NYC Taxi Data'],
  },
]

export const expertisePanels = [
  {
    title: 'ERP and Supply Chain',
    body: 'Procurement, inventory, and fulfilment analytics for large manufacturers. ERP data turned into cost and delivery decisions.',
    icon: 'db' as const,
  },
  {
    title: 'Business Problem Solving',
    body: 'I ask what drives revenue and cost first, then pick the SQL or BI approach. Melbourne capstone work started from visitor pain points, not from a dataset looking for a chart.',
    icon: 'map' as const,
  },
  {
    title: 'Reporting & Data Operations',
    body: 'Fix the workflow and data quality gaps, then ship pipelines and KPI packs people actually use. In regulated settings that meant one trusted source for planning and compliance views.',
    icon: 'clip' as const,
  },
  {
    title: 'AI-Augmented Analytics',
    body: 'Gen-AI to speed up analysis, with every claim checked back to SQL. No insights without a query behind them.',
    icon: 'spark' as const,
  },
]

export const contact = {
  heading: "Let's connect.",
  body:
    'Looking for Data Analyst, Power BI Developer, or Supply Chain Analyst roles in Victoria and NSW. Available in two weeks with full work rights. Fastest way to reach me is LinkedIn.',
  linkedinCta: 'Connect on LinkedIn',
  emailCta: 'Send an Email',
}

export const impactCards = [
  {
    title: '4 years',
    subtitle: 'ERP, reporting operations, and enterprise programmes where bad data has a real cost.',
  },
  {
    title: "Master's, Applied AI",
    subtitle: 'Deakin: ML, data engineering, and research turned into operational models.',
  },
  {
    title: '15+ enterprises',
    subtitle: 'Fortune-scale work where reporting replaced weeks of reconciliation.',
  },
]
