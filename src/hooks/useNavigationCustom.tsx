import * as React from "react";
import IconApp from "@components/IconApp";
import TextApp from "@components/TextApp";
import { useTheme } from "react-native-paper";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export interface INavigationHeader {
  pressButtonLeft?: () => void;
  pressButtonRight?: () => void;
  title?: string;
  iconLeft?: string;
  textLeft?: string;
  textRight?: string;
  iconRight?: string;
  titleAlign?: "center" | "left" | undefined;
  iconLeftColor?: string;
  iconRightColor?: string;
  backgroundColor?: string;
  iconLeftFamily?: "feather";
  iconRightFamily?: "feather";
  headerHeight?: number;
  colorTitle?: string;
}

function useNavigationCustom(): [(props: INavigationHeader) => Partial<NativeStackNavigationOptions>] {
  const theme = useTheme();
  const styles = useStyles({ theme });

  const renderHeader = (props: INavigationHeader) => {
    const {
      pressButtonLeft,
      pressButtonRight,
      title,
      iconLeft,
      iconRight,
      titleAlign = "center",
      iconLeftColor = theme.colors.text,
      iconRightColor = theme.colors.text,
      textRight,
      textLeft,
      backgroundColor,
      iconLeftFamily = "feather",
      iconRightFamily = "feather",
      colorTitle,
    } = props;

    const renderHeaderLeft = () => (
      <TouchableOpacity activeOpacity={1} style={styles.headerStyle} onPress={pressButtonLeft}>
        {iconLeft && <IconApp name={iconLeft} style={{ fontSize: 24 }} color={iconLeftColor} type={iconLeftFamily} />}
        {textLeft && (
          <TextApp.Title fontSize="18" color={theme.colors.text}>
            {textLeft}
          </TextApp.Title>
        )}
      </TouchableOpacity>
    );

    const renderHeaderRight = () => {
      return (
        <TouchableOpacity activeOpacity={1} style={styles.headerStyle} onPress={pressButtonRight}>
          {iconRight && <IconApp name={iconRight} style={{ fontSize: 24 }} color={iconRightColor} type={iconRightFamily} />}
          {textRight && (
            <TextApp.Title fontSize="18" color={theme.colors.text}>
              {textRight}
            </TextApp.Title>
          )}
        </TouchableOpacity>
      );
    };

    return {
      headerLeft: iconLeft || textLeft ? renderHeaderLeft : undefined,
      headerTitle: () => (
        <TextApp.Title fontSize="20" color={colorTitle ?? theme.colors.text}>
          {title}
        </TextApp.Title>
      ),
      headerRight: iconRight || textRight ? renderHeaderRight : undefined,
      headerStyle: { backgroundColor: backgroundColor ?? theme.colors.background, elevation: 0, shadowColor: "transparent" },
      headerTitleAlign: titleAlign,
    };
  };

  return [renderHeader];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = ({ theme }: { theme: ReactNativePaper.Theme }) =>
  StyleSheet.create({
    headerStyle: {
      alignItems: "center",
      paddingHorizontal: 16,
      flexDirection: "row",
    },
  });

export default useNavigationCustom;
