import { notFound } from 'next/navigation';
import { jobs } from '@/data/jobs';
import JobDetails from '@/components/JobDetails';
import { Metadata } from 'next';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

// Page component with correct type definition
export default async function Page({ params, searchParams }: Props) {
  const job = jobs.find((job) => job.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 