'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsBriefcase, BsCurrencyDollar, BsGeoAlt, BsClock } from 'react-icons/bs';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salaryRange: string;
  jobType: string;
  postedAt: string;
  featured?: boolean;
}

export default function JobCard({ 
  id, 
  title, 
  company, 
  companyLogo, 
  location, 
  salaryRange, 
  jobType, 
  postedAt,
  featured = false
}: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`bg-white rounded-lg p-6 ${featured ? 'border-l-4 border-gold' : ''} shadow-card hover:shadow-hover transition-all duration-300`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 relative flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
          <Image 
            src={companyLogo} 
            alt={`${company} logo`}
            fill
            className="object-contain p-2"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-heading font-bold text-lg text-primary">
              {title}
            </h3>
            {featured && (
              <span className="bg-gold-light text-primary text-xs font-medium px-2 py-1 rounded">
                Featured
              </span>
            )}
          </div>
          
          <p className="text-accent font-medium mt-1">{company}</p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-sm text-gray-dark">
            <div className="flex items-center gap-2">
              <BsGeoAlt className="text-gray-dark" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsCurrencyDollar className="text-gray-dark" />
              <span>{salaryRange}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsBriefcase className="text-gray-dark" />
              <span>{jobType}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsClock className="text-gray-dark" />
              <span>{postedAt}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-medium">
        <Link href={`/jobs/${id}`}>
          <motion.button 
            className="w-full py-2 px-4 bg-accent hover:bg-accent-hover text-white rounded transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
} 