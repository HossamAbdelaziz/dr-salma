// src/components/Navbar.jsx
"use client"

import { useState } from 'react'
import Image from 'next/image'
import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaTimes,
} from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-brand-bg/50 backdrop-blur-sm relative">
            {/* Main navbar bar */}
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo + title */}
                <div className="flex items-center space-x-2">
                    <Image src="/images/logo.png" alt="Dr Salma Logo" width={70} height={70} />
                    <div className="flex flex-col leading-tight">
                        <span className="font-serif text-2xl text-brand-green">Dr. Salma</span>
                        <span className="text-sm text-brand-green">Women Ontario Hub</span>
                    </div>
                    <Image src="/images/butterfly.png" alt="Butterfly Icon" width={24} height={24} />
                </div>

                {/* Desktop links */}
                <nav className="hidden lg:flex space-x-8 font-sans font-semibold text-brand-green">
                    {[
                        ['Home', '/'],
                        ['About Dr. Salma', '/about'],
                        ['Services', '/services'],
                        ['Resources', '/resources'],
                        ['Locations', '/locations'],
                        ['Book Consultation', '/book-consultation'],
                        ['Contact', '/contact'],
                    ].map(([label, href]) => (
                        <a key={href} href={href} className="hover:text-brand-coral">
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Desktop social icons */}
                <div className="hidden lg:flex items-center space-x-4 text-brand-green">
                    <a href="#" aria-label="Instagram" className="hover:text-brand-coral">
                        <FaInstagram size={30} />
                    </a>
                    <a href="#" aria-label="Facebook" className="hover:text-brand-coral">
                        <FaFacebookF size={30} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-brand-coral">
                        <FaLinkedinIn size={30} />
                    </a>
                    <a href="#" aria-label="X / Twitter" className="hover:text-brand-coral">
                        <FaTwitter size={30} />
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden text-brand-green"
                    aria-label="Open menu"
                >
                    <HiMenu size={28} />
                </button>
            </div>

            {/* MOBILE DRAWER + OVERLAY */}
            <div
                className={`fixed inset-0 z-50 flex transition-opacity duration-300 ease-in-out
    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={() => setOpen(false)}
                />

                {/* Drawer panel */}
                <div
                    className={`relative ml-auto w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      ${open ? 'translate-x-0' : 'translate-x-full'}
    h-screen overflow-y-auto`}
                >
                    {/* Close button */}
                    <div className="flex justify-end p-4">
                        <button onClick={() => setOpen(false)} aria-label="Close menu">
                            <FaTimes size={24} className="text-brand-green" />
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col px-6 space-y-4 mt-2 text-lg font-sans text-brand-green">
                        {[
                            ['Home', '/'],
                            ['About Dr. Salma', '/about'],
                            ['Services', '/services'],
                            ['Resources', '/resources'],
                            ['Locations', '/locations'],
                            ['Book Consultation', '/book-consultation'],
                            ['Contact', '/contact'],
                        ].map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="hover:text-brand-coral"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="mt-8 px-6 flex space-x-4">
                        <a href="#" aria-label="Instagram" className="hover:text-brand-coral">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-brand-coral">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-brand-coral">
                            <FaLinkedinIn size={24} />
                        </a>
                        <a href="#" aria-label="X / Twitter" className="hover:text-brand-coral">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

        </header>
    )
}
