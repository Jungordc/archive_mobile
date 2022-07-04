/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    Icon as NBIcon,
    IIconProps,
} from "native-base/src/components/primitives/Icon";

export type IconProps = {} & IIconProps;

const Icon: React.FC<IconProps> = ({ ...props }) => {
    return <NBIcon as={Ionicons} {...props} />;
};

export default Icon;
