import { Platform, StatusBar, Text, View } from "react-native";
import React from "react";
import useNavigationCustom from "@hooks/useNavigationCustom";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "@redux/actions";
import { useLoader } from "@hooks/useLoader";

type ScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const theme = useTheme();
  const [navigationHeader] = useNavigationCustom();
  const [showLoaderComponent] = useLoader();
  const dispatch = useDispatch();

  const signOut = () => {
    showLoaderComponent("Closing session");
    dispatch(signoutSuccess());
  };

  React.useLayoutEffect(() => {
    const navigationOption = navigationHeader({
      title: "Toolbox",
      iconRight: "power",
      iconRightFamily: "feather",
      backgroundColor: theme.colors.primary,
      colorTitle: "#fff",
      iconRightColor: "#fff",
      pressButtonRight: signOut,
    });
    navigation.setOptions(navigationOption);
  }, []);

  return (
    <View>
      <StatusBar barStyle={Platform.OS === "ios" ? "light-content" : "dark-content"} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
