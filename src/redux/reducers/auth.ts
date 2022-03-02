import { users } from "seacare-schemas";
import { LOGIN_SUCCESS, SIGNOUT_SUCCESS, UPDATE_USER_SUCCESS } from "../constants";

export interface IAuthState {
  tokenUser: null | string;
  dataUser: Partial<users>;
}

export type TAuthAction =
  | { type: "LOGIN_SUCCESS" | "SIGNOUT_SUCCESS"; payload?: IAuthState }
  | { type: "UPDATE_USER_SUCCESS"; payload?: users };

const initialState: IAuthState = {
  tokenUser: null,
  dataUser: {},
};

const auth = (state: IAuthState = initialState, action: TAuthAction): IAuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case SIGNOUT_SUCCESS: {
      return { ...state, ...initialState };
    }
    case UPDATE_USER_SUCCESS: {
      return { ...state, dataUser: { ...state.dataUser, ...action.payload } };
    }
    default:
      return state;
  }
};
export default auth;
