import TextApp from "@components/TextApp";
import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

export type IDefaultProps = {
  label: string;
  required?: boolean;
};

const Default: React.FC<IDefaultProps> = ({ label, required }) => {
  const theme: ReactNativePaper.Theme = useTheme();
  return (
    <View style={{ flexDirection: "row", marginBottom: -4 }}>
      <TextApp.Default color={theme.colors.text}>{label}</TextApp.Default>
      <TextApp.Default fontSize="20" color={theme.colors.error} style={{ marginLeft: 4 }}>
        {required ? `*` : " "}
      </TextApp.Default>
    </View>
  );
};

export default Default;
