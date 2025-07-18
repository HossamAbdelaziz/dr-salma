import React from "react";
import butterflyIcon from "/public/images/butterfly.png"; // Replace with correct path to your butterfly icon
import Image from "next/image";

const AboutDrSalmaSection = () => {
    return (
        <section className="bg-[#f8f9fa] py-12 px-4 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center">
                {/* Header Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#405a33] mb-2">
                    Meet Dr. Salma
                </h2>
                <div className="flex justify-center items-center gap-2 mb-4">
                    <p className="text-sm md:text-base text-gray-600 italic">
                        Where Medical Expertise Meets Natural Healing
                    </p>
                    <Image src={butterflyIcon} alt="Butterfly Icon" width={20} height={20} />
                </div>

                {/* Highlighted Banner */}
                <div className="bg-[#ed7875] text-white font-semibold py-3 px-6 inline-block rounded-sm mb-8">
                    <p className="text-lg md:text-xl">From Gynecologist to Medical Naturopath</p>
                    <p className="text-base font-normal mt-1 italic">A Journey of Healing</p>
                </div>

                {/* Two-column content */}
                <div className="grid md:grid-cols-2 gap-8 text-left text-gray-800">
                    <div>
                        <p>
                            Dr. Salma brings a rare combination that no other practitioner in Ontario can offer: 20+ years of gynecological expertise seamlessly integrated with comprehensive naturopathic and homeopathic training. This unique background allows her to provide what women have been searching for—the diagnostic confidence you trust with the natural solutions you seek.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Her Transformative Journey:</h3>
                        <p>
                            After two decades as a practicing gynecologist, Dr. Salma recognized that women needed more than conventional medicine could offer. She witnessed too many patients leaving her office with prescriptions but not real solutions. This realization led her to pursue advanced naturopathic training and earn her Clinical Homeopathy Diploma from the Center for Education and Development of Clinical Homeopathy (CEDH), becoming Ontario’s premier Medical Naturopath specializing in complex women’s health conditions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutDrSalmaSection;
