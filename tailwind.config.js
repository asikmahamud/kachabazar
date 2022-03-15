module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter', 'sans-serif'],
        'open-sans' :['Open Sans', 'sans-serif']
      },
      colors :{
          'primary' : '#34d399',
          'primary-dark' : '#15803d',
          'secondary' : '#facc15'
      }
    },
    container:{
      center: true,
      padding: '1rem',
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      }
    }
  },
  plugins: [],
};
