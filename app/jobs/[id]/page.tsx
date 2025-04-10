import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

// Make the page component async again
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 