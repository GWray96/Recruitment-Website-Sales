export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  benefits: string[];
  companyLogo?: string;
  companyWebsite?: string;
  applicationUrl?: string;
} 