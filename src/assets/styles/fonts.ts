import { Platform } from "react-native";

const fontConfig: any = {
  ios: {
    regular: {
      fontFamily: "System",
    },
    medium: {
      fontFamily: "System",
    },
    light: {
      fontFamily: "System",
    },
    thin: {
      fontFamily: "System",
    },
  },
  android: {
    light: {
      fontFamily: "Roboto-Light",
    },
    regular: {
      fontFamily: "Roboto-Regular",
    },
    medium: {
      fontFamily: "Roboto-Medium",
    },
    bold: {
      fontFamily: "Roboto-Bold",
    },
    boldItalic: {
      fontFamily: "Roboto-BoldItalic",
    },
    black: {
      fontFamily: "Roboto-Black",
    },
    blackItalic: {
      fontFamily: "Roboto-BlackItalic",
    },
  },
};

export function configureFonts(): any {
  const fonts = Platform.select(fontConfig);
  return fonts;
}
