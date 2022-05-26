/** @format */

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { Box, Heading, HStack, Icon, VStack, Text, View } from "native-base";
import React from "react";
import IconButton from "../../Primitive/IconButton/IconButton";

export type InputActionsProps = {};
const InputActions: React.FC<InputActionsProps> = () => {
    return (
        <Box>
            <HStack justifyContent="space-between" alignItems="center">
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
                </HStack>
                <TouchableOpacity
                    style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        backgroundColor: "green",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 100,
                    }}
                >
                    <Text color="coolGray.200" fontWeight="bold">
                        Enregistrer
                    </Text>
                </TouchableOpacity>
            </HStack>
        </Box>
    );
};

export default InputActions;
