module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "350px",
      sm: "500px",
      md: "700px",
      lg: "900px",
      xl: "1240px",
      "2xl": "1500px",
      "3xl": "1600px",
      "4xl": "1840px"
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
        texture: "texture 3s infinite linear"
      },
      borderRadius: {
        none: "0px",
        1: "0.0625rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        10: "0.625rem",
        12: "0.75rem",
        24: "1.5rem",
        full: "9999rem"
      },
      borderWidth: {
        none: "0px",
        1: "1px",
        2: "2px",
        7: "7px"
      },
      boxShadow: {
        sm: "0px 10px 50px rgba(0, 0, 0, 0.03)",
        nav: "0px 2px 4px #171721",
        inset: "inset 0px 4px 8px rgba(0, 0, 0, 0.24)",
        level: "0px 0px 8px rgba(75, 105, 255, 0.24)",
        mod: "0px 0px 8px rgba(25, 129, 78, 0.24)",
        admin: "0px 0px 8px rgba(234, 46, 50, 0.24)",
        vip: "0px 0px 8px rgba(255, 174, 57, 0.24)",
        streamer: "0px 0px 8px rgba(89, 193, 238, 0.24)"
      },
      colors: {
        transparent: "transparent",
        black: "var(--color-black)",
        "black-24": "rgba(0, 0, 0, 0.24)",
        "black-32": "rgba(0, 0, 0, 0.32)",
        white: "var(--color-white)",
        "white-2": "rgba(255, 255, 255, 0.02)",
        "white-4": "rgba(255, 255, 255, 0.04)",
        "white-20": "rgba(255, 255, 255, 0.2)",
        grey: "rgba(23, 23, 33, 1)",
        "grey-dark": "rgba(20, 20, 33, 1)",
        "grey-dark-2": "rgba(18, 18, 30, 1)",
        "grey-med": "rgba(24, 24, 35, 1)",
        "grey-med-92": "rgba(24, 24, 35, 0.92)",
        "grey-med-2": "rgba(31, 31, 45, 1)",
        "grey-med-2-20": "rgba(31, 31, 45, .2)",
        "grey-med-3": "rgba(34, 34, 45, 1)",
        "grey-med-4": "rgba(38, 38, 56, 1)",
        "grey-med-5": "rgba(45, 45, 61, 1)",
        "grey-med-6": "rgba(48, 48, 69, 1)",
        "grey-med-7": "rgba(90, 90, 116, 1)",
        "grey-light": "rgba(110, 110, 140, 1)",
        "grey-light-2": "rgba(129, 140, 182, 1)",
        "grey-light-3": "rgba(138, 138, 163, 1)",
        "grey-light-4": "rgba(167, 167, 185, 1)",
        "grey-light-5": "rgba(191, 191, 205, 1)",
        "grey-light-5-12": "rgba(191, 191, 205, .12)",
        red: "rgba(234, 46, 50, 1)",
        "red-12": "rgba(234, 46, 50, .12)",
        "red-36": "rgba(234, 46, 50, .36)",
        "red-light": "rgba(246, 76, 79, 1)",
        "red-dark": "rgb(165, 34, 37)",
        "red-dark-2": "rgba(39, 32, 45, 1)",
        "red-bg": "rgba(39, 32, 45, 1)",
        yellow: "rgba(255, 174, 57, 1)",
        "yellow-36": "rgba(255, 174, 57, .36)",
        "yellow-dark": "rgba(51, 36, 14, 1)",
        orange: "rgba(247, 147, 26, 1)",
        green: "rgba(31, 209, 123, 1)",
        "green-12": "rgba(31, 209, 123, 0.12)",
        purple: "rgba(109, 67, 206, 1)",
        "purple-36": "rgba(109, 67, 206, .36)",
        "blue-light": "rgba(98, 126, 234, 1)",
        "blue-light-2": "rgba(94, 152, 217, 1)",
        "grey-blue": "rgba(129, 140, 182, 1)",
        "skin-red": "rgba(234, 46, 50, 1)",
        "skin-pink": "rgba(211, 46, 230, 1)",
        "skin-purple": "rgba(136, 71, 255, 1)",
        "skin-blue-dark": "rgba(75, 105, 255, 1)",
        "skin-blue-light": "rgba(94, 152, 217, 1)",
        streamer: "rgba(89, 193, 238, 1)",
        "streamer-10": "rgba(89, 193, 238, 0.1)",
        vip: "rgba(255, 174, 57, 1)",
        "vip-10": "rgba(255, 174, 57, 0.1)",
        admin: "rgba(234, 46, 50, 1)",
        "admin-10": "rgba(234, 46, 50, 0.1)",
        mod: "rgba(54, 208, 133, 1)",
        "mod-10": "rgba(54, 208, 133, 0.1)",
        level: "rgba(75, 105, 255, 1)",
        "level-10": "rgba(75, 105, 255, 0.1)",
        discord: "rgba(92, 107, 192, 1)",
        "discord-dark": "rgb(75, 85, 142)"
      },
      fontSize: {
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        12: "0.75rem",
        11: "0.6875rem",
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        40: "2.5rem",
        48: "3rem",
        64: "4rem",
        80: "5rem",
        180: "11.25rem"
      },
      maxWidth: {
        100: "100px"
      },
      ringWidth: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem"
      },
      spacing: {
        1: "1px",
        2: "2px",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        38: "2.375rem",
        40: "2.5rem",
        42: "2.625rem",
        44: "2.75rem",
        46: "2.875rem",
        48: "3rem",
        50: "3.125rem",
        52: "3.25rem",
        54: "3.375rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        70: "4.375rem",
        72: "4.5rem",
        74: "4.625rem",
        80: "5rem",
        84: "5.25rem",
        90: "5.625rem",
        92: "5.75rem",
        100: "6.25rem",
        120: "7.5rem",
        180: "11.25rem",
        190: "11.875rem",
        200: "12.5rem",
        220: "13.75rem",
        240: "15rem",
        250: "15.625rem",
        260: "16.25rem",
        270: "16.875rem",
        280: "17.5rem",
        300: "18.75rem",
        320: "20rem",
        400: "25rem",
        450: "28.125rem",
        520: "32.5rem"
      },
      keyframes: {
        texture: {
          "0%": {
            left: "-82px",
            top: "0px"
          },
          "100%": {
            left: "-0px",
            top: "-20px"
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")]
}
