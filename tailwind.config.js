module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,mdx}",
        "./app/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    theme: {
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
