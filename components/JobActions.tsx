import React from 'react';
import { Job } from '../types/job';

interface JobActionsProps {
  job: Job;
}

const JobActions: React.FC<JobActionsProps> = ({ job }) => {
  const handleApply = () => {
    if (job.applicationUrl) {
      window.open(job.applicationUrl, '_blank');
    }
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving job:', job.id);
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Sharing job:', job.id);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleApply}
        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Apply Now
      </button>
      <button
        onClick={handleSave}
        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        title="Save job"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </button>
      <button
        onClick={handleShare}
        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        title="Share job"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>
    </div>
  );
};

export default JobActions; 