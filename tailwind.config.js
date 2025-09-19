// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const darkMode = 'class';
export const theme = {
    extend: {
        colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            accent: 'var(--color-accent)',
            neutral: 'var(--color-neutral)',
            success: 'var(--color-success)',
            warning: 'var(--color-warning)',
            error: 'var(--color-error)',
            background: 'var(--color-background)',
            text: 'var(--color-text)',
        },
        animation: {
            wave: 'wave 1.5s infinite',
        },
        keyframes: {
            wave: {
                '0%': { transform: 'translateX(-100%)' },
                '50%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(100%)' },
            },
        },
    },
};
export const plugins = [];