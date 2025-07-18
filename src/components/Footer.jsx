// src/components/Footer.jsx
"use client"

import Image from "next/image"
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaGlobe,
} from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-brand-green text-white pt-12 pb-6">
            {/* Use container for centering & gutters */}
            <div className="container">
                {/* Grid: 2 cols on sm, 4 on md+ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* 1. Branding (spans both cols on mobile) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src="/images/logo.png" alt="Dr Salma Logo" width={50} height={50} />
                            <span className="font-serif text-2xl">Dr. Salma</span>
                        </div>
                        <p className="text-sm">
                            Women Ontario Hub
                            <br />
                            Where Medical Expertise Meets Natural Healing
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Instagram" className="hover:text-brand-coral">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" aria-label="Facebook" className="hover:text-brand-coral">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-brand-coral">
                                <FaLinkedinIn size={18} />
                            </a>
                            <a href="#" aria-label="X / Twitter" className="hover:text-brand-coral">
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* 2. Explore */}
                    <div className="space-y-3 text-center md:text-left">
                        <h3 className="font-semibold mb-2">Explore</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/" className="hover:text-brand-coral">Home</a></li>
                            <li><a href="/about" className="hover:text-brand-coral">About Dr. Salma</a></li>
                            <li><a href="/services" className="hover:text-brand-coral">All Services</a></li>
                            <li><a href="/book-consultation" className="hover:text-brand-coral">Book Consultation</a></li>
                            <li><a href="/contact" className="hover:text-brand-coral">Contact</a></li>
                        </ul>
                    </div>

                    {/* 3. Resources */}
                    <div className="space-y-3 text-center md:text-left">
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/resources/blog" className="hover:text-brand-coral">Blog</a></li>
                            <li><a href="/resources/patient-resources" className="hover:text-brand-coral">Patient Resources</a></li>
                            <li><a href="/resources/faq" className="hover:text-brand-coral">FAQ</a></li>
                        </ul>
                    </div>

                    {/* 4. Contact Info (spans both cols on mobile) */}
                    <div className="col-span-2 md:col-span-1 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="font-semibold mb-2">Get In Touch</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-brand-coral">
                                <FaGlobe />
                                <a href="https://drsalmawomenontariohub.com">drsalmawomenontariohub.com</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-brand-coral">
                                <FaEnvelope />
                                <a href="mailto:info@drsalmawomenontariohub.com">info@drsalmawomenontariohub.com</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-2 hover:text-brand-coral">
                                <FaPhone />
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-lightgreen mt-8 pt-4 text-center text-xs">
                    &copy; {new Date().getFullYear()} Dr. Salma. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
