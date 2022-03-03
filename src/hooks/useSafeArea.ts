import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import { getDefaultHeaderHeight } from "@react-navigation/elements";
import { StatusBar } from "react-native";

const useSafeAreaCustom = () => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
  const bottomHeight = getDefaultHeaderHeight(frame, false, insets.bottom);
  const currentHeight = StatusBar?.currentHeight ?? 0;

  return { headerHeight: currentHeight + headerHeight, bottomHeight, insertBottom: insets.bottom, insertTop: insets.top };
};

export default useSafeAreaCustom;
