import { DarkTheme, DefaultTheme } from "react-native-paper";
import { configureFonts } from "./fonts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray900 = "#090909"; // 900
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray800 = "#121212"; // 800
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray700 = "#1a1a1a"; // 700
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray600 = "#1f1e1e"; // 600
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray400 = "#595959"; // 400
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray200 = "#696969"; // 200
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray90 = "#828282"; // 90
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray70 = "#a7a7a7"; // 70
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray50 = "#c0c0c0"; // 50
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray30 = "#d9d9d9"; // 30
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray10 = "#f2f2f2"; // 10
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray5 = "#f0f0f0"; // 5
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const codGray500 = "#434343"; // 500

const codGray20 = "#e6e6e6"; // 30

const customDark: ReactNativePaper.ThemeColors = {
  ...DefaultTheme.colors,
  background: "#141212",
  surface: "#201e1e",
  text: codGray20,
  onSurface: codGray20,
  accent: "#cbe3f1",
  primary: "#2e86de",
  backdrop: "rgba(0, 0, 0, .4)",
  disabled: "rgba(255, 255, 255, 0.38)",
  error: "#CF6679",
  notification: "#ff80ab",
  placeholder: "rgba(255, 255, 255, 0.50)",
};

const customBright: ReactNativePaper.ThemeColors = {
  ...DefaultTheme.colors,
  background: "#fff",
  text: "#000",
  surface: "#f1f3f5",
  onSurface: "#2e3135",
};

export const changeTheme = (selectedTheme: boolean): ReactNativePaper.Theme | undefined => {
  const theme = selectedTheme ? DarkTheme : DefaultTheme;
  const customs = selectedTheme ? customDark : customBright;
  const themes: ReactNativePaper.Theme = {
    ...theme,
    colors: {
      ...theme.colors,
      ...customs,
    },
    fonts: configureFonts(),
    roundness: 8,
  };

  return themes;
};
