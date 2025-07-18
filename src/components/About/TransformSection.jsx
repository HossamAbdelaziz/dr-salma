import React from "react";
import Image from "next/image";

// Flag Images
import ukFlag from "/public/flags/uk.png";
import canadaFlag from "/public/flags/canada.png";
import usaFlag from "/public/flags/usa.png";
import uaeFlag from "/public/flags/uae.png";
import qatarFlag from "/public/flags/qatar.png";
import egyptFlag from "/public/flags/egypt.png";
import ksaFlag from "/public/flags/ksa.png";

// Paint Stroke Image
import paintStroke from "/public/images/paint-stroke.png";

const TransformSection = () => {
    return (
        <section className="bg-[#e8e7e7] py-12 px-4 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
                {/* Left side: paint stroke with full image and overlaid text */}
                <div className="w-full md:w-1/2 relative h-[220px] md:h-[260px]">
                    <Image
                        src={paintStroke}
                        alt="Paint Stroke"
                        fill
                        className="object-contain"
                        priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                        <p className="text-[#405a33] font-serif font-semibold text-sm md:text-base leading-snug">
                            Transforming Women’s <br /> Lives Across Continents
                        </p>

                    </div>
                </div>

                {/* Right side: stats and flags */}
                <div className="w-full md:w-1/2 text-[#405a33] space-y-4">
                    <h3 className="text-2xl font-semibold font-serif">
                        1,500+ Patients
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 italic">
                        Helped across 7+ countries worldwide
                    </p>
                    <p className="text-sm leading-relaxed">
                        Dr. Salma’s expertise in medical naturopathy has touched lives across seven countries,
                        helping women overcome complex health challenges and reclaim their vitality. From
                        Toronto to Dubai, from London to Cairo, women trust Dr. Salma’s unique combination of
                        medical expertise and natural healing solutions.
                    </p>

                    {/* Flags */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {[ukFlag, canadaFlag, usaFlag, uaeFlag, qatarFlag, egyptFlag, ksaFlag].map((flag, i) => (
                            <Image
                                key={i}
                                src={flag}
                                alt={`flag-${i}`}
                                width={40}
                                height={40}
                                className="rounded-full border border-[#405a33]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformSection;
