'use client';

import { motion } from 'framer-motion';
import { BsSearch, BsBriefcase, BsGraphUp, BsShieldCheck } from 'react-icons/bs';

const features = [
  {
    icon: BsSearch,
    title: "Curated Opportunities",
    description: "Access to premium sales positions at leading companies, carefully selected for top performers."
  },
  {
    icon: BsBriefcase,
    title: "Career Growth",
    description: "Connect with opportunities that align with your career goals and professional development."
  },
  {
    icon: BsGraphUp,
    title: "Performance Focus",
    description: "Platform designed for high-achieving sales professionals who consistently exceed targets."
  },
  {
    icon: BsShieldCheck,
    title: "Verified Employers",
    description: "Work with pre-vetted companies that value and invest in their sales teams."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Elite Sales Recruitment</h2>
          <p className="section-subtitle">
            We're not just another job board. We're a premium platform connecting elite sales talent with exceptional opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-light p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-dark">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 