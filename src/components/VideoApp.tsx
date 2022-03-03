import { StyleSheet, View } from "react-native";
import React from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import Video, { VideoProperties } from "react-native-video";

const VideoApp: React.FC<VideoProperties> = (props) => {
  const theme = useTheme();
  return (
    <View style={[props.style, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
      <Video {...props} />
    </View>
  );
};

export default VideoApp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
