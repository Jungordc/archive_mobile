/** @format */

import React, { useMemo } from "react";
import isString from "lodash/isString";
import Text, { ITextProps } from "native-base/src/components/primitives/Text";

export type TextOrComponent = {
    component?: React.ReactNode;
    textProps?: ITextProps;
};
const useTextOrComponent = ({ component, textProps }: TextOrComponent) => {
    return useMemo(() => {
        if (isString(component)) return <Text {...textProps}>{component}</Text>;
        return component;
    }, [component, textProps]);
};

export default useTextOrComponent;
