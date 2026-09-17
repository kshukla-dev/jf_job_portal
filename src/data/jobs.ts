import { Job } from '@/types/job';
import { FilterChip, StatisticItem } from '@/types/common';

export const featuredJobs: Job[] = [
  {
    id: 'job-1',
    slug: 'software-engineer-asml',
    title: 'Software Engineer',
    company: 'ASML',
    companyLogo: '/images/logos/asml.svg',
    location: 'Eindhoven, Netherlands',
    country: 'Netherlands',
    city: 'Eindhoven',
    type: 'Full Time',
    experience: '3–5 Yrs',
    skills: ['Angular', 'TypeScript', '.NET'],
    postedTime: '2 days ago',
    salary: '€75,000 - €95,000 / yr',
    industry: 'IT & Software',
    isFeatured: true,
    description: 'ASML is seeking an experienced Software Engineer to develop cutting-edge lithography software systems in Eindhoven. You will work on high-reliability, micro-precision software modules utilizing Angular, TypeScript, and .NET core backends.',
    responsibilities: [
      'Design, implement, and unit-test high-precision industrial software components',
      'Collaborate with cross-functional multidisciplinary mechatronic engineering teams',
      'Participate in code reviews, architectural blueprints, and agile sprint ceremonies',
      'Drive continuous integration and deployment automation across test benches'
    ],
    requirements: [
      '3 to 5 years of software engineering experience in modern TypeScript and .NET',
      'Solid foundation in Angular frontend architecture and REST/gRPC API design',
      'Fluency in English; experience in European high-tech or semiconductor domains is a plus'
    ]
  },
  {
    id: 'job-2',
    slug: 'data-analyst-ing',
    title: 'Data Analyst',
    company: 'ING',
    companyLogo: '/images/logos/ing.svg',
    location: 'Amsterdam, Netherlands',
    country: 'Netherlands',
    city: 'Amsterdam',
    type: 'Permanent',
    experience: '2–4 Yrs',
    skills: ['SQL', 'Power BI', 'Excel'],
    postedTime: '1 day ago',
    salary: '€60,000 - €78,000 / yr',
    industry: 'Finance & Banking',
    isFeatured: true,
    description: 'Join ING’s Analytics Centre of Excellence in Amsterdam. In this role, you will synthesize complex transactional datasets into actionable insights for financial risk management and customer intelligence.',
    responsibilities: [
      'Develop interactive Power BI executive dashboards and analytical reports',
      'Write complex, performant SQL queries across distributed relational and lakehouse data stores',
      'Deliver variance analysis, KPI metrics, and business forecasting models'
    ],
    requirements: [
      '2 to 4 years of proven analytics experience within banking or fintech',
      'Advanced SQL and Power BI modeling capabilities',
      'Bachelor’s or Master’s in Econometrics, Data Science, or Finance'
    ]
  },
  {
    id: 'job-3',
    slug: 'product-manager-booking',
    title: 'Product Manager',
    company: 'Booking.com',
    companyLogo: '/images/logos/booking.svg',
    location: 'Amsterdam, Netherlands',
    country: 'Netherlands',
    city: 'Amsterdam',
    type: 'Full Time',
    experience: '5–8 Yrs',
    skills: ['Product', 'Strategy', 'Agile'],
    postedTime: '3 days ago',
    salary: '€90,000 - €120,000 / yr',
    industry: 'IT & Software',
    isFeatured: true,
    description: 'Booking.com is looking for an energetic, data-driven Product Manager to optimize conversion funnels and user experience for millions of global travelers.',
    responsibilities: [
      'Formulate product roadmap and define feature specs through rigorous A/B experimentation',
      'Lead an autonomous squad of engineers, designers, and data scientists',
      'Align cross-company stakeholder teams with product strategy and measurable OKRs'
    ],
    requirements: [
      '5+ years leading digital consumer products at scale',
      'Proven expertise in multivariate hypothesis testing and behavioral metrics',
      'Exceptional stakeholder facilitation and verbal communication'
    ]
  },
  {
    id: 'job-4',
    slug: 'hr-business-partner-tata',
    title: 'HR Business Partner',
    company: 'Tata Consultancy Services',
    companyLogo: '/images/logos/tata.svg',
    location: 'Bangalore, India',
    country: 'India',
    city: 'Bangalore',
    type: 'Full Time',
    experience: '4–6 Yrs',
    skills: ['HR', 'Talent Management', 'L&D'],
    postedTime: '1 day ago',
    salary: '₹18,00,000 - ₹26,00,000 / yr',
    industry: 'HR & Recruitment',
    isFeatured: true,
    description: 'Tata Consultancy Services is hiring an HR Business Partner for its Bangalore delivery center. You will collaborate closely with enterprise engineering leaders to drive workforce planning, talent retention, and leadership development programs.',
    responsibilities: [
      'Partner with business unit heads on staffing forecasts and retention strategy',
      'Facilitate performance reviews, promotions, and competency leveling frameworks',
      'Execute organizational culture initiatives and employee engagement summits'
    ],
    requirements: [
      '4 to 6 years of strategic HRBP experience in top-tier IT or consulting firms',
      'Master’s degree in Human Resource Management (MBA / MSW)',
      'Expertise in Indian statutory labor compliance and talent mobility frameworks'
    ]
  },
  {
    id: 'job-5',
    slug: 'cloud-security-architect-adyen',
    title: 'Cloud Security Architect',
    company: 'Adyen',
    companyLogo: '/images/logos/adyen.svg',
    location: 'Amsterdam, Netherlands',
    country: 'Netherlands',
    city: 'Amsterdam',
    type: 'Permanent',
    experience: '6–10 Yrs',
    skills: ['AWS', 'Kubernetes', 'PCI-DSS'],
    postedTime: '4 days ago',
    salary: '€105,000 - €135,000 / yr',
    industry: 'Finance & Banking',
    isFeatured: false,
    description: 'Adyen is looking for a senior Cloud Security Architect to protect global payment transaction infrastructure handling billions of dollars daily.',
    responsibilities: [
      'Architect zero-trust security postures across hybrid multi-cloud clusters',
      'Ensure continuous compliance with international banking security mandates (PCI-DSS Level 1)',
      'Conduct automated vulnerability remediation and infrastructure-as-code linting'
    ],
    requirements: [
      '6+ years in DevSecOps, Kubernetes hardening, and AWS cloud security',
      'Relevant security certifications (CISSP, CISM, or AWS Security Specialty)'
    ]
  },
  {
    id: 'job-6',
    slug: 'lead-systems-engineer-philips',
    title: 'Lead Systems Engineer',
    company: 'Philips',
    companyLogo: '/images/logos/philips.svg',
    location: 'Eindhoven, Netherlands',
    country: 'Netherlands',
    city: 'Eindhoven',
    type: 'Full Time',
    experience: '5–8 Yrs',
    skills: ['Medical Devices', 'C++', 'ISO 13485'],
    postedTime: '5 days ago',
    salary: '€80,000 - €105,000 / yr',
    industry: 'Healthcare',
    isFeatured: false,
    description: 'Philips Healthcare is advancing diagnostic imaging technology. Join our systems engineering division to innovate patient monitoring hardware and software telemetry.',
    responsibilities: [
      'Define system architecture for next-generation medical imaging hardware',
      'Ensure strict regulatory adherence to FDA and MDR medical device documentation'
    ],
    requirements: [
      '5+ years in safety-critical systems or medical equipment R&D',
      'Degree in Biomedical Engineering, Mechatronics, or Electrical Engineering'
    ]
  },
  {
    id: 'job-7',
    slug: 'energy-transition-analyst-shell',
    title: 'Energy Transition Analyst',
    company: 'Shell',
    companyLogo: '/images/logos/shell.svg',
    location: 'Rotterdam, Netherlands',
    country: 'Netherlands',
    city: 'Rotterdam',
    type: 'Contract',
    experience: '3–6 Yrs',
    skills: ['Renewables', 'Financial Modeling', 'ESG'],
    postedTime: '2 days ago',
    salary: '€70,000 - €88,000 / yr',
    industry: 'Engineering',
    isFeatured: false,
    description: 'Analyze feasibility and carbon offset trajectories for hydrogen and offshore wind infrastructure projects across Northwestern Europe.',
    responsibilities: [
      'Build long-term techno-economic models for clean hydrogen generation',
      'Assess regulatory carbon tariffs and EU ETS trade dynamics'
    ],
    requirements: [
      'Experience in renewable energy infrastructure valuation and modeling'
    ]
  },
  {
    id: 'job-8',
    slug: 'global-mobility-specialist-randstad',
    title: 'Global Mobility Specialist',
    company: 'Randstad',
    companyLogo: '/images/logos/randstad.svg',
    location: 'Frankfurt, Germany',
    country: 'Germany',
    city: 'Frankfurt',
    type: 'Full Time',
    experience: '3–5 Yrs',
    skills: ['Immigration', 'Relocation', 'Expat Tax'],
    postedTime: '3 days ago',
    salary: '€55,000 - €72,000 / yr',
    industry: 'HR & Recruitment',
    isFeatured: false,
    description: 'Facilitate smooth international relocations, visa applications, and tax compliance for highly skilled foreign talent moving across EU and APAC borders.',
    responsibilities: [
      'Manage corporate relocation workflows and visa sponsorships end-to-end',
      'Counsel expatriate candidates on housing, tax equalization, and local registration'
    ],
    requirements: [
      'Deep familiarity with EU Blue Card and national skilled worker visa processes'
    ]
  }
];

