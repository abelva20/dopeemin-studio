/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sanf-serif'],
        general: ['general', 'sanf-serif'],
        'circular-web': ['circler-web', 'sanf-serif'],
        'robert-medium': ['robert-medium', 'sanf-serif'],
        'robert-regular': ['robert-regular', 'sanf-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#023e7d',
          300: '#4FB7DD',
        },
        violet: {
          300: '#5724FF'
        },
        green: {
          100: '#2F9D3F'
        },
        yellow: {
          100: '#F7DC6F',
          300: '#EDFF66'
        }
      }
    },
  },
  plugins: [],
}