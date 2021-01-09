module.exports = {
  purge: ['./src/components/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  theme: {
    container: {
      center: true,
      padding: '12rem',
    },
    fontFamily: {
      ssp: [
        'Source\\ Sans\\ Pro',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'sans-serif',
      ],
    },
  },
}
