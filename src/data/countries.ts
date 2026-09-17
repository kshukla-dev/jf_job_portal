import { Country } from '@/types/country';

export const countriesData: Country[] = [
  {
    code: 'NL',
    name: 'Netherlands',
    slug: 'netherlands',
    region: 'Western Europe',
    flagEmoji: '🇳🇱',
    activeJobs: 1450,
    featuredCities: ['Amsterdam', 'Eindhoven', 'Rotterdam', 'Utrecht', 'The Hague'],
    description: 'A global epicenter for semiconductor innovation, financial technology, and international corporate headquarters with attractive expat tax rulings (30% ruling).',
    visaInfo: 'Highly Skilled Migrant (Kennismigrant) Visa, EU Blue Card, Startup Visa.',
    averageSalary: '€65,000 - €110,000 / yr'
  },
  {
    code: 'IN',
    name: 'India',
    slug: 'india',
    region: 'South Asia',
    flagEmoji: '🇮🇳',
    activeJobs: 1120,
    featuredCities: ['Bangalore', 'Hyderabad', 'Pune', 'Mumbai', 'Delhi NCR'],
    description: 'The world’s fastest-growing enterprise technology hub and engineering innovation capital hosting Global Capability Centers (GCCs) for Fortune 500 companies.',
    visaInfo: 'Employment Visa (E-Visa), OCI card privileges for diaspora talent.',
    averageSalary: '₹18,00,000 - ₹45,00,000 / yr'
  },
  {
    code: 'DE',
    name: 'Germany',
    slug: 'germany',
    region: 'Central Europe',
    flagEmoji: '🇩🇪',
    activeJobs: 980,
    featuredCities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Stuttgart'],
    description: 'Europe’s economic powerhouse leading automotive engineering, green energy, industrial robotics, and deep tech startups.',
    visaInfo: 'Opportunity Card (Chancenkarte), EU Blue Card, Skilled Workers Act.',
    averageSalary: '€68,000 - €115,000 / yr'
  },
  {
    code: 'PL',
    name: 'Poland',
    slug: 'poland',
    region: 'Central/Eastern Europe',
    flagEmoji: '🇵🇱',
    activeJobs: 480,
    featuredCities: ['Warsaw', 'Kraków', 'Wrocław', 'Gdańsk'],
    description: 'Premier European R&D and shared services hub known for exceptional mathematical and software engineering talent.',
    visaInfo: 'Work Permit Type A, Poland Business Harbour scheme.',
    averageSalary: '140,000 - 240,000 PLN / yr'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    slug: 'united-kingdom',
    region: 'Northern Europe',
    flagEmoji: '🇬🇧',
    activeJobs: 760,
    featuredCities: ['London', 'Manchester', 'Edinburgh', 'Cambridge'],
    description: 'Leading global financial capital and AI research capital with deep venture investment and world-class universities.',
    visaInfo: 'Skilled Worker Visa, Global Talent Visa, High Potential Individual (HPI) Visa.',
    averageSalary: '£60,000 - £125,000 / yr'
  },
  {
    code: 'SG',
    name: 'Singapore',
    slug: 'singapore',
    region: 'Southeast Asia',
    flagEmoji: '🇸🇬',
    activeJobs: 320,
    featuredCities: ['Singapore City', 'Marina Bay', 'Changi Business Park'],
    description: 'Premier gateway to Southeast Asia, offering low tax rates, pro-business governance, and modern financial infrastructure.',
    visaInfo: 'Employment Pass (EP), COMPASS framework, Overseas Networks & Expertise (ONE) Pass.',
    averageSalary: 'SGD 110,000 - SGD 200,000 / yr'
  },
  {
    code: 'US',
    name: 'United States',
    slug: 'united-states',
    region: 'North America',
    flagEmoji: '🇺🇸',
    activeJobs: 890,
    featuredCities: ['New York', 'San Francisco', 'Austin', 'Seattle', 'Boston'],
    description: 'The global benchmark for technology venture capital, cloud architecture, and high-compensation executive roles.',
    visaInfo: 'H-1B Specialty Occupation, L-1 Intracompany Transferee, O-1 Extraordinary Ability.',
    averageSalary: '$120,000 - $220,000 / yr'
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    slug: 'united-arab-emirates',
    region: 'Middle East',
    flagEmoji: '🇦🇪',
    activeJobs: 290,
    featuredCities: ['Dubai', 'Abu Dhabi'],
    description: 'Zero personal income tax jurisdiction leading Middle Eastern logistics, real estate fintech, and AI governmental strategy.',
    visaInfo: '10-Year Golden Visa, Green Visa, Standard Employment Visa.',
    averageSalary: 'AED 240,000 - AED 450,000 / yr'
  }
];
