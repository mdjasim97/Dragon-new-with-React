/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },

            backgroundImage: {
                'ads-bannerImg': "url('./src/assets/images/bg.png')",
            }
        }
    },
    plugins: [require("daisyui")],
}