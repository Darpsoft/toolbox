import React, { ReactElement } from "react";
import { Control, Controller, ControllerRenderProps, FieldValues } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import TextInputApp from "./TextInputApp";
import { IFormInput } from "@common/interfaces/pipes.interface";

export interface IControllerTextInputProps extends IFormInput {
  errors: { [x: string]: any };
  control: Control<FieldValues, object>;
}

export const ControllerTextInput = (propsController: IControllerTextInputProps): ReactElement => {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <Controller
        render={(props: { field: ControllerRenderProps<FieldValues, string> }) => {
          const { onChange, onBlur, value, ref } = props.field;
          const objectError = propsController.errors;
          const isError = !!objectError[propsController.name];

          return (
            <TextInputApp.WithRef
              {...propsController}
              ref={ref}
              onBlur={onBlur}
              onChangeText={(value: any) => onChange(value)}
              value={value}
              error={isError}
            />
          );
        }}
        {...propsController}
      />
      {propsController.errors[propsController.name] && (
        <Text style={{ color: "red", margin: 4 }}>
          {propsController.errors[propsController.name].type === "validate" && !!propsController.validateMessageError
            ? propsController.validateMessageError
            : propsController.errors[propsController.name].message}
        </Text>
      )}
    </View>
  );
};

const useStyle = (): any =>
  StyleSheet.create({
    container: {
      marginVertical: 8,
    },
  });

export default ControllerTextInput;
