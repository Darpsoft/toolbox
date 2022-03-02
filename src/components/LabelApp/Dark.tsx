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
    <View style={{ flexDirection: "row" }}>
      <TextApp.Default style={{ fontWeight: "bold" }} color={theme.colors.primary}>
        {label}
      </TextApp.Default>
      {required && <TextApp.Default fontSize="20" color={theme.colors.error} style={{ marginLeft: 4 }}>{`*`}</TextApp.Default>}
    </View>
  );
};

export default Default;
