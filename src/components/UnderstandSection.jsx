// src/components/UnderstandSection.jsx
import { FaCheckCircle } from "react-icons/fa"

export default function UnderstandSection() {
    return (
        <section className="py-16 bg-brand-bg">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Text Block */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-green">
                        Finally, Someone Who Understands What You're Going Through
                    </h2>
                    <p className="text-brand-green text-base md:text-lg">
                        Dr. Salma combines 20+ years of medical expertise with natural healing to address the root causes of your health concerns.
                    </p>
                </div>

                {/* Right Highlight Box */}
                <div className="bg-brand-coral/20 p-6 rounded-lg">
                    <h3 className="text-2xl font-serif font-bold text-brand-green mb-4">
                        The Medical Naturopath Difference
                    </h3>
                    <ul className="space-y-3">
                        {[
                            "20+ Years Gynecological Experience",
                            "Licensed Naturopathic Doctor",
                            "Clinical Homeopathy Specialist (CEDH)"
                        ].map((item) => (
                            <li key={item} className="flex items-start space-x-3">
                                <FaCheckCircle className="mt-1 text-brand-green" />
                                <span className="text-brand-green">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}
