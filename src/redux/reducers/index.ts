import { combineReducers } from "redux";
import { isEqual } from "lodash";
import auth, { IAuthState, TAuthAction } from "./auth";
import settings from "./settings";
import alert from "./alert";
import loader from "./loader";
import carousel from "./carousel";

interface IAsyncStorage {
  auth?: IAuthState;
}

const reducers = (asyncStorage: IAsyncStorage = {}) => {
  return combineReducers({
    settings,
    alert,
    loader,
    carousel,
    auth: (stateReducer: IAuthState | undefined, actions: TAuthAction): IAuthState => {
      const state = stateReducer ?? asyncStorage?.auth;
      return auth(isEqual(state, {}) ? undefined : state, actions);
    },
  });
};

export type RootState = ReturnType<ReturnType<typeof reducers>>;
export default reducers;
