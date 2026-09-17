export type EmploymentType = 'Full Time' | 'Permanent' | 'Contract' | 'Part Time' | 'Remote';

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  country: string;
  city: string;
  type: EmploymentType;
  experience: string;
  skills: string[];
  postedTime: string;
  salary?: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  industry?: string;
  isFeatured?: boolean;
}

export interface JobSearchParams {
  keyword?: string;
  location?: string;
  jobType?: string;
}
