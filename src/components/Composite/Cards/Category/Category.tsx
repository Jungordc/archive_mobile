/** @format */

import { View, Text } from "native-base";
import {
    Pressable,
    IPressableProps,
} from "native-base/src/components/primitives/Pressable";
import { HStack, VStack } from "native-base/src/components/primitives/Stack";
import React from "react";

export type CategoryProps = {} & IPressableProps;
const Category: React.FC<CategoryProps> = ({ ...props }) => {
    return (
        <Pressable {...props}>
            {({ isPressed }) => (
                <View
                    bg={isPressed ? "coolGray.50" : "transparent"}
                    m="2"
                    flex={1}
                >
                    <HStack alignItems="center" space="4" flex={1}>
                        <View
                            borderRadius="md"
                            bg="coolGray.200"
                            h="10"
                            w="10"
                        ></View>
                        <VStack flex={1}>
                            <Text
                                color="coolGray.700"
                                fontSize="lg"
                                // fontWeight="medium"
                            >
                                Category
                            </Text>
                        </VStack>
                    </HStack>
                </View>
            )}
        </Pressable>
    );
};

export default Category;
