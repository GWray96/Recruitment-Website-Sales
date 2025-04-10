import { Job } from '@/types/job';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'We are looking for a Senior Software Engineer to join our team...',
    requirements: [
      '5+ years of experience in software development',
      'Strong knowledge of React and TypeScript',
      'Experience with cloud platforms (AWS/GCP)',
      'Excellent problem-solving skills',
      'Strong communication skills'
    ],
    postedDate: '2024-03-20',
    applicationUrl: 'https://techcorp.com/careers'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $160,000',
    description: 'Join our product team to drive innovation and user experience...',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and strategic thinking',
      'Experience with agile methodologies',
      'Excellent communication and leadership skills',
      'Technical background is a plus'
    ],
    postedDate: '2024-03-19',
    applicationUrl: 'https://innovationlabs.com/jobs'
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'We are seeking a talented UX Designer to create beautiful and functional interfaces...',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio demonstrating user-centered design',
      'Experience with user research and testing',
      'Knowledge of design systems'
    ],
    postedDate: '2024-03-18',
    applicationUrl: 'https://designstudio.com/careers'
  }
];

export const getJobById = (id: string): Job | undefined => {
  return jobs.find(job => job.id === id);
}; 