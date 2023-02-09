/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
            light: "300",
            regular: "400",
            semibold: "500",
            bold: "600",
            extrabold: "700",
            black: "800"
        },
        colors: {
            darkBlue: "#0B3954",
            green: "#087E8B",
            lightBlue:"#BFD7EA",
            orangeRed:"#FF5A5F",
            darkRed:"#C81D25",
            lightGray:"#DDDDDD",
            white:"#FFFFFF",
            lightGreen: "#7FD765",
            black:"#000000"
        },
    extend: {},
  },
  plugins: [],
};
