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
  eyebrow: 'REPORTING & BI ANALYST | ERP · SUPPLY CHAIN · OPERATIONS ANALYTICS | MELBOURNE',
  headline: 'I turn fragmented operational data into reporting leaders trust.',
  subheading:
    'Four years building Power BI dashboards, SQL pipelines, and ERP reporting models for Fortune 500 manufacturing and FMCG clients including Tesla, GM, Ford, and Toyota.',
  seeking:
    'Open to Reporting & BI Analyst, ERP Analyst, and Supply Chain Analyst roles across Melbourne and Victoria.',
  ctaPrimary: 'View My Work',
  ctaSecondary: 'Download CV',
}

export const about = {
  photo: assetUrl('images/about-me.jpeg'),
  title: 'About',
  lead:
    'Reporting & BI Analyst with four years of experience across automotive, manufacturing, and FMCG industries. At Thirdware Solutions, developed Power BI dashboards, SQL scripts, and ERP reporting models as part of consulting teams on projects involving Tesla, GM, Ford, and Toyota. Currently responsible for KPI reporting and data consolidation across two business units at GWMI Group. Microsoft PL-300 certified with a Master of Applied Artificial Intelligence from Deakin University.',
  focusLabel: 'Currently seeking',
  focusValue:
    'Reporting & BI Analyst, ERP Analyst, or Supply Chain Analyst across Melbourne and Victoria. Available with two weeks notice.',
  statChips: ['4 YEARS EXPERIENCE', 'PL-300 CERTIFIED', "MASTER'S IN APPLIED AI", 'MELBOURNE VIC', 'ERP & SUPPLY CHAIN FOCUS'],
}

export type SkillCategory = {
  icon: 'query' | 'viz' | 'cloud' | 'cert'
  name: string
  tags: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'query',
    name: 'Technical',
    tags: ['SQL', 'Python', 'DAX', 'PostgreSQL', 'Data Modelling', 'Snowflake', 'Azure'],
  },
  {
    icon: 'viz',
    name: 'Tools & Platforms',
    tags: ['Power BI', 'Power BI Service', 'Azure Data Studio', 'ERP Systems', 'Git', 'Jira', 'Excel'],
  },
  {
    icon: 'cloud',
    name: 'Domain',
    tags: [
      'Supply Chain Analytics',
      'ERP Reporting',
      'Inventory Management',
      'Procurement Analytics',
      'KPI Reporting',
      'Financial Reporting',
    ],
  },
  {
    icon: 'cert',
    name: 'Certifications',
    tags: [
      'Microsoft PL-300 Power BI Associate',
      'Azure DP-900 Data Fundamentals',
      'Azure AI-900 AI Fundamentals',
    ],
  },
]

export const skillsIntro =
  'Technical stack, platforms, and domain focus for ERP, supply chain, and operational reporting work.'

export type ExperienceItem = {
  date: string
  title: string
  company: string
  narrative: string
  outcomes: string[]
  tools: string[]
}

export const experienceIntro =
  'Four years building reporting and BI for manufacturing, automotive, and operations teams where data quality directly affects decisions.'

export const experience: ExperienceItem[] = [
  {
    date: '2023 - Present',
    title: 'Data Reporting Analyst',
    company: 'GWMI Group',
    narrative:
      'GWMI runs compliance-heavy operations across Geelong and western Melbourne. Responsible for end-to-end operational KPI reporting serving finance and operations teams across two business units.',
    outcomes: [
      'Built and maintained operational KPI reports in Excel, powered by MySQL queries extracting data from internal databases and client portals',
      'Developed structured MySQL queries to consolidate client portal data into Excel reporting templates used by senior management',
      'Improved data accuracy by 20% by unifying data across multiple sources into a single master dataset',
      'Responsible for all ad-hoc analytical requests from senior management, consistently delivering insights within a 24-hour turnaround',
    ],
    tools: ['SQL', 'MySQL', 'Excel', 'Power Query', 'Data Cleaning', 'Stakeholder Reporting'],
  },
  {
    date: '2019 - 2021',
    title: 'ERP Data Analyst',
    company: 'Thirdware Solutions',
    narrative:
      'Thirdware Solutions (Tech Mahindra Group) delivers ERP programmes for large manufacturers and retailers. Worked as part of consulting teams on projects involving Tesla, GM, Ford, and Toyota across production, procurement, and inventory operations.',
    outcomes: [
      'Developed Power BI dashboards and automated SQL scripts to extract and transform ERP data across production, procurement, and inventory operations',
      'Built new ERP reporting datasets and enhanced existing reporting models across 15+ client engagements',
      'Presented dashboard demonstrations and analytical findings directly to client stakeholders across manufacturing and FMCG operations',
      'Contributed to KPI definition and reporting framework discussions with client operations teams',
    ],
    tools: ['Power BI', 'SQL', 'ERP Reporting', 'DAX', 'Inventory Analytics', 'Stakeholder Reporting'],
  },
  {
    date: '2018 - 2019',
    title: 'ERP Software Engineer',
    company: 'Thirdware Solutions',
    narrative:
      'Configured and maintained ERP inventory and EDI modules for enterprise automotive and manufacturing clients, supporting procurement and supply chain workflows.',
    outcomes: [
      'Configured, customised, and maintained ERP inventory and EDI modules for 3-4 enterprise automotive and manufacturing clients',
      'Developed SQL scripts to extract and transform ERP inventory and EDI data',
      'Gathered requirements from business users and functional consultants, implemented ERP configuration changes, and validated system behaviour against client operational needs',
    ],
    tools: ['SQL', 'ERP Systems', 'EDI', 'Data Extraction', 'Process Automation'],
  },
]

