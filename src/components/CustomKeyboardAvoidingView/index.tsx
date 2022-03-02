import React from "react";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform, StyleProp, ViewProps, ViewStyle } from "react-native";

interface IKeyboardAvoidingView extends ViewProps {
  style?: StyleProp<ViewStyle> | undefined;
}

const CustomKeyboardAvoidingView: React.FC<IKeyboardAvoidingView> = ({ children, style }) => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <KeyboardAvoidingView style={style} behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={headerHeight}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;
