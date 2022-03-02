import React from "react";
import { Store } from "redux";
import AppCreate from "./src/navigation";
import reduxStorage from "./src/redux";
import { IAuthState } from "@redux/reducers/auth";
import { storage as database } from "./src/utils/storage";
import _ from "lodash";
import { useReducerCustom } from "./src/hooks/useReducerCustom";
import SplashScreen from "./src/components/SplashScreen";
import { Provider } from "react-redux";

export let storage: Store;

export const getStorageAsync = async (): Promise<{ auth?: IAuthState }> => {
  const auth = await database.auth.get("object");

  return {
    ...(_.isEqual(auth, {}) ? {} : { auth }),
  };
};

const initialState = {
  loading: true,
  reducers: {},
};

const App = () => {
  const [state, dispatchComponent] = useReducerCustom(initialState);

  const initialRequest = async () => {
    (!state.loading || !storage) && dispatchComponent({ loading: true });
    const reducers = await getStorageAsync();
    dispatchComponent({ loading: false, reducers });
  };

  React.useEffect(() => {
    initialRequest();
  }, []);

  // This is for add all reducers in variable storage
  storage = reduxStorage(state.reducers);

  if (state.loading) {
    return <SplashScreen />;
  }

  return (
    <Provider store={storage}>
      <AppCreate />
    </Provider>
  );
};

export default App;
