import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const SplashScreen: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <View style={styles.containers}>
      <ActivityIndicator size="large" />
      <Text>{label ?? "Getting the data from the database.."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
