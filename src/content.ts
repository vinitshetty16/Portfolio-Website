import { assetUrl } from './assetUrl'

export const site = {
  name: 'Vinit Shetty',
  roleLines: ['Data Analyst  ', 'Reporting Analyst  ', 'Curiosity Driven   '],
  github: 'https://github.com/vinitshetty16',
  linkedin: 'https://www.linkedin.com/in/vinitshetty/',
  resumePdf: assetUrl('Vinit_Shetty_Data_Analyst_Resume.pdf'),
  questionForm: 'https://forms.gle/6mf359jDPG1Ngyfx7',
  phone: '+61 480-485-021',
  phoneHref: 'tel://0480485021',
  email: 'vinitshetty31@gmail.com',
}

export const hero = {
  greeting: 'Hello!',
  headline: "I'm Vinit Shetty",
}

export const about = {
  photo: assetUrl('images/about-me2.png'),
  info: [
    { label: 'Name', value: 'Vinit Shetty' },
    { label: 'Job Role', value: 'Data Analyst' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Address', value: 'Melbourne, Australia' },
  ],
  skills: [
    { name: 'SQL & Relational Databases', percent: 85 },
    { name: 'Data Visualization & Dashboards (Power BI, Tableau)', percent: 90 },
    { name: 'Advanced Excel', percent: 90 },
    { name: 'Data Cleaning & Validation', percent: 85 },
    { name: 'Descriptive & Inferential Statistics', percent: 80 },
    { name: 'Cloud & Reporting Tools (Azure, CI/CD, ERP)', percent: 75 },
  ],
  title: 'About Me',
  lead:
    "Data Analyst with a Master's in Applied AI and 3+ years of experience turning complex data into clear, actionable insights. Skilled in SQL, Excel, Power BI, Tableau, and Python, with a strong track record in building KPI dashboards, optimizing data workflows, and driving data-informed decisions across Retail, FMCG, and Enterprise sectors.",
  bullets: [
    {
      label: 'Profile',
      value:
        'Data Analyst | Business Intelligence | Reporting Automation & Analytics',
    },
    {
      label: 'Domain',
      value:
        'Retail Operations | Digital Commerce | Consumer Behavior & Product Insights FMCG Supply Chain | ERP & Logistics',
    },
    {
      label: 'Education',
      value:
        "Master of Applied Artificial Intelligence – Deakin University\nBachelor of Electronics Engineering – Mumbai University",
    },
    {
      label: 'Skills',
      value:
        'SQL | Python | Advanced Excel | Statistics | Data Modelling | Data Cleaning | Data Wrangling | Data Validation | Data Analysis | Exploratory Data Analysis (EDA)',
    },
    {
      label: 'BI Tools',
      value:
        'Power BI (Desktop & Service) | Tableau | Power Query (M-Query) | DAX | KPI Development',
    },
    {
      label: 'Platforms',
      value:
        'Azure | Git | Jira | ERP Systems | CI/CD Pipelines | Scrum | Agile Methodologies | Kanban',
    },
    { label: 'Interest', value: 'Crosswords, Astronomy, Cricket' },
  ],
}

export const resumeIntro =
  "Started as an ERP Analyst optimizing reporting and supply chain processes for enterprise clients, followed by hands-on smart city analytics experience during a Master's in Applied AI at Chameleon. Currently working as a Data Reporting Analyst, transforming inspection data into actionable business insights."

export type ExperienceItem = {
  date: string
  title: string
  company: string
  intro: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    date: '2023 - Present',
    title: 'Data Reporting Analyst',
    company: 'GWMI',
    intro:
      'Leading building inspection provider in Victoria, GWMI delivers timely, compliant, and detailed inspection reports across Geelong and western Melbourne, supporting safe and high-quality residential construction.',
    bullets: [
      'Built dynamic dashboards for weekly, monthly, and quarterly reporting.',
      'Enhanced decision-making with actionable insights for senior stakeholders.',
      'Streamlined multi-source data into a structured, analysis-ready format.',
      'Automated inspection reporting using Excel, reducing manual effort by 40%.',
      'Improved scheduling accuracy by 50% through data consolidation and cleaning.',
      'Tools Used: Excel, VLOOKUP, PivotTables, Data Cleaning, Charts, BI Reporting & Stakeholder Reporting.',
    ],
  },
  {
    date: '2022 - 2023',
    title: 'Data Scientist',
    company: 'Chameleon - Smarter World',
    intro:
      'Chameleon, affiliated with the City of Melbourne Council, develops IoT solutions for smart cities, homes, and energy management, leveraging cutting-edge technology to enhance sustainability, improve resource efficiency.',
    bullets: [
      'Achieved 90% prediction accuracy for EV charging demand using ensemble models.',
      'Supported infrastructure planning through classification-based forecasting models.',
      'Built geospatial maps to identify high-traffic zones for Melbourne City Council.',
      'Projected 20% increase in foot traffic through smart city location analytics.',
      'Created Tableau dashboards to visualize KPIs and user behavior trends.',
      'Tools: Python, Tableau, EDA, Geospatial Mapping, Data Visualization',
    ],
  },
  {
    date: '2018 - 2021',
    title: 'ERP Analyst',
    company: 'Thirdware Solutions',
    intro:
      'Thirdware Solutions, now part of the Tech Mahindra Group, is a leading IT consulting firm dedicated to delivering innovative ERP solutions to top Fortune 500 companies.',
    bullets: [
      'Enabled 10% faster e-commerce adoption for 15+ Fortune 500 clients through ERP automation.',
      'Improved inventory forecasting by integrating historical data into supply chain systems.',
      'Delivered end-to-end ERP reporting solutions for stakeholders across procurement, sales, and finance.',
      'Accelerated reconciliation processes for clients like JP Morgan Chase and Lloyds Bank.',
      'Developed interactive Power BI dashboards for procurement and finance teams, enabling real-time insights and reduced manual reporting.',
      'Tools: Power BI, SQL, ERP Reporting, Inventory Optimization, Client Consulting.',
    ],
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
  'Below is a collection of data analytics projects showcasing expertise in SQL, Power BI, Tableau, Excel, Python, and Hypothesis Testing — each demonstrating real-world applications of data analysis, visualization, and decision support.'

export type ProjectItem = {
  title: string
  href: string
  image: string
  description: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Woolworths Product & Sales Insights Using SQL',
    href: 'https://github.com/vinitshetty16/Woolworths-Product-And-Sales-Insights-Using-SQL',
    image: assetUrl('images/project-15.jpg'),
    description:
      'Analyzed product and sales data using SQL to identify top performers, pricing gaps, and trends to support business growth.',
  },
  {
    title: "Discovering Melbourne's Hidden Gems using Python",
    href: 'https://github.com/vinitshetty16/City-of-Melbourne/tree/main',
    image: assetUrl('images/project-12.jpg'),
    description:
      'Created a dynamic map for Melbourne City Council using Python for tourist guidance on landmarks and food outlets.',
  },
  {
    title: 'Australian Football League Insights using Power BI',
    href: 'https://github.com/vinitshetty16/AFL-Insights-PowerBI',
    image: assetUrl('images/project-16.jpg'),
    description:
      'Designed an interactive AFL Insights Dashboard in Power BI to visualize team and player performance trends.',
  },
  {
    title: 'Smart Recycling using Deep Learning',
    href: 'https://github.com/vinitshetty16/Smart-Recycling-Deep-Learning/tree/main',
    image: assetUrl('images/proj_17.jpg'),
    description:
      'Developed a Smart Recycling system using Deep Learning techniques, including Data Augmentation and ResNet50 architecture.',
  },
  {
    title: 'Human Resources Insights using Tableau',
    href: 'https://github.com/vinitshetty16/Human-Resources-Insights-using-Tableau',
    image: assetUrl('images/proj_5.jpg'),
    description:
      'Designed an interactive HR dashboard in Tableau to visualize employee demographics and hiring trends.',
  },
  {
    title: 'Taxi Revenue Optimization - Hypothesis Testing',
    href: 'https://github.com/vinitshetty16/Maximizing-Revenue-for-Taxi-Cab-Hypothesis-Testing',
    image: assetUrl('images/taxi.jpg'),
    description:
      'Analyzed payment type impact on taxi fares using hypothesis testing to provide conclusions and recommendations.',
  },
]

export const stats = [
  { value: '3+', label: 'Professional Experience' },
  { value: '30', label: 'Projects', numeric: true },
  { value: '10', label: 'Certifications', numeric: true },
  { value: '∞', label: 'Cups of coffee' },
]

export const githubCta = {
  title: 'More projects on',
  highlight: 'GitHub',
  subtitle: 'I love to solve business problems & uncover hidden data stories',
}

export const contactIntro = 'Below are the details to reach out to me!'
