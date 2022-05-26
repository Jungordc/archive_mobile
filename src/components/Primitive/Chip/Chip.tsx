/** @format */

import { View, Text } from "native-base";
import { InterfaceViewProps } from "native-base/lib/typescript/components/basic/View/types";
import React from "react";

export type ChipProps = {} & InterfaceViewProps;
const Chip: React.FC<ChipProps> = ({ children, ...props }) => {
    return (
        <View bg="amber.200" py={1} px={3} borderRadius="full" {...props}>
            <Text>{children}</Text>
        </View>
    );
};

export default Chip;
