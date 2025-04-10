import Link from 'next/link';
import Hero from '../components/sections/home/Hero';
import FeaturedJobs from '../components/sections/home/FeaturedJobs';
import ValueProposition from '../components/sections/home/ValueProposition';
import Testimonials from '../components/sections/home/Testimonials';
import CallToAction from '../components/sections/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedJobs />
      <Testimonials />
      <CallToAction />
    </>
  );
} 