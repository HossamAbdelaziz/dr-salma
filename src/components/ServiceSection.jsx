import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const ServiceSection = ({ title, description, bullets = [], image, reverse = false, ctaText, ctaLink }) => {
    return (
        <section className="py-16 px-6 md:px-20 bg-[#f4f4f4]">
            <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-10`}>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={image}
                        alt={title}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-md"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#405a33] mb-4">{title}</h2>
                    <p className="text-[#333] mb-6">{description}</p>

                    <ul className="mb-6 space-y-3">
                        {bullets.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="text-[#859f58]" size={20} />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {ctaText && (
                        <a
                            href={ctaLink}
                            className="inline-block px-6 py-2 bg-[#ed7875] text-white rounded hover:bg-[#405a33] transition"
                        >
                            {ctaText}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
