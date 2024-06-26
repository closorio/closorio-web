/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FF6464",
        "secondary": "#EDF7FA",
        "secondary-dark": "#D0EAF1",
        "dark": "#00A8CC",
      },
      fontFamily: {
        custom: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
