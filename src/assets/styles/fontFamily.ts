import { StyleSheet } from "react-native";

const BaseStyles = StyleSheet.create({
  main: {
    fontFamily: "RobotoRegular",
  },
});
const regular = StyleSheet.create({
  main: {
    fontFamily: "RobotoRegular",
  },
});
const light = StyleSheet.create({
  main: {
    fontFamily: "RobotoLight",
  },
});
const thin = StyleSheet.create({
  main: {
    fontFamily: "RobotoRegular",
  },
});
const bold = StyleSheet.create({
  main: {
    fontFamily: "RobotoBold",
  },
});
const medium = StyleSheet.create({
  main: {
    fontFamily: "RobotoMedium",
  },
});

export default BaseStyles;
export { regular, light, bold, thin, medium };
