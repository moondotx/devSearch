module.exports = {
    darkMode: 'class', // Enable dark mode
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths to your source files
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  };