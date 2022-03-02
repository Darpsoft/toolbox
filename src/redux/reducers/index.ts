import { combineReducers } from "redux";
import { isEqual } from "lodash";
import auth, { IAuthState, TAuthAction } from "./auth";
import settings from "./settings";
import alert from "./alert";
import loader from "./loader";
import carrousel from "./carrousel";

interface IAsyncStorage {
  auth?: IAuthState;
}

const reducers = (asyncStorage: IAsyncStorage = {}) => {
  return combineReducers({
    settings,
    alert,
    loader,
    carrousel,
    auth: (stateReducer: IAuthState | undefined, actions: TAuthAction): IAuthState => {
      const state = stateReducer ?? asyncStorage?.auth;
      return auth(isEqual(state, {}) ? undefined : state, actions);
    },
  });
};

export type RootState = ReturnType<ReturnType<typeof reducers>>;
export default reducers;
