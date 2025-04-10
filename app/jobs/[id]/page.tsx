import { notFound } from 'next/navigation';
import { jobsData } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';

// Define the props type explicitly
type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Use the defined props type
export default function Page({ params }: Props) {
  const job = jobsData.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 