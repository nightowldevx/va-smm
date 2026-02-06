/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    purple: '#6B46C1',
                    blue: '#38BDF8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #38BDF8 0%, #6B46C1 100%)',
                'gradient-primary-reverse': 'linear-gradient(135deg, #6B46C1 0%, #38BDF8 100%)',
                'gradient-hero': 'linear-gradient(180deg, #F3F4F6 0%, #FFFFFF 100%)',
            },
            boxShadow: {
                'hero-button': '0 10px 40px rgba(56, 189, 248, 0.3)',
                'hero-image': '0 25px 80px rgba(107, 70, 193, 0.25)',
                'card': '0 4px 20px rgba(0,0,0,0.05)',
            },
        },
    },
    plugins: [],
}
