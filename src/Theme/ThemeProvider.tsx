/** @format */

import React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "./theme";

const ThemeProvider: React.FC = ({ children }) => {
    return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default ThemeProvider;
