import Footer from "@/components/layout/Footer";
import NewsTicker from "@/components/home/NewsTicker";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import QuickLinks from "@/components/home/QuickLinks";
import BentoFeatures from "@/components/home/BentoFeatures";
import AcademicStreams from "@/components/home/AcademicStreams";
import ProgramsGallery from "@/components/home/ProgramsGallery";
import ClubsSocieties from "@/components/home/ClubsSocieties";
import Testimonials from "@/components/home/Testimonials";
import NewsEvents from "@/components/home/NewsEvents";
import CtaStrip from "@/components/home/CtaStrip";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header/>
      <NewsTicker />
      <Hero />
      <Stats />
      <PrincipalMessage />
      <QuickLinks />
      <BentoFeatures />
      <AcademicStreams />
      <ProgramsGallery />
      <ClubsSocieties />
      <Testimonials />
      <NewsEvents />
      <CtaStrip />
      <Footer />
    </main>
  );
}
