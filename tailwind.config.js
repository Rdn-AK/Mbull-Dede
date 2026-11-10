/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                rose: {
                    50: '#fff0f5',
                    100: '#ffe4e1',
                    200: '#fecdd3',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                },
                botanical: '#81b29a',
                warmgold: '#ffb703',
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Plus Jakarta Sans', 'sans-serif'],
                cursive: ['Sacramento', 'cursive'],
            },
        },
    },
    plugins: [],
};
