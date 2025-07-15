// src/components/ServicesSection.jsx
"use client"

import Image from "next/image"
import Link from "next/link"

// Data for each service card
const services = [
    {
        title: "Hormonal Health Solutions",
        headerImage: "/images/hormonal-banner.png",
        introLabel: "If You’re Struggling With…",
        introText:
            "Hormonal imbalances that control your life and leave you feeling frustrated",
        providesLabel: "Dr. Salma Provides…",
        providesText:
            "Medical expertise to understand your hormones combined with natural solutions that restore balance",
        mainTagline: "Finally feel in control of your body and hormones again",
        items: [
            "PCOS Management",
            "Hashimoto’s/Thyroiditis",
            "Hormonal Acne Treatment",
        ],
    },
    {
        title: "Reproductive & Fertility Health",
        headerImage: "/images/fertility-banner.jpg",
        introLabel: "If You’re Struggling With…",
        introText:
            "Fertility challenges, painful periods, or reproductive health concerns that no one seems to understand",
        providesLabel: "Dr. Salma Provides…",
        providesText:
            "Gynecological expertise to uncover hidden causes plus gentle natural therapies for lasting solutions",
        mainTagline: "Reclaim your reproductive health and find hope for your future",
        items: [
            "Unexplained Infertility Solutions",
            "Endometriosis Pain Management",
            "Menopause & Perimenopause Support",
        ],
    },
    {
        title: "Energy & Wellness Optimization",
        headerImage: "/images/energy-banner.jpg",
        introLabel: "If You’re Struggling With…",
        introText:
            "Chronic fatigue, anxiety, or pain that limits your daily life and steals your joy",
        providesLabel: "Dr. Salma Provides…",
        providesText:
            "Comprehensive assessment to find root causes plus natural therapies for lasting energy and peace",
        mainTagline: "Wake up energized and feel like yourself again",
        items: [
            "Chronic Fatigue & Energy Optimization",
            "Anxiety Linked to Hormonal Imbalances",
            "Pain Management (TCM + Acupuncture)",
        ],
    },
    {
        title: "Comprehensive Women’s Care",
        headerImage: "/images/comprehensive-banner.jpg",
        introLabel: "If You’re Struggling With…",
        introText:
            "Feeling “off” but not knowing why, or wanting personalized care that treats you as a whole person",
        providesLabel: "Dr. Salma Provides…",
        providesText:
            "Individualized assessment and treatment plans that honor your unique health journey",
        mainTagline: "Experience healthcare that’s as unique as you are",
        items: ["General Women’s Wellness", "Classical Homeopathy", "Integrative Wellness Plans"],
    },
]

export default function ServicesSection() {
    return (
        <section className="py-16 bg-brand-bg">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="relative mb-12 flex items-center justify-center">
                    {/* Decorative lines only on desktop */}
                    <div className="hidden lg:block absolute left-0">
                        <Image src="/images/line-decor-left.svg" alt="" width={120} height={20} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-brand-green px-8">
                        Solutions
                    </h2>
                    <div className="hidden lg:block absolute right-0">
                        <Image src="/images/line-decor-right.svg" alt="" width={120} height={20} />
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((svc) => (
                        <div
                            key={svc.title}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                        >

                            {/* Use grid for the card body */}
                            <div className="grid grid-rows-[auto_auto_auto_1fr_auto] h-full">
                                {/* 1. Header Image */}
                                <div className="relative h-40 row-span-1">
                                    <Image
                                        src={svc.headerImage}
                                        alt={svc.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* 2. Title */}
                                <h3 className="text-xl font-serif font-bold text-brand-green px-6 py-4 row-span-1">
                                    {svc.title}
                                </h3>

                                {/* 3. Intro block */}
                                <div className="px-6 space-y-2 row-span-1">
                                    <p className="italic text-sm text-brand-green">
                                        <strong>{svc.introLabel}</strong> {svc.introText}
                                    </p>
                                    <p className="italic text-sm text-brand-green">
                                        <strong>{svc.providesLabel}</strong> {svc.providesText}
                                    </p>
                                </div>

                                {/* 4. Tagline */}
                                <div className="flex items-center px-6 py-4 row-span-1">
                                    <Image
                                        src="/images/heart.png"
                                        alt="heart"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    <span className="font-serif text-base text-brand-green">
                                        {svc.mainTagline}
                                    </span>
                                </div>

                                {/* 5. Buttons (always at bottom) */}
                                <div className="px-6 pb-6 space-y-2 row-span-1">
                                    {svc.items.map((item) => (
                                        <Link
                                            key={item}
                                            href="#"
                                            className="block w-full bg-brand-coral text-white py-2 rounded hover:bg-brand-green transition text-center"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>



                    ))}
                </div>
            </div>
        </section>
    )
}
