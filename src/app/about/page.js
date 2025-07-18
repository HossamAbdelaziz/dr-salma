// src/app/about/page.js
import AboutBanner from "@/components/About/AboutBanner"
import MeetSection from "@/components/About/MeetSection"
import WhyChooseSection from "@/components/About/WhyChooseSection"
import EducationSection from "@/components/About/EducationSection"
import TransformSection from "@/components/About/TransformSection"
import TestimonialSection from "@/components/About/TestimonialSection"
import PhilosophyDiagram from "@/components/About/PhilosophyDiagram"
import ContactSection from "@/components/About/ContactSection"

export const metadata = {
    title: "About Dr. Salma | Women's Health",
    description: "Learn Dr. Salma’s journey from gynecologist to medical naturopath",
}

export default function AboutPage() {
    return (
        <>
            {/* Full‐width banner */}
            <AboutBanner />

            {/* Meet Dr. Salma intro */}
            <MeetSection />

            {/* Why Women Choose Dr. Salma feature grid */}
            <WhyChooseSection />

            {/* Educational Background + CTA */}
            <EducationSection />

            {/* Transforming Women's Lives block */}
            <TransformSection />

            {/* Testimonial quote + image */}
            <TestimonialSection />

            {/* Treatment Philosophy diagram */}
            <PhilosophyDiagram />

            {/* Reuse ContactSection at the bottom */}
            <ContactSection />
        </>
    )
}
