'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Sales Career to the Next Level?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Join thousands of successful sales professionals who have found their ideal roles through our platform. Whether you're looking for your next opportunity or seeking top talent, we're here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Browse Jobs
              </Link>
              <Link href="/employers" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Post a Job
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-300">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">1000+</div>
              <div className="text-gray-300">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">5000+</div>
              <div className="text-gray-300">Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 