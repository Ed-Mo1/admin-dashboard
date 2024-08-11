/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        "main-indigo": "#6366f1", // A shade of indigo
        "main-violet": "#8b5cf6", // A shade of violet
        "main-pink": "#EC4899", // A bright pink
        "main-green": "#10b981", // A vibrant green
        "main-orange": "#f5930b", // A warm orange
        "main-blue": "#3b82f6", // A classic blue
        "main-mint": "#6ee7b7", // A soft mint green
        "main-red": "#EF4444",
      },
    },
  },
  plugins: [],
};
