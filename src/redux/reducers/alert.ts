import { HIDE_ALERT, SHOW_ALERT } from "@redux/constants/alert";

export interface IAlertButtons {
  label: string;
  keepAlert?: boolean;
  onPress: (props?: any) => void;
  bold?: boolean;
}

// Tupla
export type THorizontalButtons = [IAlertButtons, IAlertButtons];

export interface IAlertInformation {
  title?: string;
  description?: string;
  horizontalButtons?: THorizontalButtons;
  verticalButtons?: IAlertButtons[];
  children?: React.ReactElement;
}

export type TAlertAction = { type: "SHOW_ALERT"; payload: IAlertInformation } | { type: "HIDE_ALERT" };

export interface IAlertState {
  status: boolean;
  alertInformation: IAlertInformation;
}

const initialState: IAlertState = {
  status: false,
  alertInformation: {
    title: undefined,
    description: undefined,
    horizontalButtons: undefined,
    verticalButtons: undefined,
    children: undefined,
  },
};

const alert = (state: IAlertState = initialState, action: TAlertAction): IAlertState => {
  switch (action.type) {
    case SHOW_ALERT: {
      return { status: true, alertInformation: action.payload };
    }
    case HIDE_ALERT: {
      return { ...state, status: false };
    }
    default:
      return state;
  }
};
export default alert;
