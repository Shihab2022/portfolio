module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090E", // Deep dark blue/black
        surface: "#12141D", // Slightly lighter card background
        primary: "#8B5CF6", // Purple accent
        secondary: "#EC4899", // Pink accent
        textMuted: "#94A3B8",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #8B5CF6, #EC4899)",
      },
    },
  },
  plugins: [],
};
