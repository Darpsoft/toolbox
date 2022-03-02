import React from "react";
import IconFeather from "react-native-vector-icons/Feather";
import { IconProps } from "react-native-vector-icons/Icon";

interface IIconAppProps extends IconProps {
  type: "feather";
}

const IconApp: React.FC<IIconAppProps> = ({ type, ...otherProps }) => {
  switch (type) {
    case "feather":
      return <IconFeather {...otherProps} />;
    default:
      return <IconFeather {...otherProps} />;
  }
};

export default IconApp;
