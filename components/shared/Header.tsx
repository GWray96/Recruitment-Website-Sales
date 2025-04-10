'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image 
              src="/logo.svg" 
              alt="Elite Sales Recruitment" 
              fill
              priority
            />
          </div>
          <span className="font-heading font-bold text-xl text-primary">EliteSales</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/jobs">Jobs</NavLink>
          <NavLink href="/candidates">For Candidates</NavLink>
          <NavLink href="/employers">For Employers</NavLink>
          <NavLink href="/resources">Resources</NavLink>
          <NavLink href="/about">About</NavLink>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="w-6 h-6 flex items-center justify-center relative">
            <span 
              className={`block w-6 h-0.5 bg-primary absolute transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-primary absolute transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-primary absolute transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
            ></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-medium"
        >
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <MobileNavLink href="/jobs" onClick={() => setMobileMenuOpen(false)}>
              Jobs
            </MobileNavLink>
            <MobileNavLink href="/candidates" onClick={() => setMobileMenuOpen(false)}>
              For Candidates
            </MobileNavLink>
            <MobileNavLink href="/employers" onClick={() => setMobileMenuOpen(false)}>
              For Employers
            </MobileNavLink>
            <MobileNavLink href="/resources" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <Link 
              href="/contact" 
              className="btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-primary hover:text-accent font-medium transition-colors">
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) {
  return (
    <Link 
      href={href} 
      className="text-primary text-lg py-2 border-b border-gray-medium hover:text-accent transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 