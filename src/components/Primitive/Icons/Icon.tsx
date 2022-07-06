/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
    Icon as NBIcon,
    IIconProps,
} from "native-base/src/components/primitives/Icon";
import { IoniconsNameType } from "../Type";

export type IconProps = {
    iconName?: IoniconsNameType;
} & IIconProps;

const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
    return <NBIcon as={Ionicons} name={iconName} {...props} />;
};

export default Icon;
