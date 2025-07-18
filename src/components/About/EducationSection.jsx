import React from "react";
import { FaPaperclip } from "react-icons/fa";
import Image from "next/image";

// Replace with your actual icon file
import educationIcon from "/public/icons/education-icon.png";

const educationList = [
    {
        title: "Medical Degree",
        detail: "Gynecology specialization with 20+ years clinical experience",
    },
    {
        title: "Naturopathic Training",
        detail: "Comprehensive natural medicine education",
    },
    {
        title: "Clinical Homeopathy Diploma",
        detail:
            "Center for Education and Development of Clinical Homeopathy (CEDH)",
    },
    {
        title: "Traditional Chinese Medicine",
        detail: "Acupuncture and TCM protocols",
    },
    {
        title: "Continuing Education",
        detail:
            "Ongoing training in integrative women’s health approaches",
    },
];

const EducationSection = () => {
    return (
        <section className="bg-[#e8e7e7] py-10 px-4 md:px-8 font-sans">
            <div className="max-w-5xl mx-auto border border-[#ccc] rounded-md overflow-hidden md:flex shadow-sm">
                {/* Left Green Box */}
                <div className="bg-[#405a33] text-white flex flex-col items-center justify-center px-6 py-8 md:w-1/3">
                    <Image
                        src={educationIcon}
                        alt="Education Icon"
                        width={40}
                        height={40}
                        className="mb-4"
                    />
                    <h3 className="text-base font-semibold text-center leading-snug font-serif">
                        Educational <br /> Background
                    </h3>
                </div>

                {/* Right Coral Content */}
                <div className="bg-[#ed7875]/20 p-6 md:w-2/3 text-[#405a33] text-sm">
                    <ul className="space-y-4">
                        {educationList.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <FaPaperclip className="text-[#405a33] mt-1 text-[0.85rem]" />
                                <p>
                                    <span className="font-semibold">{item.title}:</span>{" "}
                                    {item.detail}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
