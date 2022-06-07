/** @format */
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, IIconProps } from "native-base/src/components/primitives/Icon";

type IconDefaultNameType = React.ComponentProps<typeof Ionicons>["name"];

export type TabBarIconProps = {
    name: IconDefaultNameType;
    focusIconName?: IconDefaultNameType;
    color: string;
    focused?: boolean;
} & IIconProps;

const TabBarIcon: React.FC<TabBarIconProps> = ({
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

TabBarIcon.displayName = "TabBarIcon";
export default TabBarIcon;
