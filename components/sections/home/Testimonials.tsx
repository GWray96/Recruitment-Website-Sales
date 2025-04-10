'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { BsQuote, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Sales Executive",
    company: "TechVision Inc.",
    image: "/images/testimonials/sarah.jpg",
    quote: "Elite Sales Recruitment helped me find my dream role at a company that truly values sales excellence. The platform's focus on quality over quantity made all the difference in my job search."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Sales Director",
    company: "GrowthForce",
    image: "/images/testimonials/michael.jpg",
    quote: "As a hiring manager, I've found exceptional talent through this platform. The candidates are pre-screened and truly understand what it takes to succeed in sales."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Account Executive",
    company: "MedTech Solutions",
    image: "/images/testimonials/emily.jpg",
    quote: "The personalized approach and attention to detail in matching candidates with opportunities sets Elite Sales Recruitment apart. They truly understand the sales profession."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from sales professionals and employers who have found success through our platform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-light p-8 md:p-12 rounded-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <BsQuote className="w-8 h-8 text-accent mb-4 mx-auto md:mx-0" />
                  <p className="text-lg text-gray-dark mb-6">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div>
                    <h4 className="font-heading font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-accent">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <BsChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <BsChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
} 