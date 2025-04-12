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

// Helper function to get job by ID
function getJobById(id: string) {
  return jobs.find((job) => job.id === id);
}

// Route handler
export default function Route(props: any) {
  // Extract the ID from the props
  const id = props.params?.id;
  
  if (!id) {
    notFound();
  }
  
  // Get the job using our helper function
  const job = getJobById(id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
} 