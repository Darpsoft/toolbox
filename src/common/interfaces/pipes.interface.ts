import { TextInputProps } from "react-native";
export interface IFormInput extends TextInputProps {
  status: boolean;
  label?: string;
  name: string;
  title?: string;
  defaultValue: any;
  rules?: {
    required?: {
      value: boolean;
      message: string;
    };
    min?: {
      value: number;
      message: string;
    };
    max?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
    validate?: () => boolean;
  };
  maximumDate?: Date;
  initialDate?: Date;
  textRight?: string;
  multiple?: boolean;
  icon?: string;
  withRef?: boolean;
  inputRef?: any;
  validateMessageError?: string;
  hideTimezone?: boolean;
  goBackRoute?: string;
  maxItemsForSelect?: number;
  outlineColor?: string;
  listLabel?: boolean;
  disabled?: boolean;
}
