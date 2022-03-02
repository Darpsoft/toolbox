import { Label } from "@components/LabelApp";

import React, { ForwardedRef, ReactElement } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import { TextInput, useTheme, withTheme } from "react-native-paper";
import { TextInputProps } from "react-native-paper/lib/typescript/components/TextInput/TextInput";

export interface ITextInputDefault extends TextInputProps {
  status?: boolean;
  icon?: string;
  withRef?: boolean;
  rules?: {
    required?: {
      value?: any;
      message: string;
    };
  };
}

export const Default = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { icon, style, placeholder, label, error, ...otherProps }: ITextInputDefault,
  ref: ForwardedRef<NativeTextInput>
): ReactElement => {
  const theme: ReactNativePaper.Theme = useTheme();
  const styles = useStyle(theme);
  // This is in case it is implemented with forwardRef, the idea is not to add the ref
  const propsForRef = otherProps?.withRef ? { ref } : {};
  const textPlaceholder = otherProps.keyboardType?.includes("num") ? "Enter value here..." : "Enter text here...";

  return (
    <>
      {typeof label === "string" && label !== "" && <Label.Default label={label} required={otherProps?.rules?.required?.value ?? false} />}
      <TextInput
        dense={true}
        {...propsForRef}
        {...otherProps}
        theme={theme}
        mode="outlined"
        outlineColor={otherProps.outlineColor ?? "transparent"}
        placeholder={placeholder ?? textPlaceholder}
        style={[style, styles.inputStyle]}
      />
    </>
  );
};

const useStyle = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    inputStyle: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      fontSize: 16,
      fontFamily: "HelveticaNeueBold",
    },
    inputNativeStyle: {
      paddingTop: 8,
      paddingBottom: 8,
    },
  });

export default withTheme(Default);
