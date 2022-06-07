/** @format */

import React from "react";
import { View, Text } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";

export type ImageProps = {} & InterfaceViewProps;
const Image: React.FC<ImageProps> = (props) => {
    return (
        <View borderRadius="md" flex={1} bg="coolGray.400" {...props}></View>
    );
};

export default Image;
