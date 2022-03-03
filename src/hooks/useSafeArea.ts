import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context";
import { getDefaultHeaderHeight } from "@react-navigation/elements";

const useSafeAreaCustom = () => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);
  const bottomHeight = getDefaultHeaderHeight(frame, false, insets.bottom);
  return { headerHeight, bottomHeight, insertBottom: insets.bottom, insertTop: insets.top };
};

export default useSafeAreaCustom;
