import TextApp from "@components/TextApp";
import { RootState } from "@redux/reducers";
import { IModalLoaderState } from "@redux/reducers/loader";

import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Divider, Modal, Portal, useTheme } from "react-native-paper";
import { useSelector } from "react-redux";

const LoaderApp: React.FC = () => {
  const theme = useTheme();
  const styles = useStyle({ theme });
  const { status, title }: IModalLoaderState = useSelector(({ loader }: RootState) => loader);

  return (
    <Portal>
      {status && (
        <Modal visible={true} dismissable={false} style={styles.containerModal}>
          <View style={styles.insideModal}>
            <ActivityIndicator color={theme.colors.primary} />
            <Divider style={{ width: 16 }} />
            {title && <TextApp.Title fontSize="18">{title}</TextApp.Title>}
          </View>
        </Modal>
      )}
    </Portal>
  );
};

const useStyle = ({ theme }: { theme: ReactNativePaper.Theme }) =>
  StyleSheet.create({
    containerModal: {
      justifyContent: "center",
      alignItems: "center",
    },
    insideModal: {
      borderRadius: 12,
      paddingHorizontal: 30,
      paddingVertical: 20,
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
  });

export default LoaderApp;
