// src/components/MeetSection.jsx
"use client"

import Image from "next/image"
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const whyChoose = [
    "Medical Authority: Can interpret complex labs, understand diagnostic imaging, and recognize when conventional intervention is needed",
    "Natural Expertise: Comprehensive toolkit including nutrition, botanical medicine, TCM, and acupuncture",
    "Women’s Health Specialization: Deep understanding of hormonal complexities, reproductive health, and life transitions",
    "Integrative Approach: Bridges the gap between conventional and natural medicine",
]

const credentials = [
    "20+ Years Gynecological Experience",
    "Licensed Naturopathic Doctor",
    "Clinical Homeopathy Specialist (CEDH)",
    "Traditional Chinese Medicine & Acupuncture",
    "Available at Aurika Wellness & Eternal Wellness",
]

export default function MeetSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container space-y-12">
                {/* Section Heading */}
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center space-x-2">
                        <h2 className="text-3xl font-serif font-bold text-brand-green">
                            Meet Dr. Salma
                        </h2>
                        <Image
                            src="/images/butterfly.png"
                            alt="butterfly"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="mt-2 text-brand-green">
                        Where Medical Expertise Meets Natural Healing
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Portrait */}
                        <div className="mx-auto md:mx-0 w-full max-w-sm aspect-square rounded-lg overflow-hidden">
                            <Image
                                src="/images/dr-salma-hero.png"
                                alt="Dr. Salma portrait"
                                width={600}
                                height={600}
                                className="object-cover"
                            />
                        </div>

                        {/* Bio */}
                        <p className="text-brand-green text-base leading-relaxed">
                            Dr. Salma brings a rare combination that no other practitioner in Ontario can offer: 20+ years of gynecological expertise seamlessly integrated with comprehensive naturopathic and homeopathic training. This unique background allows her to provide what women have been searching for—the diagnostic confidence you trust with the natural solutions you seek.
                        </p>

                        {/* Journey */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-serif font-bold text-brand-green">
                                Her Journey
                            </h3>
                            <p className="text-brand-green text-base leading-relaxed">
                                After two decades as a practicing gynecologist, Dr. Salma realized that women needed more than conventional medicine could offer. She pursued advanced naturopathic training and earned her Clinical Homeopathy Diploma (CEDH), becoming Ontario’s premier Medical Naturopath specializing in complex women’s health conditions.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Why Choose */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-brand-green">
                                Why Women Choose Dr. Salma
                            </h3>
                            <ul className="space-y-3">
                                {whyChoose.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start space-x-3 text-brand-green text-base"
                                    >
                                        <FaCheckCircle className="mt-1 text-brand-coral" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Credentials */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-brand-green text-base">
                            {credentials.map((cred) => (
                                <li key={cred} className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-brand-coral" />
                                    <span>{cred}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Quote */}
                        <blockquote className="relative bg-brand-bg/50 p-6 rounded-lg italic text-brand-green leading-relaxed">
                            <FaQuoteLeft className="absolute top-4 left-4 text-brand-coral" />
                            <p className="ml-6">
                                I became a naturopath because I saw too many women leaving my office with prescriptions but not real solutions. Every woman deserves a practitioner who can understand both the medical complexity of her condition and offer gentle, effective natural alternatives that address root causes, not just symptoms.
                            </p>
                            <FaQuoteRight className="absolute bottom-4 right-4 text-brand-coral" />
                            <footer className="mt-4 text-right font-serif font-bold">
                                — Dr. Salma
                            </footer>
                        </blockquote>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/book-consultation"
                                className="w-full sm:w-auto bg-brand-coral text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-green transition text-center"
                            >
                                Book Your Consultation
                            </a>
                            <a
                                href="/about#approach"
                                className="w-full sm:w-auto border border-brand-coral text-brand-coral py-3 px-6 rounded-lg font-semibold hover:bg-brand-coral hover:text-white transition text-center"
                            >
                                Learn More About My Approach
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
