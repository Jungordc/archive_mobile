/** @format */

import React from "react";
import { View, ViewProps } from "react-native";
import StaticContainer from "../StaticContainer";

export interface SceneProps extends ViewProps {
    shouldUpdated?: any;
}

const Scene: React.FC<SceneProps> = ({
    shouldUpdated,
    children,
    ...restProps
}) => {
    return (
        <View {...restProps}>
            <StaticContainer shouldUpdate={shouldUpdated}>
                {children}
            </StaticContainer>
        </View>
    );
};

export default Scene;
