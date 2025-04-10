import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/logo-white.svg" 
                  alt="Elite Sales Recruitment" 
                  fill
                />
              </div>
              <span className="font-heading font-bold text-xl">EliteSales</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Connecting top sales talent with industry-leading employers since 2018.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="linkedin" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="facebook" />
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-6">For Candidates</h3>
            <ul className="space-y-3">
              <FooterLink href="/jobs">Browse Jobs</FooterLink>
              <FooterLink href="/candidates/profile">Create Profile</FooterLink>
              <FooterLink href="/resources/templates">CV Templates</FooterLink>
              <FooterLink href="/resources/blog">Career Advice</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-6">For Employers</h3>
            <ul className="space-y-3">
              <FooterLink href="/employers/post-job">Post a Job</FooterLink>
              <FooterLink href="/employers">Our Services</FooterLink>
              <FooterLink href="/resources/blog">Hiring Insights</FooterLink>
              <FooterLink href="/contact">Get in Touch</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg mb-6">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Recruitment Avenue</p>
              <p className="mb-2">San Francisco, CA 94103</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">contact@elitesales.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Elite Sales Recruitment. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-300 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a 
      href={href}
      className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{icon}</span>
      <div className="w-5 h-5 relative">
        <Image 
          src={`/icons/${icon}.svg`} 
          alt={icon} 
          fill
        />
      </div>
    </a>
  );
} 