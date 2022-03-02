import * as React from "react";
import ControllerTextInput from "@components/ControllerTextInput";
import { Control, FieldValues } from "react-hook-form";
import { IFormInput } from "@common/interfaces/pipes.interface";

interface IRenderInputs {
  inputs: IFormInput[];
  errors: { [x: string]: any };
  control: Control<FieldValues, object>;
}

const RenderInputs: React.FC<IRenderInputs> = ({ inputs, ...otherProps }) => {
  return (
    <>
      {inputs
        .filter((input) => input.status)
        .map((input) => (
          <ControllerTextInput key={input.name} {...input} {...otherProps} />
        ))}
    </>
  );
};

export default RenderInputs;
