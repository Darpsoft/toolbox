import React from "react";
import { Dimensions, FlatList, Platform, RefreshControl, StatusBar, View } from "react-native";
import useNavigationCustom from "@hooks/useNavigationCustom";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";
import { useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "@redux/actions";
import { useLoader } from "@hooks/useLoader";
import { RootState } from "@redux/reducers";
import { requestCarrouselStart } from "@redux/actions/carrousel";
import Carrousel from "@components/Carrousel";
import useSafeAreaCustom from "@hooks/useSafeArea";

const { height } = Dimensions.get("window");

type ScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const theme = useTheme();
  const { data, loading } = useSelector((state: RootState) => state.carrousel);
  const [navigationHeader] = useNavigationCustom();
  const [showLoaderComponent] = useLoader();
  const dispatch = useDispatch();
  const { headerHeight } = useSafeAreaCustom();

  const signOut = () => {
    showLoaderComponent("Closing session");
    dispatch(signoutSuccess());
  };

  React.useEffect(() => {
    initialRequest();
  }, []);

  const initialRequest = () => {
    dispatch(requestCarrouselStart());
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
      <FlatList
        refreshControl={<RefreshControl colors={[theme.colors.accent]} refreshing={loading} onRefresh={initialRequest} />}
        data={data}
        renderItem={(props) => <Carrousel key={props.index} {...props.item} />}
        snapToInterval={height - headerHeight}
        snapToAlignment={"center"}
        decelerationRate="normal"
      />
    </View>
  );
};

export default Home;
