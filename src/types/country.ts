export interface Country {
  code: string;
  name: string;
  slug: string;
  region: string;
  flagEmoji: string;
  activeJobs: number;
  featuredCities: string[];
  description: string;
  visaInfo?: string;
  averageSalary?: string;
}
