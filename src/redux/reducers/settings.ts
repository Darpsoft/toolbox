import { HIDE_LOADER, SHOW_LOADER } from "../constants";

const initialStateSettings = {
  loader: false,
  theme: false, // false = Modo normal, true = Modo noche o modo oscuro
};

export interface ISettingsState {
  loader: boolean;
  theme: boolean;
}

export type TSettingAction = { type: "SHOW_LOADER" | "HIDE_LOADER" };

export function settingsReducer(state: ISettingsState = initialStateSettings, action: TSettingAction): ISettingsState {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
}

export default settingsReducer;
