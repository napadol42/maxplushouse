import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSummary from "@/components/AboutSummary";
import ContactSection from "@/components/ContactSection";
import { getFeaturedProjects } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <AboutSummary />
      <ContactSection />
    </>
  );
}
