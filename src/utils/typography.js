import Typography from "typography"

const typography = new Typography({
  baseFontSize: "22px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "IBM Plex Sans",
      styles: ["800", "600"],
    },
    {
      name: "IBM Plex Mono",
      styles: ["400", "400i"],
    },
  ],
  headerFontFamily: [
    "IBM Plex Sans",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["IBM Plex Mono", "sans-serif"],
  // See below for the full list of options.
})

export const { scale, rhythm, options } = typography
export default typography
