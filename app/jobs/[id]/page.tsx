import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';

// Use Next.js's built-in types
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, this would be an async operation
  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 