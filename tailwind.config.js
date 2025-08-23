// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/app/**/*.{js,jsx}",
//     "./src/components/**/*.{js,jsx}",
//     "./src/pages/**/*.{js,jsx}",
//     "./src/layouts/**/*.{js,jsx}",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         title: ['"Mercurial"', 'sans-serif'],
//         body: ['"Roboto"', 'sans-serif'],
//       },
//       colors: {
//         primary: '#6E2452',   // Deep Purple - Hero + Branding
//         secondary: '#87006494', // Accent Pink - CTAs
//         text: '#7D7D7D',      // Body Text
//         accent: '#AD3B66',    // Optional highlight reuse
//         white: '#FFFFFF',
//         dark: '#333333',      // Headings & Strong Text
//         light: '#F4F4F4',     // Section backgrounds
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//       animation: {
//         marquee: 'marquee 25s linear infinite',
//       },
//       animation: {
//     'spin-slow': 'spin 15s linear infinite',
//   },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Mercurial"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
      colors: {
        primary: '#6E2452',     // Deep Purple
        secondary: '#87006494', // Accent Pink
        text: '#7D7D7D',
        accent: '#AD3B66',
        white: '#FFFFFF',
        dark: '#333333',
        light: '#F4F4F4',
        lighter:"#FDF2F9",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'zoom-in': 'zoom-in 0.6s ease-out forwards',
        'fade-out': 'fade-out 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
