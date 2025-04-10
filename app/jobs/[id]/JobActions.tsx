'use client';

import { useState } from 'react';

interface JobActionsProps {
  job: {
    id: string;
    title: string;
    company: string;
    // Add other job properties as needed
  };
}

export default function JobActions({ job }: JobActionsProps) {
  const [isApplying, setIsApplying] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsApplying(true)}
        className="w-full btn-primary mb-4"
      >
        Apply Now
      </button>
      
      <button className="w-full btn-outline">
        Save Job
      </button>
    </>
  );
} 