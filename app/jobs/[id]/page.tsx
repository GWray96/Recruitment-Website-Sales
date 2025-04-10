import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { BsGeoAlt, BsBriefcase, BsCurrencyDollar, BsClock, BsCheck2 } from 'react-icons/bs';
import { jobsData } from '../../../mock/jobs';
import JobActions from './JobActions';

type PageProps = {
  params: { id: string };
};

export default function JobDetailPage({ params }: PageProps) {
  const job = jobsData.find(job => job.id === params.id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-light py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Job Not Found</h1>
          <p className="text-gray-dark mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/jobs" className="btn-primary">
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={job.companyLogo}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                
                <div>
                  <h1 className="text-2xl font-bold text-primary mb-2">{job.title}</h1>
                  <p className="text-accent font-medium text-lg mb-4">{job.company}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-dark">
                    <div className="flex items-center gap-2">
                      <BsGeoAlt className="text-gray-dark" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsBriefcase className="text-gray-dark" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsCurrencyDollar className="text-gray-dark" />
                      <span>${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsClock className="text-gray-dark" />
                      <span>{job.postedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-primary mb-4">Job Description</h2>
                <p className="text-gray-dark mb-6">{job.description}</p>
                
                <h3 className="text-lg font-bold text-primary mb-3">Requirements</h3>
                <ul className="list-none space-y-2 mb-6">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <BsCheck2 className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-dark">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-bold text-primary mb-3">Benefits</h3>
                <ul className="list-none space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <BsCheck2 className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-gray-dark">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
              <h3 className="text-lg font-bold text-primary mb-4">Quick Apply</h3>
              <p className="text-gray-dark mb-6">
                Ready to take the next step in your career? Apply now to join {job.company} as a {job.title}.
              </p>
              
              <Suspense fallback={<div>Loading...</div>}>
                <JobActions job={job} />
              </Suspense>
              
              <div className="mt-6 pt-6 border-t border-gray-medium">
                <h4 className="font-bold text-primary mb-3">Share this job</h4>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-medium transition-colors">
                    <span className="sr-only">Share on LinkedIn</span>
                    <Image
                      src="/icons/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="w-10 h-10 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-medium transition-colors">
                    <span className="sr-only">Share on Twitter</span>
                    <Image
                      src="/icons/twitter.svg"
                      alt="Twitter"
                      width={20}
                      height={20}
                    />
                  </button>
                  <button className="w-10 h-10 bg-gray-light rounded-full flex items-center justify-center hover:bg-gray-medium transition-colors">
                    <span className="sr-only">Share on Facebook</span>
                    <Image
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 