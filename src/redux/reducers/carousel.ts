import { HIDE_LOADER_CAROUSEL_SUCCESS, REQUEST_CAROUSEL_SUCCESS, SHOW_LOADER_CAROUSEL_SUCCESS } from "@redux/constants";

export interface Item {
  title: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

export interface IResponseCarousel {
  title: string;
  type: "poster" | "thumb";
  items: Item[];
}

export interface ICarouselAction {
  REQUEST_CAROUSEL_START: { type: "REQUEST_CAROUSEL_START" };
  SHOW_LOADER_CAROUSEL_SUCCESS: { type: "SHOW_LOADER_CAROUSEL_SUCCESS" };
  HIDE_LOADER_CAROUSEL_SUCCESS: { type: "HIDE_LOADER_CAROUSEL_SUCCESS" };
  REQUEST_CAROUSEL_SUCCESS: { type: "REQUEST_CAROUSEL_SUCCESS"; payload: { data: IResponseCarousel[] } };
}

export type TCarouselAction =
  | ICarouselAction["REQUEST_CAROUSEL_START"]
  | ICarouselAction["SHOW_LOADER_CAROUSEL_SUCCESS"]
  | ICarouselAction["HIDE_LOADER_CAROUSEL_SUCCESS"]
  | ICarouselAction["REQUEST_CAROUSEL_SUCCESS"];

export interface ICarouselState {
  data: IResponseCarousel[];
  loading: boolean;
}

const initialState: ICarouselState = {
  data: [],
  loading: false,
};

const loader = (state = initialState, action: TCarouselAction): ICarouselState => {
  switch (action.type) {
    case REQUEST_CAROUSEL_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    }
    case SHOW_LOADER_CAROUSEL_SUCCESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case HIDE_LOADER_CAROUSEL_SUCCESS: {
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
