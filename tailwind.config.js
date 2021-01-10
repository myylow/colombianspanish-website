module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  variants: {
    extend: {
      margin: ['first'],
      opacity: ['disabled'],
      cursor: ['disabled'],
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
