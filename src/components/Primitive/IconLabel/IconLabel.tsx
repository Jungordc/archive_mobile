/** @format */

import React from "react";
import Text from "native-base/src/components/primitives/Text";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";
import {
    IStackProps,
    Stack,
} from "native-base/src/components/primitives/Stack";
import { IoniconsNameType } from "../Type";
import Icon, { IconProps } from "../Icons/Icon";

export type IconLabelProps = {
    label: string;
    icon?: IoniconsNameType;
    iconProps?: IconProps;
    labelProps?: InterfaceTextProps;
    labelPosition?: "Left" | "Right";
} & IStackProps;

const IconLabel: React.FC<IconLabelProps> = ({
    label,
    labelPosition = "Right",
    direction = "row",
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
        <Stack space={2} alignItems="center" {...props}>
            {labelPosition === "Left" && Label}
            {icon && <Icon size="xs" name={icon} {...iconProps} />}
            {labelPosition === "Right" && Label}
        </Stack>
    );
};

export default IconLabel;
