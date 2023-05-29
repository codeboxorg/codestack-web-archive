/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const forms = require('@tailwindcss/forms')

const px0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) }
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) }
const px0_1920 = { ...Array.from(Array(1921)).map((_, i) => `${i}px`) }

const custom = plugin(({ addUtilities, addVariant }) => {
    addUtilities({
        '.flex-center': {
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
        },
        '.keep-words': {
            'word-break': 'keep-all',
        },
    })
    addVariant('all', '& *')
    addVariant('under', '& > *')
})

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {},
        extend: {
            borderWidth: px0_50,
            width: px0_1920,
            height: px0_1920,
            minWidth: px0_1920,
            maxWidth: px0_1920,
            minHeight: px0_1920,
            maxHeight: px0_1920,
            fontSize: px0_100,
            padding: px0_100,
            margin: px0_100,
            spacing: px0_300,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                sm: '40px',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1240px',
                '2xl': '1240px',
            },
        },
    },
    darkMode: false,
    variants: {
        extend: {
            outline: ['focus'],
        },
    },
    plugins: [forms, custom],
    corePlugins: {
        preflight: true, //false:tailwind css적용순서를 첫번째로 하지 않음
    },
}
