module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      desktop: "1200px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1728px"
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
        DEFAULT: "4px",
        none: "0",
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        24: "1.5rem",
        full: "9999rem",
        xs: "0.0625rem",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.5rem"
      },
      borderWidth: {
        DEFAULT: "1px",
        none: 0,
        1: "1px",
        2: "2px",
        4: "4px",
        7: "7px",
        8: "8px"
      },
      boxShadow: {
        default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        sm: "0 10px 50px rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        "custom-1": "0 2px 0 #1C1C2B, 0 4px 12px rgba(0, 0, 0, 0.32)",
        "custom-2": "0 2px 2px rgba(0, 0, 0, 0.25)",
        red: "0 2px 0 #90282A, 0 4px 12px rgba(0, 0, 0, 0.32)",
        grey: "0 2px 0 #5B556B, 0 4px 12px rgba(0, 0, 0, 0.32)",
        none: "none",
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
        black: {
          DEFAULT: "var(--color-black)",
          1: "#000000",
          24: "rgba(0, 0, 0, 0.24)",
          32: "rgba(0, 0, 0, 0.32)",
          50: "#1f1f2d",
          100: "#1A161E",
          150: "#1B1822",
          200: "#252130",
          250: "#15121C",
          300: "#1F1B28",
          350: "#1F1C28",
          400: "#201D28"
        },
        white: {
          DEFAULT: "var(--color-white)",
          2: "rgba(255, 255, 255, 0.02)",
          4: "rgba(255, 255, 255, 0.04)",
          20: "rgba(255, 255, 255, 0.2)"
        },
        grey: {
          DEFAULT: "rgba(23, 23, 33, 1)",
          light: {
            DEFAULT: "rgba(110, 110, 140, 1)",
            2: "rgba(129, 140, 182, 1)",
            3: "rgba(138, 138, 163, 1)",
            4: "rgba(167, 167, 185, 1)",
            5: "rgba(191, 191, 205, 1)",
            "5-12": "rgba(191, 191, 205, .12)"
          },
          med: {
            DEFAULT: "rgba(24, 24, 35, 1)",
            92: "rgba(24, 24, 35, 0.92)",
            2: "rgba(31, 31, 45, 1)",
            "2-20": "rgba(31, 31, 45, .2)",
            3: "rgba(34, 34, 45, 1)",
            4: "rgba(38, 38, 56, 1)",
            5: "rgba(45, 45, 61, 1)",
            6: "rgba(48, 48, 69, 1)",
            7: "rgba(90, 90, 116, 1)"
          },
          dark: {
            DEFAULT: "rgba(20, 20, 33, 1)",
            2: "rgba(18, 18, 30, 1)"
          },
          blue: {
            DEFAULT: "rgba(129, 140, 182, 1)"
          },
          0: "#171721",
          50: "#d3dce6",
          75: "#bfbfcd",
          100: "#8a8aa3",
          150: "#273444",
          200: "#393951",
          250: "#262333",
          300: "#938ea2",
          350: "#262636",
          400: "#333343",
          450: "#d9d9d9",
          500: "#938EA1",
          550: "#a7a7b9",
          600: "#75748c",
          650: "#5a5a74",
          700: "#6E6E8C"
        },
        red: {
          DEFAULT: "rgba(234, 46, 50, 1)",
          8: "rgba(234, 46, 50, .08)",
          12: "rgba(234, 46, 50, .12)",
          24: "rgba(234, 46, 50, .24)",
          36: "rgba(234, 46, 50, .36)",
          light: "rgba(246, 76, 79, 1)",
          dark: {
            DEFAULT: "rgb(165, 34, 37)",
            2: "rgba(39, 32, 45, 1)"
          },
          bg: "rgba(39, 32, 45, 1)"
        },
        yellow: {
          DEFAULT: "rgba(255, 174, 57, 1)",
          36: "rgba(255, 174, 57, .36)",
          50: "#ffc82c",
          100: "#ffae39",
          dark: "rgba(51, 36, 14, 1)"
        },
        orange: "rgba(247, 147, 26, 1)",
        green: {
          DEFAULT: "rgba(31, 209, 123, 1)",
          12: "rgba(31, 209, 123, 0.12)"
        },
        blue: {
          100: "#1fb6ff",
          200: "#627EEA",
          light: "rgba(98, 126, 234, 1)",
          "light-2": "rgba(94, 152, 217, 1)"
        },
        pink: "#ff49db",
        purple: {
          DEFAULT: "rgba(109, 67, 206, 1)",
          2: "rgb(126, 91, 239)",
          36: "rgba(109, 67, 206, .36)",
          light: "rgba(99, 85, 99, 1)",
          dark: "rgba(50, 39, 50, 1)"
        },
        skin: {
          red: "rgba(234, 46, 50, 1)",
          pink: "rgba(211, 46, 230, 1)",
          purple: "rgba(136, 71, 255, 1)",
          "blue-dark": "rgba(75, 105, 255, 1)",
          "blue-light": "rgba(94, 152, 217, 1)"
        },
        streamer: {
          DEFAULT: "rgba(89, 193, 238, 1)",
          10: "rgba(89, 193, 238, 0.1)"
        },
        vip: {
          DEFAULT: "rgba(255, 174, 57, 1)",
          10: "rgba(255, 174, 57, 0.1)"
        },
        admin: {
          DEFAULT: "rgba(234, 46, 50, 1)",
          10: "rgba(234, 46, 50, 0.1)"
        },
        mod: {
          DEFAULT: "rgba(54, 208, 133, 1)",
          10: "rgba(54, 208, 133, 0.1)"
        },
        level: {
          DEFAULT: "rgba(75, 105, 255, 1)",
          10: "rgba(75, 105, 255, 0.1)"
        },
        discord: {
          DEFAULT: "rgba(92, 107, 192, 1)",
          dark: "rgb(75, 85, 142)"
        },
        jackpot: {
          DEFAULT: "rgba(139, 94, 241, 1)",
          dark: "rgba(76, 48, 140, 1)"
        },
        slots: {
          DEFAULT: "rgba(53, 181, 67, 1)",
          dark: "rgba(25, 98, 33, 1)"
        },
        live: {
          DEFAULT: "rgba(226, 85, 169, 1)",
          dark: "rgba(149, 37, 104, 1)"
        },
        coinflip: {
          DEFAULT: "rgba(229, 76, 79, 1)",
          dark: "rgba(171, 19, 22, 1)"
        },
        wheel: {
          DEFAULT: "rgba(249, 143, 66, 1)",
          light: "rgba(255, 180, 68, 1)",
          dark: "rgba(170, 85, 23, 1)",
          "dark-24": "rgba(170, 85, 23, 0.24)"
        }
      },
      backgroundColor: (theme) => theme("colors"),
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        default: theme("colors.grey.300", "currentColor")
      }),
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
        19: "1.1875rem",
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
        75: "4.6875rem",
        80: "5rem",
        84: "5.25rem",
        86: "5.375rem",
        88: "5.5rem",
        90: "5.625rem",
        92: "5.75rem",
        100: "6.25rem",
        106: "6.625rem",
        108: "6.75rem",
        116: "7.25rem",
        120: "7.5rem",
        122: "7.625rem",
        124: "7.75rem",
        130: "8.125rem",
        132: "8.25rem",
        140: "8.75rem",
        142: "8.875rem",
        154: "9.625rem",
        164: "10.25rem",
        180: "11.25rem",
        190: "11.875rem",
        200: "12.5rem",
        220: "13.75rem",
        230: "14.375rem",
        240: "15rem",
        250: "15.625rem",
        260: "16.25rem",
        270: "16.875rem",
        272: "17rem",
        280: "17.5rem",
        300: "18.75rem",
        320: "20rem",
        330: "20.625rem",
        350: "21.875rem",
        360: "22.5rem",
        400: "25rem",
        450: "28.125rem",
        500: "31.25rem",
        520: "32.5rem",
        880: "55rem"
      },
      blur: (theme) => ({
        ...theme("spacing")
      }),
      maxWidth: (theme) => ({
        ...theme("spacing")
      }),
      minWidth: (theme) => ({
        ...theme("spacing")
      }),
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
