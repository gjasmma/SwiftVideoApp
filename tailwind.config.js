module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',      // deep blue
        secondary: '#000000',    // black
        accent: '#E63946',       // red accent
        light: '#F8F9FA',        // off-white background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
