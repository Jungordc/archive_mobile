/** @format */

import { Box, Icon, VStack, Text, Heading, Pressable } from "native-base";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box/types";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import { InterfaceIconProps } from "native-base/lib/typescript/components/primitives/Icon/types";
import { InterfacePressableProps } from "native-base/lib/typescript/components/primitives/Pressable/types";

export type CardDashProps = {
    title: string;
    subTitle?: string;
    vstackContainerProps?: InterfaceVStackProps;
    iconProps?: InterfaceIconProps;
} & InterfacePressableProps;

const CardDash: React.FC<CardDashProps> = ({
    title,
    subTitle,
    vstackContainerProps,
    iconProps,
    ...boxProps
}) => {
    return (
        <Pressable
            shadow="2"
            flex={1}
            borderRadius="sm"
            overflow="hidden"
            {...boxProps}
        >
            <Box flex={1} p={2} bg="white">
                <VStack space={2} {...vstackContainerProps}>
                    <Icon
                        size="3xl"
                        color="primary.500"
                        as={Ionicons}
                        name="md-save"
                        {...iconProps}
                    />
                    <Heading isTruncated fontSize="md">
                        {title}
                    </Heading>
                    {subTitle && <Text>{subTitle}</Text>}
                </VStack>
            </Box>
        </Pressable>
    );
};

CardDash.displayName = "CardDash";
export default CardDash;
