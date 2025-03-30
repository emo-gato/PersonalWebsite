/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-white": "#fff",
        "font-high-emphasis": "#25282b",
        "font-medium-emphasis": "#828282",
        "pencil-thick": "#1f2937",
        snow: "#fbf4f8",
        gray: {
          "100": "#827777",
          "200": "#887474",
          "300": "#252525",
          "400": "#232323",
          "500": "#231f20",
          "600": "rgba(0, 0, 0, 0.4)",
        },
        ghostwhite: {
          "100": "#eeeaf2",
          "200": "#ede9f2",
        },
        pink: "#ffc3df",
        whitesmoke: "#f1f1f1",
        thistle: "#efbdd9",
        slateblue: "#685fd4",
        hotpink: "#e65c9c",
        deeppink: "rgba(240, 20, 123, 0.3)",
        black: "#000",
        mistyrose: "#f2e2e3",
      },
      fontFamily: {
        roboto: "Roboto",
        nunito: "Nunito",
        kalam: "Kalam",
        "rounds-black": "'Rounds Black'",
        inter: "Inter",
        kbtruebeliever: "KBTrueBeliever",
        "aoboshi-one": "'Aoboshi One'",
        oldenburg: "Oldenburg",
        outfit: "Outfit",
      },
      borderRadius: {
        mini: "15px",
        xl: "20px",
      },
      padding: {
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      "21xl": "40px",
      "lgi-7": "19.7px",
      "2xl": "21px",
      "51xl": "70px",
      "29xl": "48px",
      "11xl": "30px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
