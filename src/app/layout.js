// src/app/layout.js
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: "Dr Salma | Women's Health",
  description: "Where Medical Expertise Meets Natural Healing",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-screen overflow-x-hidden bg-brand-bg text-brand-green font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
