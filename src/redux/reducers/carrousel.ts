import { HIDE_LOADER_CARROUSEL_SUCCESS, REQUEST_CARROUSEL_SUCCESS, SHOW_LOADER_CARROUSEL_SUCCESS } from "@redux/constants";

export interface Item {
  title: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

export interface IResponseCarrousel {
  title: string;
  type: "poster" | "thumb";
  items: Item[];
}

export interface ICarrouselAction {
  REQUEST_CARROUSEL_START: { type: "REQUEST_CARROUSEL_START" };
  SHOW_LOADER_CARROUSEL_SUCCESS: { type: "SHOW_LOADER_CARROUSEL_SUCCESS" };
  HIDE_LOADER_CARROUSEL_SUCCESS: { type: "HIDE_LOADER_CARROUSEL_SUCCESS" };
  REQUEST_CARROUSEL_SUCCESS: { type: "REQUEST_CARROUSEL_SUCCESS"; payload: { data: IResponseCarrousel[] } };
}

export type TCarrouselAction =
  | ICarrouselAction["REQUEST_CARROUSEL_START"]
  | ICarrouselAction["SHOW_LOADER_CARROUSEL_SUCCESS"]
  | ICarrouselAction["HIDE_LOADER_CARROUSEL_SUCCESS"]
  | ICarrouselAction["REQUEST_CARROUSEL_SUCCESS"];

export interface ICarrouselState {
  data: IResponseCarrousel[];
  loading: boolean;
}

const initialState: ICarrouselState = {
  data: [],
  loading: false,
};

const loader = (state = initialState, action: TCarrouselAction): ICarrouselState => {
  switch (action.type) {
    case REQUEST_CARROUSEL_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    }
    case SHOW_LOADER_CARROUSEL_SUCCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case HIDE_LOADER_CARROUSEL_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default loader;
