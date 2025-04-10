import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';

// Define the props type for Next.js pages
type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Use the correct Next.js page props type
export default function Page({ params }: PageProps) {
  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 