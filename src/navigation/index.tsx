import React, { ReactElement } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Default user Screen
import Home from "@screens/DefaultUser/Home";

// Auth screens
import Login from "@screens/Auth/Login";

const Stack = createNativeStackNavigator();

const MainStack = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const AppCreate = (): ReactElement => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppCreate;
