/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HStack, Icon, Text, VStack } from "native-base";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { InterfaceIconProps } from "native-base/lib/typescript/components/primitives/Icon/types";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";

export type ItemSettingProps = {
    title: string;
    titleProps?: InterfaceTextProps;
    iconLeftProps?: InterfaceIconProps;
    iconRightProps?: InterfaceIconProps;
} & InterfaceHStackProps;

const ItemSetting: React.FC<ItemSettingProps> = ({
    title,
    titleProps,
    iconLeftProps,
    iconRightProps,
    ...vhStackProps
}) => {
    return (
        <HStack
            p={2}
            space={2}
            borderRadius="md"
            bg="white"
            alignItems="center"
            flex={1}
            {...vhStackProps}
        >
            <Icon size="3xl" as={Ionicons} name="cog" {...iconLeftProps} />
            <VStack flex={1}>
                <Text {...titleProps}>{title}</Text>
            </VStack>
            <Icon
                mr={2}
                size="md"
                as={Ionicons}
                name="chevron-forward-sharp"
                {...iconRightProps}
            />
        </HStack>
    );
};

ItemSetting.displayName = "ItemSetting";
export default ItemSetting;
