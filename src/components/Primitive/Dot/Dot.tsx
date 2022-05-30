/** @format */

import { View } from "native-base/src/components/basic/View";
import { InterfaceViewProps } from "native-base/lib/typescript/components/basic/View/types";
import React from "react";

export type DotProps = {} & InterfaceViewProps;
const Dot: React.FC<DotProps> = (props) => {
    return <View size="1" borderRadius="full" bg="coolGray.800" {...props} />;
};

export default Dot;
