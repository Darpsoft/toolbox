import { combineReducers } from "redux";
import { isEqual } from "lodash";
import auth, { IAuthState, TAuthAction } from "./auth";
import settings from "./settings";

interface IAsyncStorage {
  auth?: IAuthState;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const reducers = (asyncStorage: IAsyncStorage = {}) => {
  return combineReducers({
    settings,
    auth: (stateReducer: IAuthState | undefined, actions: TAuthAction): IAuthState => {
      const state = stateReducer ?? asyncStorage?.auth;
      return auth(isEqual(state, {}) ? undefined : state, actions);
    },
  });
};

export type RootState = ReturnType<ReturnType<typeof reducers>>;
export default reducers;
