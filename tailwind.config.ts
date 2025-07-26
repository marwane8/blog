import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        cal: ["Caladea"],
        lexend: ["Lexend Deca"],
      },
      colors: {
        "off-white": "#FEFDFD",
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => {
        const reset = {
          color: "inherit",
          h1: {
            margin: "0",
            textAlign: "center",
            fontSize: theme("fontSize.4xl")[0],
            fontFamily: theme("fontFamily.lexend").join(", "),
            color: theme("colors.teal.500"),
            fontWeight: "800",
          },
          h2: {
            marginTop: "22.5px",
            marginBottom: "22.5px",
            fontFamily: theme("fontFamily.lexend").join(", "),
            fontSize: theme("fontSize.3xl")[0],
            color: "inherit",
          },

          h3: {
            marginTop: "22.5px",
            marginBottom: "22.5px",
            fontFamily: theme("fontFamily.lexend").join(", "),
            color: "inherit",
            fontSize: theme("fontSize.2xl")[0],
          },
          h4: {
            marginTop: "22.5px",
            marginBottom: "22.5px",
            fontFamily: theme("fontFamily.lexend").join(", "),
            color: "inherit",
            fontSize: theme("fontSize.lg")[0],
          },

          p: {
            marginBottom: "22.5px",
            fontFamily: theme("fontFamily.cal").join(", "),
            fontSize: theme("fontSize.lg")[0],
            letterSpacing: "0.5px",
          },
          a: {
            margin: "0",
            color: "inherit",
            textDecoration: "underline",
            textDecorationColor: theme("colors.teal.500"),
            textDecorationStyle: "dotted",
            textUnderlineOffset: "3px",
            "&:hover": {
              textDecorationStyle: "solid",
              color: theme("colors.teal.500"),
            },
          },
          strong: {
            color: "inherit",
          },
          li: {
            margin: "0",
            fontSize: "18px"
          },

          code: {
            color: theme("colors.teal.500"),
            backgroundColor: theme("colors.teal.500") + "20",
            paddingLeft: "5px",
            paddingRight: "5px",
            borderRadius: "3px",
            letterSpacing: "0.005em",

            "&::before": {
              display: "none",
            },
            "&::after": {
              display: "none",
            },
          },
          ol: {
            marginTop: ".75rem",
            marginBottom: ".75rem",
            fontFamily: theme("fontFamily.cal").join(", "),
            letterSpacing: "0.5px",
            [`@media (min-width: ${theme("screens.md")})`]: {
              fontSize: theme("fontSize.xl")[0],
            },

            "li::marker": {
              color: "inherit",
            },
          },
          ul: {
            marginTop: ".75rem",
            marginBottom: ".75rem",
            fontFamily: theme("fontFamily.cal").join(", "),
            fontSize: theme("fontSize.lg")[0],
            letterSpacing: "0.5px",
            [`@media (min-width: ${theme("screens.md")})`]: {
              fontSize: theme("fontSize.xl")[0],
            },

            "li::marker": {
              color: "inherit",
            },
          },
          pre: {
            backgroundColor: theme("colors.teal.900"),
          },

          blockquote: {
            borderColor: theme("colors.amber.500"),
            color: "inherit",
            paddingLeft: "10px",
          },

          figcaption: {
            margin: "3px",
            textAlign: "center",
            fontFamily: theme("fontFamily.cal").join(", "),
            letterSpacing: theme("letterSpacing.wide"),
            fontSize: theme("fontSize.lg")[0],
          },
        };
        return {
          DEFAULT: { css: reset },
          dark: {
            css: {
              ...reset,
            },
          },
        };
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
} satisfies Config;
