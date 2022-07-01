/** @format */

import React from "react";
import { Text, HStack, Icon } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";
import { InterfaceIconProps } from "native-base/lib/typescript/components/primitives/Icon/types";
import { InterfaceHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import { IoniconsNameType } from "../Type";

export type IconLabelProps = {
    label: string;
    icon?: IoniconsNameType;
    iconProps?: InterfaceIconProps;
    labelProps?: InterfaceTextProps;
    labelPosition?: "Left" | "Right";
} & InterfaceHStackProps;

const IconLabel: React.FC<IconLabelProps> = ({
    label,
    labelPosition = "Right",
    icon,
    labelProps,
    iconProps,
    ...props
}) => {
    const Label = (
        <Text isTruncated fontSize="2xs" {...labelProps}>
            {label}
        </Text>
    );
    return (
        <HStack space={2} alignItems="center" {...props}>
            {labelPosition === "Left" && Label}
            {icon && (
                <Icon size="xs" as={Ionicons} name={icon} {...iconProps} />
            )}
            {labelPosition === "Right" && Label}
        </HStack>
    );
};

export default IconLabel;
