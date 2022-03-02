import React from "react";
import { withTheme } from "react-native-paper";
import Default, { ITextApp } from "./Default";

/**
 * Component of Text
 */

const Title: React.FC<ITextApp> = (props) => {
  return <Default fontSize="42" fontFamily="bold" {...props} style={[{ fontWeight: "700" }, props.style]} />;
};

export default withTheme(Title);
