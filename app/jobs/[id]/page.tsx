import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';
import { Metadata } from 'next';

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const job = jobs.find((job) => job.id === params.id);
  
  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }
  
  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
  };
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