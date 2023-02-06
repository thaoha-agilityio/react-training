const colors = {
  dark: {
    50: "#222531",
    100: "#14282f",
    200: "#000",
  },
  gray: {
    10: "#0000003d",
    20: "#e5e5e5",
    30: "#f8fafd",
    50: "#b4bebf",
    100: "#a6b0c3",
    150: "#58667E",
    200: "#75828a",
    300: "#757881",
    400: "#1e1e2fba",
  },
  blue: {
    20: "#0d75ff17",
    50: "#94aae4",
    100: "#4f85ac",
    200: "#0da8ff",
    250: "#0d75ff",
    300: "#6f5a8a",
    400: "#770dff",
  },
  transparent: "transparent",
  white: "#fff",
};

const darkTheme = {
  mainHeading: colors.gray[400],
  textColor: colors.white,
  totalTextColor: colors.white,
  categoriesText: colors.white,
  mainContent: colors.gray[400],
  cardBg: colors.gray[400],
  infoBook: colors.white,
};

const lightTheme = {
  mainHeading: colors.white,
  textColor: colors.dark[200],
  totalTextColor: colors.gray[30],
  categoriesText: colors.dark[50],
  mainContent: colors.gray[150],
  cardBg: colors.white,
  infoBook: colors.gray[300],
};

export { lightTheme, darkTheme, colors };
