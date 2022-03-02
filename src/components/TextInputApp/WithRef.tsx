import { forwardRef } from "react";
import { Default } from "./Default";

export default forwardRef((props: any, ref: any) => Default({ ...props, withRef: true }, ref));
