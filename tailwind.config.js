/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        utama: "var(--color-utama)",
        aksen: "var(--accent)",
        latar: "var(--color-latar)",
      },
    },
  },
  plugins: [],
};
