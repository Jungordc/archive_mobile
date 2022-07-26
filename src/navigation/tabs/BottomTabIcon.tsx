/** @format */
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, IIconProps } from "native-base/src/components/primitives/Icon";

type IconDefaultNameType = React.ComponentProps<typeof Ionicons>["name"];

export type BottomTabIconProps = {
    name: IconDefaultNameType;
    focusIconName?: IconDefaultNameType;
    color: string;
    focused?: boolean;
} & IIconProps;

const BottomTabIcon: React.FC<BottomTabIconProps> = ({
    name,
    focused,
    focusIconName,
    ...props
}) => {
    return (
        <Icon
            as={Ionicons}
            name={focused ? focusIconName || name : name}
            {...props}
        />
    );
};

BottomTabIcon.displayName = "BottomTabIcon";
export default BottomTabIcon;
