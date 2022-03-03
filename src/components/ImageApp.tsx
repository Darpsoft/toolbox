import { ImageProps, StyleSheet, Image, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const ImageApp: React.FC<ImageProps> = (props) => {
  const theme = useTheme();
  return (
    <View style={[props.style, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.container}>
        <Image source={require("../assets/images/logo-stycky.png")} style={{ opacity: 0.2 }} />
      </View>
      <Image {...props} />
    </View>
  );
};

export default ImageApp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
