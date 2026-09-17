export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'executive-search',
    slug: 'executive-search',
    title: 'Executive Search & Leadership Advisory',
    description: 'Bespoke headhunting for C-suite, VP, and Director level talent across European and global headquarters.',
    features: ['Board member placements', 'Confidential search mandates', 'Leadership assessment']
  },
  {
    id: 'global-mobility',
    slug: 'global-mobility-support',
    title: 'Global Mobility & Visa Relocation',
    description: 'End-to-end relocation management, sponsorship compliance, and tax consultation for international hires.',
    features: ['Work permit handling', 'Tax treaty guidance', 'Family settlement assistance']
  },
  {
    id: 'contingent-rpo',
    slug: 'rpo-talent-solutions',
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'Embedded talent acquisition teams dedicated to rapidly scaling enterprise engineering and corporate divisions.',
    features: ['Dedicated talent partners', 'Employer branding support', 'Optimized time-to-hire']
  }
];
