/** @format */

import React from "react";
import { NativeBaseProvider, NativeBaseProviderProps } from "native-base";
import { theme } from "./theme";

const ThemeProvider: React.FC<NativeBaseProviderProps> = ({
    children,
    ...props
}) => {
    return (
        <NativeBaseProvider theme={theme} {...props}>
            {children}
        </NativeBaseProvider>
    );
};

export default ThemeProvider;
