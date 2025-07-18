import React from "react";
import { FaHeartbeat, FaBalanceScale, FaStethoscope, FaLightbulb } from "react-icons/fa";

const philosophyItems = [
    {
        title: "Patient-Centered Care",
        desc: "Every woman’s health journey is unique and deserves personalized attention",
        icon: <FaHeartbeat className="text-[#ed7875] text-xl" />,
    },
    {
        title: "Integrative Approach",
        desc: "Combine the best of conventional medical knowledge with natural healing wisdom",
        icon: <FaBalanceScale className="text-[#ed7875] text-xl" />,
    },
    {
        title: "Root Cause Focus",
        desc: "Address underlying imbalances rather than just managing symptoms",
        icon: <FaStethoscope className="text-[#ed7875] text-xl" />,
    },
    {
        title: "Empowerment Through Education",
        desc: "Help women understand their bodies and take control of their health",
        icon: <FaLightbulb className="text-[#ed7875] text-xl" />,
    },
];

const PhilosophyDiagram = () => {
    return (
        <section className="bg-[#f6f6f6] py-16 px-4 md:px-12 font-sans relative overflow-x-hidden">
            {/* Title Box */}
            <div className="bg-[#ed7875] text-white text-center py-4 px-6 rounded-md mb-10 w-max mx-auto shadow">
                <h2 className="text-xl md:text-2xl font-semibold font-serif text-[#405a33]">
                    Treatment Philosophy
                </h2>
            </div>

            {/* Card Flow */}
            <div className="flex flex-wrap justify-center items-start gap-6 max-w-6xl mx-auto relative z-10">
                {philosophyItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border-2 border-[#ed7875] rounded-lg shadow-sm w-[270px] min-h-[180px] p-4 flex flex-col items-center text-center"
                    >
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f6f6f6] border border-[#ed7875] mb-2">
                            {item.icon}
                        </div>
                        <h3 className="text-[#405a33] font-semibold text-sm mb-2 font-serif">{item.title}</h3>
                        <p className="text-xs text-[#405a33]">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Optional SVG curved arrows or connector lines can go here */}
        </section>
    );
};

export default PhilosophyDiagram;
