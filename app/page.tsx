import type { Metadata } from "next";
import NewsTicker from "@/components/home/NewsTicker";

export const metadata: Metadata = {
  title: 'Home | Saranath College - Wisdom & Virtue',
  description: 'Welcome to Saranath College. A century-old institution dedicated to academic excellence, character development, and community service. Explore our programs, legacy, and campus life.',
}

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import QuickLinks from "@/components/home/QuickLinks";
import BentoFeatures from "@/components/home/BentoFeatures";
import AcademicStreams from "@/components/home/AcademicStreams";
import ProgramsGallery from "@/components/home/ProgramsGallery";
import SchoolGallery from "@/components/home/SchoolGallery";
import ClubsSocieties from "@/components/home/ClubsSocieties";
import Testimonials from "@/components/home/Testimonials";
import NewsEvents from "@/components/home/NewsEvents";
import CtaStrip from "@/components/home/CtaStrip";

export default function Home() {
  return (
    <main>
      <NewsTicker />
      <Hero />
      <Stats />
      <PrincipalMessage />
      <QuickLinks />
      <BentoFeatures />
      <AcademicStreams />
      <ProgramsGallery />
      <SchoolGallery />
      <ClubsSocieties />
      <Testimonials />
      <NewsEvents />
      <CtaStrip />
    </main>
  );
}
