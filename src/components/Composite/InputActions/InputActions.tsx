/** @format */

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, Heading, HStack, Icon, VStack, Text } from "native-base";
import React from "react";
import IconButton from "../../Primitive/IconButton/IconButton";

export type InputActionsProps = {};
const InputActions: React.FC<InputActionsProps> = () => {
    return (
        <Box>
            <HStack space={3}>
                <VStack maxW="sm">
                    <IconButton
                        icon={<Icon as={Ionicons} name="image" />}
                        bg="green.600"
                        borderRadius="sm"
                        size="sm"
                        _icon={{
                            size: "md",
                            color: "coolGray.200",
                        }}
                    />
                    <Text isTruncated color="green.600" fontSize="2xs">
                        couverture
                    </Text>
                </VStack>
                <VStack>
                    <IconButton
                        icon={<Icon as={Ionicons} name="image" />}
                        bg="green.600"
                        borderRadius="sm"
                        size="sm"
                        _icon={{
                            size: "md",
                            color: "coolGray.200",
                        }}
                    />
                    <Text isTruncated color="green.600" fontSize="2xs">
                        documment
                    </Text>
                </VStack>
                <IconButton
                    bg="blue.800"
                    borderRadius="sm"
                    size="sm"
                    _icon={{}}
                />
            </HStack>
        </Box>
    );
};

export default InputActions;
