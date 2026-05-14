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
  eyebrow: 'DATA ANALYST · GEELONG, VIC · OPEN TO REMOTE',
  headline: 'I turn messy data into decisions that move businesses.',
  subheading:
    'Four years building the reporting infrastructure that Fortune 500 teams actually rely on — SQL pipelines, Power BI dashboards, and AI-augmented analytics that replace guesswork with clarity.',
  ctaPrimary: 'View My Work',
  ctaSecondary: 'Download CV',
}

export const about = {
  photo: assetUrl('images/about-me2.png'),
  title: 'About',
  lead:
    "Data Analyst with a Master's in Applied AI and 3+ years of experience turning complex data into clear, actionable insights. Skilled in SQL, Excel, Power BI, Tableau, and Python, with a strong track record in building KPI dashboards, optimizing data workflows, and driving data-informed decisions across Retail, FMCG, and Enterprise sectors.",
  focusLabel: 'Currently focused on',
  focusValue: 'Generative AI integration into analytics workflows',
  statChips: ['4+ yrs experience', 'PL-300 Certified', "Master's in Applied AI", 'Geelong VIC'],
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
    name: 'Visualisation & BI',
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

export type ExperienceItem = {
  date: string
  title: string
  company: string
  narrative: string
  outcomes: string[]
  tools: string[]
}

export const experienceIntro =
  "Started as an ERP Analyst optimising reporting and supply chain processes for enterprise clients, followed by hands-on smart city analytics during a Master's in Applied AI at Chameleon. Now a Data Reporting Analyst, turning inspection and operational data into decisions stakeholders act on."

export const experience: ExperienceItem[] = [
  {
    date: '2023 — Present',
    title: 'Data Reporting Analyst',
    company: 'GWMI',
    narrative:
      'GWMI is a leading building inspection provider across Geelong and western Melbourne, producing compliant, inspection-grade reporting for residential construction. I own recurring reporting cycles and the data hygiene that makes those reports trustworthy for regulators and builders alike.',
    outcomes: [
      '↑ 50% improvement in scheduling accuracy after consolidating fragmented booking and inspection data',
      'Weekly through quarterly dashboards that senior stakeholders use for capacity and compliance decisions',
      'Multi-source inspection data modelled into a single analysis-ready layer for downstream BI',
    ],
    tools: ['Excel', 'Power Query', 'PivotTables', 'Data Cleaning', 'Charts', 'Stakeholder Reporting'],
  },
  {
    date: '2022 — 2023',
    title: 'Data Scientist',
    company: 'Chameleon — Smarter World',
    narrative:
      'Chameleon partners with the City of Melbourne on IoT and smart-city programmes spanning energy, mobility, and public-space utilisation. I translated sensor and behavioural data into forecasts and maps that city teams could brief from directly.',
    outcomes: [
      '↑ 90% prediction accuracy on EV charging demand using ensemble models for infrastructure planning',
      'Geospatial layers that highlighted high-traffic zones for council operations',
      '↑ 20% projected foot-traffic lift scenarios from location analytics supporting pilot programmes',
    ],
    tools: ['Python', 'Tableau', 'EDA', 'Geospatial Mapping', 'Data Visualisation'],
  },
  {
    date: '2018 — 2021',
    title: 'ERP Analyst',
    company: 'Thirdware Solutions',
    narrative:
      'Thirdware (Tech Mahindra Group) delivers ERP programmes for Fortune 500 procurement, finance, and supply-chain organisations. I sat between enterprise data models and the executives who needed reconciled numbers the same day every month.',
    outcomes: [
      '↑ 40% faster reporting turnaround after automating recurring ERP extracts and reconciliation packs',
      '15+ Fortune 500 clients supported through ERP reporting and inventory optimisation workstreams',
      '↑ 10% faster e-commerce adoption across a portfolio of rollout programmes',
    ],
    tools: ['Power BI', 'SQL', 'ERP Reporting', 'Inventory Optimisation', 'Client Consulting'],
  },
]

export const education = [
  {
    date: '2024',
    title: 'Masters of Artificial Intelligence',
    school: 'Deakin University',
    note: 'WAM: 75/100',
  },
  {
    date: '2017',
    title: 'Bachelor of Engineering',
    school: 'Mumbai University',
    note: 'WAM: 72/100',
  },
]

export const projectsIntro =
  'Outcome-led analytics work — from regulated reporting to public dashboards. Each card links to the underlying repository or artefact.'

export type ProjectItem = {
  title: string
  href: string
  description: string
  tech: string[]
  featured?: boolean
}

/** Featured first, AFL second, then four in the grid. Update `featured.href` when your F1 repo is public. */
export const featuredProject: ProjectItem = {
  featured: true,
  title: 'F1 Race Analytics',
  href: 'https://github.com/vinitshetty16',
  description:
    'A flagship storytelling build on race telemetry and strategy data: lap profiles, tyre degradation curves, and circuit-specific KPIs designed the way motorsport analysts actually interrogate timing sheets — not vanity charts. Replace this link with your public repo URL when it is live.',
  tech: ['Power BI', 'DAX', 'Python', 'Telemetry', 'Narrative'],
}

export const secondaryProject: ProjectItem = {
  title: 'Australian Football League Insights (Power BI)',
  href: 'https://github.com/vinitshetty16/AFL-Insights-PowerBI',
  description:
    'Interactive AFL dashboard surfacing team and player performance trajectories so coaches and fans can compare form without exporting flat files.',
  tech: ['Power BI', 'DAX', 'Sports Analytics', 'Storytelling'],
}

export const gridProjects: ProjectItem[] = [
  {
    title: 'Woolworths Product & Sales Insights (SQL)',
    href: 'https://github.com/vinitshetty16/Woolworths-Product-And-Sales-Insights-Using-SQL',
    description:
      'SQL-heavy analysis isolating top performers, pricing gaps, and category momentum to brief commercial growth teams.',
    tech: ['SQL', 'Retail', 'EDA'],
  },
  {
    title: "Melbourne Hidden Gems (Python)",
    href: 'https://github.com/vinitshetty16/City-of-Melbourne/tree/main',
    description:
      'Dynamic mapping layer for Melbourne City Council guiding visitors through landmarks and food precincts with spatial context.',
    tech: ['Python', 'Geospatial', 'Public Sector'],
  },
  {
    title: 'Smart Recycling (Deep Learning)',
    href: 'https://github.com/vinitshetty16/Smart-Recycling-Deep-Learning/tree/main',
    description:
      'Convolutional pipeline with augmentation and ResNet50 backbone to classify waste streams for automated sorting decisions.',
    tech: ['Python', 'ResNet50', 'Augmentation'],
  },
  {
    title: 'Human Resources Insights (Tableau)',
    href: 'https://github.com/vinitshetty16/Human-Resources-Insights-using-Tableau',
    description:
      'HR dashboard covering attrition, hiring mix, and demographic balance for people leaders tracking workforce health.',
    tech: ['Tableau', 'HR Analytics', 'Dashboards'],
  },
]

export const contact = {
  heading: "Let's connect.",
  body:
    "I'm open to data analyst roles, freelance analytics work, and conversations about interesting problems. The best way to reach me is LinkedIn — send a connection request or a direct message and I'll get back to you promptly.",
  linkedinCta: 'Connect on LinkedIn',
  emailCta: 'Send an Email',
}

export const impactCards = [
  {
    title: '4+ years',
    subtitle: 'Delivery across ERP, smart-city analytics, and regulated inspection reporting.',
  },
  {
    title: 'PL-300',
    subtitle: 'Microsoft Certified: Power BI Data Analyst.',
  },
  {
    title: "Master's · Applied AI",
    subtitle: 'Deakin University — statistical and ML foundations applied to business data.',
  },
  {
    title: '15+ enterprises',
    subtitle: 'Fortune-scale reporting programmes through ERP and analytics consulting.',
  },
]

export const githubCta = {
  title: 'More builds on',
  highlight: 'GitHub',
  subtitle: 'Including hypothesis testing, taxi revenue experiments, and smaller exploratory notebooks.',
}
