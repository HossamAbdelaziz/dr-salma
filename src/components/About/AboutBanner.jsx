// src/components/About/AboutBanner.jsx
import Image from 'next/image'

export default function AboutBanner() {
    return (
        <section className="relative w-full h-[320px] overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/about-banner.jpg"        // ← put your banner image here
                alt="About Dr. Salma"
                fill
                className="object-cover"
            />

            {/* Semi-transparent overlay (optional) */}
            <div className="absolute inset-0 bg-black bg-opacity-20" />

            {/* Title pill */}
            <div className="container mx-auto relative h-full">
                <div className="absolute top-1/2 transform -translate-y-1/2 lg:left-0 left-4">
                    <div className="inline-block bg-brand-coral border-2 border-brand-green rounded-lg px-6 py-3">
                        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-brand-green">
                            About Dr. Salma
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
