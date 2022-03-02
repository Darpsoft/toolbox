import React from "react";
import { withTheme } from "react-native-paper";
import Default, { ITextApp } from "./Default";

/**
 * Component of Text HeaderList
 */

const HeaderList: React.FC<ITextApp> = (props) => {
  return <Default {...props} fontSize="20" fontFamily="bold" />;
};

export default withTheme(HeaderList);
