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
};

const IconLabel: React.FC<IconLabelProps> = ({
    label,
    icon,
    labelProps,
    iconProps,
}) => {
    return (
        <HStack space={2} alignItems="center">
            {icon && (
                <Icon size="xs" as={Ionicons} name={icon} {...iconProps} />
            )}
            <Text isTruncated fontSize="2xs" {...labelProps}>
                {label}
            </Text>
        </HStack>
    );
};

export default IconLabel;
