/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Hanken Grotesk"],
      },
    },
  },
  plugins: [],
};
