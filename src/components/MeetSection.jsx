// src/components/MeetSection.jsx
"use client"

import Image from "next/image"
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export default function MeetSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 space-y-8">
                {/* Title */}
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
                    <p className="text-brand-green mt-2">
                        Where Medical Expertise Meets Natural Healing
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row md:space-x-12 items-start">
                    {/* Left: Portrait & Bio */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden mb-6">
                            <Image
                                src="/images/dr-salma-hero.png"
                                alt="Dr. Salma portrait"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <p className="text-brand-green mb-4 text-sm md:text-base">
                            Dr. Salma brings a rare combination that no other practitioner in Ontario can offer: 20+ years of gynecological expertise seamlessly integrated with comprehensive naturopathic and homeopathic training. This unique background allows her to provide what women have been searching for—the diagnostic confidence you trust with the natural solutions you seek.
                        </p>
                        <h3 className="font-serif text-xl font-bold text-brand-green mb-2">
                            Her Journey:
                        </h3>
                        <p className="text-brand-green text-sm md:text-base">
                            After two decades as a practicing gynecologist, Dr. Salma realized that women needed more than conventional medicine could offer. She pursued advanced naturopathic training and earned her Clinical Homeopathy Diploma (CEDH), becoming Ontario’s premier Medical Naturopath specializing in complex women’s health conditions.
                        </p>
                    </div>

                    {/* Right: Why Choose + Bullet List + Quote + CTAs */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-6">
                        {/* Why Choose */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-brand-green mb-4">
                                Why Women Choose Dr. Salma:
                            </h3>
                            <ul className="space-y-3 text-brand-green text-sm md:text-base">
                                {[
                                    "Medical Authority: Can interpret complex labs, understand diagnostic imaging, and recognize when conventional intervention is needed",
                                    "Natural Expertise: Comprehensive toolkit including nutrition, botanical medicine, TCM, and acupuncture",
                                    "Women’s Health Specialization: Deep understanding of hormonal complexities, reproductive health, and life transitions",
                                    "Integrative Approach: Bridges the gap between conventional and natural medicine"
                                ].map((item) => (
                                    <li key={item} className="flex items-start space-x-2">
                                        <FaCheckCircle className="mt-1 text-brand-coral" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Credential Bullets */}
                        <div className="space-y-2 text-brand-green text-sm md:text-base">
                            <ul className="space-y-2">
                                {[
                                    "20+ Years Gynecological Experience",
                                    "Licensed Naturopathic Doctor",
                                    "Clinical Homeopathy Specialist (CEDH)",
                                    "Traditional Chinese Medicine & Acupuncture",
                                    "Available at Aurika Wellness & Eternal Wellness"
                                ].map((cred) => (
                                    <li key={cred} className="flex items-center space-x-2">
                                        <FaCheckCircle className="text-brand-coral" />
                                        <span>{cred}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quote */}
                        <blockquote className="relative bg-brand-bg/50 p-6 rounded-lg text-brand-green italic">
                            <FaQuoteLeft className="absolute top-4 left-4 text-brand-coral" />
                            <p className="ml-6">
                                I became a naturopath because I saw too many women leaving my office with prescriptions but not real solutions. Every woman deserves a practitioner who can understand both the medical complexity of her condition and offer gentle, effective natural alternatives that address root causes, not just symptoms.
                            </p>
                            <FaQuoteRight className="absolute bottom-4 right-4 text-brand-coral" />
                            <footer className="text-right mt-4 font-serif font-bold">
                                — Dr. Salma
                            </footer>
                        </blockquote>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <a
                                href="/book-consultation"
                                className="bg-brand-coral text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-green transition text-center"
                            >
                                Book Your Consultation
                            </a>
                            <a
                                href="/about#approach"
                                className="bg-transparent border border-brand-coral text-brand-coral py-3 px-6 rounded-lg font-semibold hover:bg-brand-coral hover:text-white transition text-center"
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
