import Config from "react-native-config";

const getNameEnvironment = (environment: string) => {
  if (environment === "development") return "development";
  if (environment === "production") return "production";
  return "production";
};

type TConfig = "development" | "production";
const workingEnvironment: TConfig = getNameEnvironment(Config.ENV);

export interface RetriesInformation {
  retries: number;
  time_between_retries: number;
}

export interface ErrorMessage {
  title: string;
  description: string;
}

interface IGlobalConfig {
  date_format: string;
  date_format_chat: string;
  date_time_format: string;
  calendar: {
    same_day: string;
    last_day: string;
    last_week: string;
    same_else: string;
  };
  styles: {
    default_padding_horizontal: number;
    default_margin_horizontal: number;
    default_margin_top: number;
    default_margin_bottom: number;
    default_margin_top_input: number;
    default_margin_top_label: number;
  };
  error: {};
}

const GLOBAL_CONFIG: IGlobalConfig = {
  // Date format of the system inputs
  date_format: "D MMM YYYY",
  date_format_chat: "MMM D, YYYY HH:mm [UTC] Z",
  date_time_format: "D MMM YYYY HH:mm",
  calendar: {
    same_day: `[Today] HH:mm`,
    last_day: `[Yesterday] HH:mm`,
    last_week: `dddd[,] DD MMM YYYY`,
    same_else: `DD MMM YYYY [at] HH:mm`,
  },
  styles: {
    default_padding_horizontal: 16,
    default_margin_horizontal: 16,
    default_margin_top: 8,
    default_margin_bottom: 8,
    default_margin_top_input: 16,
    default_margin_top_label: 16,
  },
  error: {},
};

const config = {
  development: {
    ...GLOBAL_CONFIG,
  },
  production: {
    ...GLOBAL_CONFIG,
  },
};

const globalSetting = config[workingEnvironment];
export default globalSetting;
