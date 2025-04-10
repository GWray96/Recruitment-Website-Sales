import React from 'react';
import { Job } from '../types/job';
import JobActions from './JobActions';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
          <p className="text-gray-600 mt-1">{job.company}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <span>{job.location}</span>
            <span className="mx-2">•</span>
            <span>{job.type}</span>
            {job.salary && (
              <>
                <span className="mx-2">•</span>
                <span>{job.salary}</span>
              </>
            )}
          </div>
        </div>
        {job.companyLogo && (
          <img
            src={job.companyLogo}
            alt={`${job.company} logo`}
            className="w-12 h-12 object-contain"
          />
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-gray-600 line-clamp-2">{job.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.requirements.slice(0, 3).map((req, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {req}
          </span>
        ))}
        {job.requirements.length > 3 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            +{job.requirements.length - 3} more
          </span>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <JobActions job={job} />
      </div>
    </div>
  );
};

export default JobCard; 