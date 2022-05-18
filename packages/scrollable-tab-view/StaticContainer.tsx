/** @format */

import React from "react";

export type StaticContainerProps = {
    shouldUpdate?: any;
};

const areEqual = (
    prevProps: StaticContainerProps,
    nextProps: StaticContainerProps
) => {
    if (prevProps.shouldUpdate === nextProps.shouldUpdate) {
        return true; // donot re-render
    }
    return false; // will re-render
};
const StaticContainer: React.FC<StaticContainerProps> = ({ children }) => {
    if (children === null || children === false) return null;
    return React.Children.only(children);
};

export default React.memo(StaticContainer, areEqual);
