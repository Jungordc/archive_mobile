/** @format */

import React from "react";
import {
    default as NBIconButton,
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import Icon, { IconProps } from "../Icons/Icon";
import { IoniconsNameType } from "../Type";

export type IconButtonProps = {
    iconName?: IoniconsNameType;
    iconProps?: IconProps;
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
            icon={<Icon name={iconName} {...iconProps} />}
            {...props}
        />
    );
};

export default IconButton;
