import {
  LOGIN_START,
  LOGIN_SUCCESS,
  REFRESH_TOKEN_START,
  REFRESH_TOKEN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "../constants";
import { TAuthAction, users, IAuthAction } from "../reducers/auth";

export const loginStart = (payload: IAuthAction["LOGIN_START"]["payload"]): TAuthAction => ({
  type: LOGIN_START,
  payload,
});
export const loginSuccess = (payload: IAuthAction["LOGIN_SUCCESS"]["payload"]): TAuthAction => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const signoutStart = (payload: any): any => ({
  type: SIGNOUT_START,
  payload,
});
export const signoutSuccess = (): TAuthAction => ({
  type: SIGNOUT_SUCCESS,
});

export const registerStart = (payload: undefined): any => ({
  type: REGISTER_START,
  payload,
});
export const registerSuccess = (payload: users): any => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const updateUserStart = (payload: users): any => ({
  type: UPDATE_USER_START,
  payload,
});
export const updateUserSuccess = (payload: users): TAuthAction => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const refreshTokenStart = (): TAuthAction => ({
  type: REFRESH_TOKEN_START,
});
export const refreshTokenSuccess = (payload: IAuthAction["REFRESH_TOKEN_SUCCESS"]["payload"]): TAuthAction => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});