export type EducationFlip = {
  id: string
  frontTitle: string
  frontSchool: string
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
    id: 'bachelors',
    frontTitle: 'Bachelor of Engineering (Electronics)',
    frontSchool: 'University of Mumbai, India',
    backBody:
      'Electronics, signal processing, and data systems. Strong foundation for structured problem solving in analytics and ERP.',
  },
]

export const projectsIntro =
  'Reporting and analytics builds across supply chain, ERP operations, and enterprise data.'

export type ProjectBanner = 'f1-car' | 'afl-oval' | 'bars' | 'grid' | 'donut' | 'scatter'

export type ProjectItem = {
  title: string
  href: string
  description: string
  tech: string[]
  featured?: boolean
  banner: ProjectBanner
}

export const projects: ProjectItem[] = [
  {
    banner: 'bars',
    title: 'Supply Chain Performance Analytics',
    href: 'https://github.com/vinitshetty16',
    description:
      'End-to-end supply chain analytics solution ingesting 180,000+ transactional records into PostgreSQL with a star schema design. Built SQL reporting views analysing on-time delivery rates, shipping mode performance, and regional delay patterns across 5 global markets and 40+ product categories. Identified that 54% of orders were late, with Standard Class shipping and specific regional markets driving the majority of delays. Surfaced through a Power BI dashboard published to Power BI Service.',
    tech: ['PostgreSQL', 'Python', 'Power BI', 'SQL', 'DAX'],
  },
  {
    banner: 'donut',
    title: 'ERP Operations & Procurement Reporting',
    href: 'https://github.com/vinitshetty16',
    description:
      'ERP-style operational reporting solution covering procurement, inventory, and order fulfilment data across three years of transactional history. Designed a star schema with SQL views tracking 12 operational KPIs including inventory turnover, purchase order cycle times, and order fulfilment rates. Built a multi-page Power BI report with DAX measures for procurement efficiency and inventory health. Replaced a manual Excel-based monthly reporting process, reducing reporting preparation from 3 days to near real-time delivery.',
    tech: ['PostgreSQL', 'Power BI', 'DAX', 'Excel'],
  },
  {
    featured: true,
    banner: 'f1-car',
    title: 'F1 Race Analytics Pipeline',
    href: 'https://github.com/vinitshetty16/f1-race-performance-analytics',
    description:
      'End-to-end pipeline for 75 years of Formula 1 data (1950-2024) in Snowflake, with raw and analytics layers. SQL views for qualifying trends, reliability, and era comparisons. Live Power BI report with DAX measures on Power BI Service.',
    tech: ['Snowflake', 'SQL', 'Power BI', 'DAX', 'Python'],
  },
  {
    banner: 'afl-oval',
    title: 'Australian Football League Insights (Power BI)',
    href: 'https://github.com/vinitshetty16/AFL-Insights-PowerBI',
    description:
      'Star-schema model over 6,416 player-game rows. Custom DAX for efficiency, rolling form, and opponent benchmarks. Drill-through dashboards for results, attendance, and player stats on Power BI Service.',
    tech: ['Power BI', 'DAX', 'Star Schema', 'Power BI Service'],
  },
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
    'Open to Reporting & BI Analyst, ERP Analyst, and Supply Chain Analyst roles across Melbourne and Victoria. Available with two weeks notice.',
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
