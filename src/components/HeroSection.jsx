// src/components/HeroSection.jsx
import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">

                    {/* IMAGE (first on mobile, second on desktop) */}
                    <div className="order-1 md:order-2 flex justify-center w-full">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80">
                            <Image
                                src="/images/dr-salma-hero.png"
                                alt="Dr Salma smiling"
                                fill
                                className="rounded-full border-8 border-brand-lightgreen object-cover"
                            />
                        </div>
                    </div>

                    {/* TEXT (second on mobile, first on desktop) */}
                    <div className="order-2 md:order-1 w-full">
                        <div className="max-w-xl mx-auto text-center md:text-left space-y-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
                                Where Medical Expertise Meets Natural Healing<br />
                                for Women’s Health
                            </h1>
                            <p className="text-base md:text-lg text-brand-green">
                                Tired of choosing between doctors who offer only pills and natural practitioners who lack medical training? Dr. Salma combines 20+ years of medical expertise with evidence-based natural solutions—so you get real results.
                            </p>
                            <a
                                href="/book-consultation"
                                className="inline-block bg-brand-coral text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-green transition"
                            >
                                Book Your Free Consultation
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
