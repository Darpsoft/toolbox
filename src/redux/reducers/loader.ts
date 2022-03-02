import { HIDE_LOADER, SHOW_LOADER } from "@redux/constants";

export type TLoaderAction = { type: "SHOW_LOADER"; payload?: string } | { type: "HIDE_LOADER" };

export interface IModalLoaderState {
  status: boolean;
  title: string;
}

const initialState: IModalLoaderState = {
  status: false,
  title: "Please wait...",
};

const loader = (state: IModalLoaderState = initialState, action: TLoaderAction): IModalLoaderState => {
  switch (action.type) {
    case SHOW_LOADER: {
      return { status: true, title: action?.payload ?? state.title };
    }
    case HIDE_LOADER: {
      return { ...state, status: false };
    }
    default:
      return state;
  }
};
export default loader;
