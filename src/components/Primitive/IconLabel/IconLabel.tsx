/** @format */

import React from "react";
import { Text, HStack, Icon } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";
import { InterfaceIconProps } from "native-base/lib/typescript/components/primitives/Icon/types";

export type IconLabelProps = {
    label: string;
    icon?: any;
    iconProps?: InterfaceIconProps;
    labelProps?: InterfaceTextProps;
    labelPosition?: "Left" | "Right";
};

const IconLabel: React.FC<IconLabelProps> = ({
    label,
    labelPosition = "Right",
    icon,
    labelProps,
    iconProps,
}) => {
    const Label = (
        <Text isTruncated fontSize="2xs" {...labelProps}>
            {label}
        </Text>
    );
    return (
        <HStack space={2} alignItems="center">
            {labelPosition === "Left" && Label}
            {icon && (
                <Icon size="xs" as={Ionicons} name={icon} {...iconProps} />
            )}
            {labelPosition === "Right" && Label}
        </HStack>
    );
};

export default IconLabel;
