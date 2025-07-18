// src/components/TestimonialSection.jsx
"use client"

import Image from "next/image"
import {
    FaBolt,
    FaSeedling,
    FaCheckCircle,
} from "react-icons/fa"

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
        caption: "6-month transformation",
    },
    {
        id: 2,
        name: "Lisa & Mark, Mississauga",
        challenge:
            "Two years of unexplained infertility and failed IVF attempts.",
        solution:
            "Root-cause investigation + natural fertility optimization",
        result:
            "Pregnant naturally after 6 months with Dr. Salma’s miracle baby!",
        caption: "6-month journey to conception",
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
        caption: "3-month relief story",
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
        caption: "4-month wellness rebuild",
    },
]

// map label → icon component
const labelIcons = {
    Challenge: FaBolt,
    Solution: FaSeedling,
    Result: FaCheckCircle,
}

export default function TestimonialSection() {
    return (
        <section className="py-16 bg-brand-bg">
            <div className="container space-y-6">
                {/* Header + subtitle */}
                <div className="text-center space-y-2">
                    <h2 className="inline-flex items-center text-3xl font-serif font-bold text-brand-green">
                        Real Women, Real Results
                        <Image
                            src="/images/butterfly.png"
                            alt="butterfly"
                            width={24}
                            height={24}
                            className="ml-2"
                        />
                    </h2>
                    <p className="text-brand-green">
                        Discover how Dr. Salma’s blend of medical expertise and natural healing has transformed lives across Ontario.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="relative bg-brand-coral/20 rounded-lg overflow-hidden p-6 flex flex-col h-full"
                        >
                            {/* Story badge */}
                            <div className="absolute -top-4 -left-4 w-12 h-12">
                                <Image
                                    src="/images/story-badge.png"
                                    alt={`Story ${t.id}`}
                                    fill
                                    className="object-contain"
                                />
                                <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">
                                    {t.id}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4 mt-4">
                                <h3 className="text-lg font-serif font-bold text-brand-green">
                                    Patient: {t.name}
                                </h3>

                                {["Challenge", "Solution", "Result"].map((label) => {
                                    const Icon = labelIcons[label]
                                    return (
                                        <div key={label} className="flex items-start space-x-2">
                                            <Icon className="mt-1 text-brand-green" size={18} />
                                            <p className="text-sm text-brand-green">
                                                <strong>{label}:</strong> {t[label.toLowerCase()]}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Caption */}
                            <p className="mt-4 text-xs text-brand-green/80">
                                {t.caption}
                            </p>

                            {/* Corner flourish */}
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
