import React, { useMemo } from "react";
import { StyleProp, TextStyle, Text } from "react-native";

import Base, * as otherFamilyFont from "@assets/styles/fontFamily";
import BaseFontSize from "@assets/styles/fontSize";
import { useTheme, withTheme } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

export const getFontSize = (fontSize: string): string => {
  return BaseFontSize[`size${fontSize}`] ?? BaseFontSize.size16;
};

export const getFontFamily = (fontFamily: string): any => {
  const familyFont: any = otherFamilyFont;
  return familyFont[fontFamily] ?? Base;
};

/**
 * Component of Text
 */

export interface ITextApp extends TextInputProps {
  fontSize?: "10" | "12" | "13" | "14" | "16" | "18" | "20" | "22" | "24" | "26" | "28" | "30" | "32" | "42" | "70";
  fontFamily?: "regular" | "light" | "bold" | "medium" | "thin";
  color?: StyleProp<TextStyle> | string;
  children: React.ReactNode;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}

const Default: React.FC<ITextApp> = ({ style, children, fontSize = "16", fontFamily = "light", color = "", ...otherProps }) => {
  const fontSizeSelected = useMemo(() => getFontSize(fontSize), [fontSize]);
  const fontFamilySelected = useMemo(() => getFontFamily(fontFamily), [fontFamily]);
  const theme: ReactNativePaper.Theme = useTheme();
  return (
    <Text {...otherProps} style={[{ color: color !== "" ? color : theme.colors.text }, style, fontFamilySelected.main, fontSizeSelected]}>
      {children}
    </Text>
  );
};

export default withTheme(Default);
