// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,mdx}",
        "./app/**/*.{js,jsx,ts,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        // add a container key at the same level as extend
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',  // mobile: 32px total (16px each side)
                sm: '2rem',  // small screens
                md: '4rem',  // tablets: 64px total
                lg: '6rem',  // desktops: 96px total
                xl: '8rem',  // wide screens: 128px total
                '2xl': '10rem'  // extra-wide: 160px total
            },
        },
        extend: {
            colors: {
                'brand-bg': '#e8e7e7',
                'brand-green': '#405a33',
                'brand-lightgreen': '#859f58',
                'brand-coral': '#ed7875',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Source Sans Pro"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