export const filterChips: FilterChip[] = [
  { id: 'remote', label: 'Remote', type: 'workstyle' },
  { id: 'netherlands', label: 'Netherlands', type: 'location' },
  { id: 'india', label: 'India', type: 'location' },
  { id: 'poland', label: 'Poland', type: 'location' },
  { id: 'germany', label: 'Germany', type: 'location' },
  { id: 'contract', label: 'Contract', type: 'type' },
  { id: 'permanent', label: 'Permanent', type: 'type' },
  { id: 'it-software', label: 'IT & Software', type: 'industry' },
  { id: 'finance', label: 'Finance', type: 'industry' },
  { id: 'hr', label: 'HR', type: 'industry' },
  { id: 'marketing', label: 'Marketing', type: 'industry' },
];

export const portalStatistics: StatisticItem[] = [
  {
    id: 'stat-jobs',
    value: '5,000+',
    label: 'Jobs Worldwide',
    icon: 'briefcase',
  },
  {
    id: 'stat-companies',
    value: '500+',
    label: 'Trusted Companies',
    icon: 'building',
  },
  {
    id: 'stat-countries',
    value: '50+',
    label: 'Countries',
    icon: 'globe',
  },
  {
    id: 'stat-satisfaction',
    value: '98%',
    label: 'Client Satisfaction',
    icon: 'smile',
  },
];
