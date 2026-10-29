/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                foreground: '#f0f0f0',
                card: '#111111',
                primary: '#c8ff00',
                secondary: '#1a1a1a',
                muted: '#606060',
                border: '#222222',
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },

    plugins: [],
};
