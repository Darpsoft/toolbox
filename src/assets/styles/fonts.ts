import { Platform } from "react-native";

const fontConfig: any = {
  ios: {
    regular: {
      fontFamily: "RobotoRegular",
    },
    medium: {
      fontFamily: "RobotoMedium",
    },
    light: {
      fontFamily: "RobotoLight",
    },
    thin: {
      fontFamily: "RobotoRegular",
    },
  },
  android: {
    light: {
      fontFamily: "RobotoLight",
    },
    regular: {
      fontFamily: "RobotoRegular",
    },
    medium: {
      fontFamily: "RobotoMedium",
    },
    bold: {
      fontFamily: "RobotoBold",
    },
    boldItalic: {
      fontFamily: "RobotoBoldItalic",
    },
    black: {
      fontFamily: "RobotoBlack",
    },
    blackItalic: {
      fontFamily: "RobotoBlackItalic",
    },
  },
};

export function configureFonts(): any {
  const fonts = Platform.select(fontConfig);
  return fonts;
}
