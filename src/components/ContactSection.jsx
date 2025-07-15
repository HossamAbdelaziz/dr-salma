// src/components/ContactSection.jsx
"use client"

import { useState } from "react"
import Image from "next/image"

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: submit to your API
        console.log("Submitted", formData)
        setFormData({ name: "", email: "", phone: "", message: "" })
    }

    return (
        <section className="py-16 bg-brand-bg relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* LEFT: Heading + Heart + Butterfly */}
                    <div className="relative inline-block">
                        {/* Your heading */}
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green">
                            We’d Love to Hear From You
                        </h2>

                        {/* Heart, absolutely centered */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Image
                                src="/images/heart-large.png"
                                alt="heart"
                                width={300}
                                height={300}
                                className="opacity-90"
                            />
                        </div>

                        {/* Butterfly perched top-right */}
                        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <Image
                                src="/images/butterfly.png"
                                alt="butterfly"
                                width={32}
                                height={32}
                            />
                        </div>
                    </div>



                    {/* RIGHT: Contact Form */}
                    <div className="bg-brand-coral/20 p-8 rounded-lg mx-auto w-full max-w-md relative z-10">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-brand-green mb-1">
                                    Your Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-brand-green mb-1">
                                    Email Address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-brand-green mb-1">
                                    Phone Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-brand-green mb-1">
                                    Message (optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-coral text-white py-3 rounded-lg font-semibold hover:bg-brand-green transition"
                            >
                                Send My Message
                            </button>

                            <p className="text-xs text-gray-600 mt-2 text-center">
                                We respect your privacy—your information is safe and will never be shared.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
