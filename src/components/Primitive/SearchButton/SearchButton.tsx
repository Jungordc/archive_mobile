/** @format */

import Ionicons from "@expo/vector-icons/Ionicons";
import { HStack, Text, Icon } from "native-base";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

export type SearchButtonProps = {
    onPress?(event: GestureResponderEvent): void;
} & InterfaceHStackProps;

const SearchButton: React.FC<SearchButtonProps> = ({
    onPress,
    ...hstackProps
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <HStack
                bg="gray.200"
                p={3}
                borderRadius="full"
                flex={1}
                space={3}
                alignItems="center"
                {...hstackProps}
            >
                <Icon ml={4} size="sm" as={Ionicons} name="md-search" />
                <Text>Rechercher un archive</Text>
            </HStack>
        </TouchableOpacity>
    );
};

SearchButton.displayName = "SearchButton";
export default SearchButton;
