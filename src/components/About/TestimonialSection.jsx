import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Replace with the actual testimonial photo
import drSalmaImage from "/public/images/dr-salma-testimonial.png";

const TestimonialSection = () => {
    return (
        <section className="bg-[#e8e7e7] py-12 px-4 md:px-12 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left Quote Block */}
                <div className="w-full md:w-2/3 text-[#405a33] relative">
                    <FaQuoteLeft className="text-[#405a33] text-2xl mb-4" />
                    <p className="text-sm md:text-base leading-relaxed">
                        I became a naturopath because I saw too many women leaving my office with prescriptions
                        but not real solutions. Every woman deserves a practitioner who can understand both the
                        medical complexity of her condition and offer gentle, effective natural alternatives
                        that address root causes, not just symptoms.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#405a33] underline underline-offset-2">
                        Dr. Salma
                    </p>
                    <FaQuoteRight className="text-[#405a33] text-2xl absolute bottom-0 right-0" />
                </div>

                {/* Right Image Block */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="rounded-xl overflow-hidden border-4 border-[#ed7875] max-w-[240px]">
                        <Image
                            src={drSalmaImage}
                            alt="Dr. Salma"
                            width={240}
                            height={300}
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
