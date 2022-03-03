import { LOGIN_SUCCESS, REFRESH_TOKEN_SUCCESS, SIGNOUT_SUCCESS, UPDATE_USER_SUCCESS } from "../constants";

export interface users {
  email: string;
}

export interface IAuthState {
  tokenUser: null | string;
  dataUser: Partial<users>;
}

export interface IAuthAction {
  LOGIN_START: { type: "LOGIN_START"; payload?: Partial<users> };
  LOGIN_SUCCESS: { type: "LOGIN_SUCCESS"; payload?: IAuthState };
  SIGNOUT_SUCCESS: { type: "SIGNOUT_SUCCESS"; payload?: IAuthState };
  REFRESH_TOKEN_START: { type: "REFRESH_TOKEN_START" };
  REFRESH_TOKEN_SUCCESS: { type: "REFRESH_TOKEN_SUCCESS"; payload: { tokenUser: string } };
  UPDATE_USER_SUCCESS: { type: "UPDATE_USER_SUCCESS"; payload?: users };
}

export type TAuthAction =
  | IAuthAction["LOGIN_START"]
  | IAuthAction["LOGIN_SUCCESS"]
  | IAuthAction["SIGNOUT_SUCCESS"]
  | IAuthAction["REFRESH_TOKEN_START"]
  | IAuthAction["REFRESH_TOKEN_SUCCESS"]
  | IAuthAction["UPDATE_USER_SUCCESS"];

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
    case REFRESH_TOKEN_SUCCESS: {
      return { ...state, tokenUser: action.payload.tokenUser };
    }
    default:
      return state;
  }
};
export default auth;
