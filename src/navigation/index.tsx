import React, { useEffect } from "react";
import { View } from "react-native";

// React Native Navigation
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Default user Screen
import Home from "@screens/DefaultUser/Home";

// Auth screens
import Login from "@screens/Auth/Login";

// Redux
import { RootState } from "@redux/reducers";
import { useSelector } from "react-redux";

// Utils
import { storage as database } from "@utils/storage";
import { useTheme } from "react-native-paper";
import AlertApp from "@components/AlertApp";
import LoaderApp from "@components/LoaderApp";
import _ from "lodash";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

let firstLoad = {
  auth: true,
};

const PersistReducer = () => {
  const auth = useSelector(({ auth }: RootState) => auth);

  useEffect(() => {
    saveReducerData("auth", auth);
  }, [auth]);
  /**
   * Function to save the data when the Storage is updated,
   * in this case it will only save <auth>
   */
  async function saveReducerData<T>(nameReducer: "auth", storage: T) {
    if (!firstLoad[nameReducer]) {
      await database[nameReducer].set(storage, "object");
    } else {
      firstLoad[nameReducer] = false;
    }
  }

  return <View />;
};
const memoizationAuth = (left: RootState["auth"], rigth: RootState["auth"]) => _.isEqual(left.tokenUser, rigth.tokenUser);

const MainStack = () => {
  const auth = useSelector(({ auth }: RootState) => auth, memoizationAuth);
  return (
    <Stack.Navigator>
      {auth?.tokenUser === null ? (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
  );
};

const AppCreate = () => {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          dark: theme.dark,
          colors: {
            primary: theme.colors.primary,
            background: theme.colors.background,
            card: theme.colors.surface,
            text: theme.colors.text,
            border: theme.colors.backdrop,
            notification: theme.colors.notification,
          },
        }}
      >
        <MainStack />
        <PersistReducer />
        <AlertApp />
        <LoaderApp />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppCreate;
