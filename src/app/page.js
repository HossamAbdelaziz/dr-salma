import HeroSection from '../components/HeroSection';
import UnderstandSection from "../components/UnderstandSection"

import ServicesSection from "../components/ServicesSection"
import MeetSection from "../components/MeetSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection"



export default function Home() {
  return (
    <>
      <HeroSection />
      <UnderstandSection />
      <ServicesSection />
      <MeetSection />
      <TestimonialSection />
      <ContactSection />



      {/* TODO: add subsequent sections (SolutionsGrid, AboutSnippet, Testimonials, ContactForm, etc.) */}
    </>
  );
}
