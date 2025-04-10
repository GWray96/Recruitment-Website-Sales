'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-primary text-white relative overflow-hidden py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/images/pattern.svg" 
          alt="" 
          fill 
          className="object-cover" 
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Where Elite <span className="text-gold">Sales Talent</span> Meets Opportunity
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Connecting top-performing sales professionals with industry-leading companies to drive revenue growth and career success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/jobs" className="btn-primary">
                Find Sales Jobs
              </Link>
              <Link href="/employers" className="btn-secondary">
                Hire Sales Talent
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image 
              src="/images/hero-illustration.svg" 
              alt="Sales professionals achieving success" 
              width={600} 
              height={500} 
              className="w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 