'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import JobCard from '../../components/ui/JobCard';
import { jobsData } from '../../mock/jobs';
import { BsSearch, BsGeoAlt, BsBriefcase, BsCurrencyDollar } from 'react-icons/bs';

export default function JobsPage() {
  const [jobs, setJobs] = useState(jobsData);
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    category: '',
    salaryMin: '',
    remote: false
  });

  // Filter jobs based on current filters
  useEffect(() => {
    let filteredJobs = jobsData;
    
    if (filters.search) {
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.location) {
      filteredJobs = filteredJobs.filter(job => 
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.category) {
      filteredJobs = filteredJobs.filter(job => 
        job.category === filters.category
      );
    }
    
    if (filters.salaryMin) {
      filteredJobs = filteredJobs.filter(job => 
        job.salaryMin >= parseInt(filters.salaryMin)
      );
    }
    
    if (filters.remote) {
      filteredJobs = filteredJobs.filter(job => job.remote);
    }
    
    setJobs(filteredJobs);
  }, [filters]);

  const categories = Array.from(new Set(jobsData.map(job => job.category)));
  const locations = Array.from(new Set(jobsData.map(job => job.location)));

  return (
    <div className="bg-gray-light min-h-screen py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title">Sales Job Board</h1>
          <p className="section-subtitle">
            Browse our curated selection of top sales positions at leading companies worldwide.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-card p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-medium rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
            </div>
            
            <div className="relative">
              <BsGeoAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-medium rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <BsBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-medium rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <BsCurrencyDollar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark" />
              <input
                type="number"
                placeholder="Min Salary"
                className="w-full pl-10 pr-4 py-2 border border-gray-medium rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
                value={filters.salaryMin}
                onChange={(e) => setFilters({ ...filters, salaryMin: e.target.value })}
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="remote"
              className="rounded border-gray-medium text-accent focus:ring-accent"
              checked={filters.remote}
              onChange={(e) => setFilters({ ...filters, remote: e.target.checked })}
            />
            <label htmlFor="remote" className="ml-2 text-gray-dark">
              Remote Only
            </label>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        
        {jobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-dark mb-2">No jobs found</h3>
            <p className="text-gray-dark">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
} 