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

const Stack = createNativeStackNavigator();

// eslint-disable-next-line prefer-const
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

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const AppCreate = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack />
        <PersistReducer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppCreate;
