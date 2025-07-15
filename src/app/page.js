import HeroSection from '../components/HeroSection';
import UnderstandSection from "../components/UnderstandSection"

import ServicesSection from "../components/ServicesSection"
import MeetSection from "../components/MeetSection";
import TestimonialSection from "../components/TestimonialSection";



export default function Home() {
  return (
    <>
      <HeroSection />
      <UnderstandSection />

      <ServicesSection />
      <MeetSection />
      <TestimonialSection />



      {/* TODO: add subsequent sections (SolutionsGrid, AboutSnippet, Testimonials, ContactForm, etc.) */}
    </>
  );
}
