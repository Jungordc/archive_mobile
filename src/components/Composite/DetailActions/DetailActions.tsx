/**
 *  like, share, save, vue
 * @format */

import React from "react";
import { Icon, HStack, IconButton, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export type DetailActions = {} & InterfaceHStackProps;

type IconButtonLabelProps = {
    iconName: string;
    label: string;
};

const IconButtonLabel: React.FC<IconButtonLabelProps> = ({
    iconName,
    label,
}) => {
    return (
        <HStack alignItems="center">
            <IconButton
                borderColor="coolGray.200"
                tintColor="coolGray.200"
                colorScheme="coolGray"
                borderRadius="full"
                icon={<Icon as={Ionicons} name={iconName} />}
            />
            <Text fontSize="sm" color="coolGray.600">
                {label}
            </Text>
        </HStack>
    );
};

const DetailActions: React.FC<DetailActions> = ({ ...vstackProps }) => {
    return (
        <HStack
            flex={1}
            px="3"
            py="2"
            justifyContent="space-evenly"
            {...vstackProps}
        >
            <IconButtonLabel iconName="heart-outline" label="234" />
            <IconButtonLabel iconName="bookmark-outline" label="34" />
            <IconButtonLabel iconName="chatbubble-outline" label="23" />
            <IconButtonLabel iconName="ios-share-outline" label="2" />
        </HStack>
    );
};

export default DetailActions;
