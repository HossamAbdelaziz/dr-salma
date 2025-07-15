// src/components/TestimonialSection.jsx
"use client"

import Image from "next/image"

const testimonials = [
    {
        id: 1,
        name: "Sarah M., Toronto",
        challenge:
            "I struggled with PCOS for 8 years—irregular periods, weight gain, and hair loss.",
        solution:
            "Dr. Salma’s comprehensive PCOS management protocol",
        result:
            "Lost 25 pounds, regular cycles for 6 months, and my hair is growing back!",
    },
    {
        id: 2,
        name: "Lisa & Mark, Mississauga",
        challenge:
            "Two years of unexplained infertility and failed IVF attempts.",
        solution:
            "Root cause investigation + natural fertility optimization",
        result:
            "Pregnant naturally after 6 months with Dr. Salma’s miracle baby!",
    },
    {
        id: 3,
        name: "Jennifer K., Ottawa",
        challenge:
            "Severe hot flashes, insomnia, and mood swings ruining my life.",
        solution:
            "Natural menopause support without hormone therapy",
        result:
            "Sleeping through the night and feeling like myself again at 52.",
    },
    {
        id: 4,
        name: "Maria S., Hamilton",
        challenge:
            "Exhausted despite thyroid medication, gaining weight constantly.",
        solution:
            "Integrative Hashimoto’s management approach",
        result:
            "Energy restored, lost 15 pounds, reduced medication by 50%.",
    },
]

export default function TestimonialSection() {
    return (
        <section className="py-16 bg-brand-bg">
            <div className="container mx-auto px-4 space-y-8">

                {/* Header */}
                <div className="relative text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-green inline-block">
                        Real Women, Real{" "}
                        <span className="relative inline-block">
                            Results
                            <Image
                                src="/images/results-circle.svg"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </span>
                    </h2>
                    <Image
                        src="/images/butterfly.png"
                        alt="butterfly"
                        width={24}
                        height={24}
                        className="inline-block ml-2"
                    />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="relative bg-brand-coral/20 rounded-lg overflow-hidden p-6 flex flex-col"
                        >
                            {/* Story Badge */}
                            <div className="absolute -top-3 -left-3 w-12 h-12">
                                <Image
                                    src="/images/story-badge.svg"
                                    alt={`Story ${t.id}`}
                                    fill
                                    className="object-contain"
                                />
                                <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">
                                    {t.id}
                                </span>
                            </div>

                            {/* Content Stack */}
                            <div className="flex-1 space-y-4">
                                <h3 className="text-lg font-serif font-bold text-brand-green">
                                    Patient: {t.name}
                                </h3>

                                {["Challenge", "Solution", "Result"].map((label) => (
                                    <div key={label} className="flex items-start space-x-2">
                                        <Image
                                            src="/images/leaf-icon.svg"
                                            alt=""
                                            width={16}
                                            height={16}
                                        />
                                        <p className="text-sm text-brand-green">
                                            <strong>{label}:</strong>{" "}
                                            {t[label.toLowerCase()]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Leaf corner flourish */}
                            <div className="absolute bottom-0 right-0 w-16 h-16">
                                <Image
                                    src="/images/leaf-corner.svg"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="/success-stories"
                        className="inline-block bg-brand-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green transition"
                    >
                        Start Your Own Success Story
                    </a>
                </div>
            </div>
        </section>
    )
}
