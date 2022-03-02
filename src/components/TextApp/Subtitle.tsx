import React from "react";
import { withTheme } from "react-native-paper";
import Default, { ITextApp } from "./Default";

/**
 * Component of Text Subtitle
 */

const Subtitle: React.FC<ITextApp> = (props) => {
  return <Default fontSize="32" fontFamily="bold" {...props} />;
};

export default withTheme(Subtitle);
