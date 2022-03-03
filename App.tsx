import React from "react";
import { Store } from "redux";
import AppCreate from "./src/navigation";
import reduxStorage from "./src/redux";
import { IAuthState } from "@redux/reducers/auth";
import { storage as database } from "./src/utils/storage";
import _ from "lodash";
import { useReducerCustom } from "./src/hooks/useReducerCustom";
import SplashScreen from "./src/components/SplashScreen";
import { Provider, useSelector } from "react-redux";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { StatusBar } from "react-native";
import { RootState } from "@redux/reducers";
import { changeTheme } from "@assets/styles/themes";
import IconFeather from "react-native-vector-icons/Feather";

export let storage: Store;

export const getStorageAsync = async (): Promise<{ auth?: IAuthState }> => {
  const auth = await database.auth.get("object");

  return {
    ...(_.isEqual(auth, {}) ? {} : { auth }),
  };
};

const memoizationSetting = (left: RootState["settings"], rigth: RootState["settings"]) => _.isEqual(left.theme, rigth.theme);

const WithPaper = () => {
  const settings = useSelector(({ settings }: RootState) => settings, memoizationSetting);
  const theme = useTheme();

  return (
    <>
      <StatusBar backgroundColor={theme.colors.background} animated barStyle={theme.dark ? "light-content" : "dark-content"} />
      <PaperProvider theme={changeTheme(settings.theme)} settings={{ icon: (props) => <IconFeather {...props} /> }}>
        <AppCreate />
      </PaperProvider>
    </>
  );
};

const initialState = {
  loading: true,
};

const App = () => {
  const [state, dispatchComponent] = useReducerCustom(initialState);

  const initialRequest = async () => {
    (!state.loading || !storage) && dispatchComponent({ loading: true });
    const reducers = await getStorageAsync();

    // This is for add all reducers in variable storage
    storage = reduxStorage(reducers);

    dispatchComponent({ loading: false });
  };

  React.useEffect(() => {
    initialRequest();
  }, []);

  if (state.loading) {
    return <SplashScreen />;
  }

  return (
    <Provider store={storage}>
      <WithPaper />
    </Provider>
  );
};

export default App;
