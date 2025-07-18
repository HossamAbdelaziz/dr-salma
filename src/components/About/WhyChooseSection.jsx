import React from "react";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";

// Replace with actual icon paths
import medicalIcon from "/public/icons/medical-authority.png";
import healingIcon from "/public/icons/natural-healing.png";
import womenIcon from "/public/icons/womens-health.png";
import bridgeIcon from "/public/icons/integrative-bridge.png";

const WhyChooseSection = () => {
    return (
        <section className="bg-[#f6f6f6] py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#405a33] mb-2">
                    Why Women Choose Dr. Salma <span className="text-[#ed7875]">?</span>
                </h2>
                <div className="w-24 h-1 bg-[#ed7875] mx-auto mb-12"></div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-10 mb-12">
                    {/* Card Template */}
                    {[
                        {
                            icon: medicalIcon,
                            title: "Medical Authority",
                            points: [
                                "Can interpret complex labs, understand diagnostic imaging, and recognize when conventional intervention is needed",
                                "20+ years of gynecological diagnostic expertise that builds immediate trust",
                                "Understanding of when natural approaches are appropriate vs. when medical intervention is necessary",
                            ],
                        },
                        {
                            icon: healingIcon,
                            title: "Natural Healing Mastery",
                            points: [
                                "Comprehensive naturopathic toolkit including nutrition, botanical medicine, TCM, and acupuncture",
                                "Clinical Homeopathy specialization for individualized constitutional care",
                                "Holistic approach addressing root causes, not just symptoms",
                            ],
                        },
                        {
                            icon: womenIcon,
                            title: "Women's Health Specialization",
                            points: [
                                "Deep understanding of hormonal complexities, reproductive health, and life transitions",
                                "Expertise in conditions that disproportionately affect women",
                                "Culturally sensitive approach to women’s intimate health concerns",
                            ],
                        },
                        {
                            icon: bridgeIcon,
                            title: "Integrative Bridge",
                            points: [
                                "Only practitioner who can confidently navigate both conventional and natural medicine worlds",
                                "Seamless integration of medical diagnostic skills with comprehensive natural solutions",
                                "Evidence-based approach combining medical knowledge with natural health research",
                            ],
                        },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 text-center relative overflow-visible"
                        >
                            <div className="flex flex-col items-center mb-4 relative -mt-16">
                                <div className="w-[100px] h-[100px] flex items-center justify-center">
                                    <Image
                                        src={card.icon}
                                        alt={card.title}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-[#405a33] mt-4">{card.title}</h3>
                            </div>
                            <div className="space-y-3 mt-4 text-left">
                                {card.points.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <HiCheckCircle className="text-[#405a33] text-xl mt-1 shrink-0" />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Certification Section */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#ed7875]/20 px-6 py-6 rounded-lg text-sm md:text-base text-left md:text-center gap-6">
                    {/* Badge Placeholder (replace with image later) */}
                    <div className="flex items-center gap-4 text-[#405a33] font-medium">
                        <div className="min-w-[50px] min-h-[50px] bg-[#405a33] rounded-full flex items-center justify-center text-white text-sm">
                            Logo
                        </div>
                        <div>
                            <p>20+ Years Gynecological Experience</p>
                            <p>Licensed Naturopathic Doctor</p>
                            <p>Clinical Homeopathy Specialist (CEDH)</p>
                            <p>Traditional Chinese Medicine & Acupuncture</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-[#ed7875] text-white px-6 py-2 rounded-md hover:bg-[#c25e5b] transition">
                        Start Your Own Success Story
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
