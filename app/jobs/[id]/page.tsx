import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';

// Define the props type for Next.js pages
type PageProps = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Make the page component async
export default async function Page({ params }: PageProps) {
  // In a real app, this would be an async operation
  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 