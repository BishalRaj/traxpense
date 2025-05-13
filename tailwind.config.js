/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundColor: {
        background: "#0C1B2A", // dark navy background
        primary: "#2DB7A3", // main action color (buttons, icons)
        heading: "#F2F5F7", // main text/headings
        inputBorder: "#253545", // input field outlines
        link: "#1AA9A1", // for links like "Forgot password?"
      },
      colors: {
        background: "#0C1B2A", // dark navy background
        primary: "#2DB7A3", // main action color (buttons, icons)
        heading: "#F2F5F7", // main text/headings
        inputBorder: "#253545", // input field outlines
        link: "#1AA9A1", // for links like "Forgot password?"
      },
    },
  },
  plugins: [],
};
