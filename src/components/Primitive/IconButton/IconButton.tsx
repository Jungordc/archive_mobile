/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, IIconProps } from "native-base/src/components/primitives/Icon";
import {
    default as NBIconButton,
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import { IoniconsNameType } from "./Type";

export { IoniconsNameType as IconNames };
export type IconButtonProps = {
    iconName?: IoniconsNameType;
    iconProps?: IIconProps;
} & IIconButtonProps;

const IconButton: React.FC<IconButtonProps> = ({
    iconName = "ellipsis-vertical",
    iconProps,
    ...props
}) => {
    return (
        <NBIconButton
            size="sm"
            fontVariant="small-caps"
            colorScheme="coolGray"
            icon={<Icon as={Ionicons} name={iconName} {...iconProps} />}
            {...props}
        />
    );
};

export default IconButton;
