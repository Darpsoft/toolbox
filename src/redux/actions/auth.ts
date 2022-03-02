import { users } from "seacare-schemas";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "../constants";
import { TAuthAction, IAuthState } from "../reducers/auth";

export const loginStart = (payload: undefined): any => ({
  type: LOGIN_START,
  payload,
});
export const loginSuccess = (payload: IAuthState): TAuthAction => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const signoutStart = (payload: undefined): any => ({
  type: SIGNOUT_START,
  payload,
});
export const signoutSuccess = (payload?: any): any => ({
  type: SIGNOUT_SUCCESS,
  payload,
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
