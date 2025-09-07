import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    gridTemplateColumns: {
      "13": "repeat(13, minmax(0, 1fr))",
    },
    colors: {
      blue: {
        400: "#2589FE",
        500: "#0070F3",
        600: "#2F6FEB",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: {
    "@tailwindcss/forms": {},
  },
};

export default config;
