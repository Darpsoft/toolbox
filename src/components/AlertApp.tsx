import TextApp from "@components/TextApp";
import { useAlert } from "@hooks/useAlert";
import { RootState } from "@redux/reducers";
import { IAlertButtons, IAlertState, THorizontalButtons } from "@redux/reducers/alert";

import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Modal, Portal, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";
import globalSetting from "../config";

const { default_padding_horizontal, default_margin_bottom } = globalSetting.styles;

// Button for title only
const verticalButtonMook: IAlertButtons = {
  keepAlert: false,
  label: "OK",
  onPress: () => console.info(""),
};

const AlertApp: React.FC = () => {
  const theme: ReactNativePaper.Theme = useTheme();
  const styles = useStyle({ theme });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showAlertComponent, hideAlertComponent] = useAlert();

  const { status, alertInformation }: IAlertState = useSelector(({ alert }: RootState) => alert);
  const { title, description, children, horizontalButtons, verticalButtons } = alertInformation;

  const onlyTitle = title && !horizontalButtons && !verticalButtons;
  const onlyDescription = description && !horizontalButtons && !verticalButtons;

  const handlePress = (functionToPress: (props?: any) => void, keepAlert: boolean | undefined = true) => {
    if (!keepAlert) hideAlertComponent();
    functionToPress();
  };

  const renderHorizontalButtons = (horizontalButtons: THorizontalButtons) => {
    const [leftButton, rightButton] = horizontalButtons;
    return (
      <View style={styles.containerHorizontalButtons}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.buttonTextLeft}
          onPress={() => handlePress(leftButton.onPress, leftButton.keepAlert)}
        >
          <TextApp.Default fontSize="16" color={theme.colors.text} style={leftButton.bold && { fontWeight: "bold" }}>
            {leftButton.label}
          </TextApp.Default>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.buttonTextRight}
          onPress={() => handlePress(rightButton.onPress, rightButton.keepAlert)}
        >
          <TextApp.Default fontSize="16" color={theme.colors.text} style={rightButton.bold && { fontWeight: "bold" }}>
            {rightButton.label}
          </TextApp.Default>
        </TouchableOpacity>
      </View>
    );
  };

  const renderVerticalButtons = (verticalButtons: IAlertButtons[]) => {
    return verticalButtons.map((verticalButton, index) => (
      <View style={styles.containerHorizontalButtons} key={index}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.buttonTextLeft}
          onPress={() => handlePress(verticalButton.onPress, verticalButton.keepAlert)}
        >
          <TextApp.Default fontSize="16" color={theme.colors.onSurface} style={verticalButton.bold && { fontWeight: "bold" }}>
            {verticalButton.label}
          </TextApp.Default>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <Portal>
      {status && (
        <Modal visible={true} dismissable={false} onDismiss={() => hideAlertComponent()} style={styles.containerModal}>
          <View style={[styles.insideModal]}>
            <View>
              {title && (
                <TextApp.Title fontSize="18" style={styles.titleText}>
                  {title}
                </TextApp.Title>
              )}
              {description && (
                <TextApp.Default fontSize="14" style={[styles.descriptionText, !title && { marginTop: 16 }]}>
                  {description}
                </TextApp.Default>
              )}
              {children && (
                <View style={{ paddingHorizontal: default_padding_horizontal, marginBottom: default_margin_bottom }}>{children}</View>
              )}
            </View>
            {horizontalButtons && renderHorizontalButtons(horizontalButtons)}
            {verticalButtons && renderVerticalButtons(verticalButtons)}
            {(onlyTitle || onlyDescription) && renderVerticalButtons([verticalButtonMook])}
          </View>
        </Modal>
      )}
    </Portal>
  );
};

const useStyle = ({ theme }: { theme: ReactNativePaper.Theme }) =>
  StyleSheet.create({
    containerModal: {
      paddingHorizontal: 64,
    },
    insideModal: {
      backgroundColor: theme.colors.background,
      borderRadius: 12,
    },
    titleText: {
      marginBottom: 16,
      marginTop: 16,
      textAlign: "center",
    },
    descriptionText: {
      marginTop: -8,
      marginHorizontal: 16,
      marginBottom: 16,
      textAlign: "center",
    },
    buttonTextLeft: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonTextRight: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderLeftColor: theme.colors.onSurface,
      borderLeftWidth: 1,
    },
    containerHorizontalButtons: {
      height: 48,
      flexDirection: "row",
      borderTopColor: theme.colors.onSurface,
      borderTopWidth: 1,
    },
  });

export default AlertApp;
