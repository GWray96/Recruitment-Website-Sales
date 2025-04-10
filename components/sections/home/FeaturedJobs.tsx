'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import JobCard from '../../../components/ui/JobCard';
import { jobsData } from '../../../mock/jobs';

export default function FeaturedJobs() {
  const featuredJobs = jobsData.filter(job => job.featured).slice(0, 3);
  
  return (
    <section className="py-20 bg-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Opportunities</h2>
          <p className="section-subtitle">
            Discover premium sales positions at industry-leading companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <JobCard
                id={job.id}
                title={job.title}
                company={job.company}
                companyLogo={job.companyLogo}
                location={job.location}
                salaryRange={`$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`}
                jobType={job.type}
                postedAt={job.postedAt}
                featured={job.featured}
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/jobs" className="btn-primary">
              View All Jobs
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 