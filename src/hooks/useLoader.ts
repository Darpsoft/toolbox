import { showLoader, hideLoader } from "@redux/actions";
import { TLoaderAction } from "@redux/reducers/loader";
import { delay } from "@utils/utils";
import { useDispatch } from "react-redux";

type ShowLoaderComponent = (payload?: string) => Promise<void>;
type HideLoaderComponent = () => TLoaderAction;

export function useLoader(): [ShowLoaderComponent, HideLoaderComponent] {
  const dispatch = useDispatch();

  const handleShowLoader = async (payload = "Please wait..."): Promise<void> => {
    dispatch(showLoader(payload));
    await delay(1000);
  };

  const handleHideAlert = (): TLoaderAction => {
    return dispatch(hideLoader());
  };

  return [handleShowLoader, handleHideAlert];
}
