/** @format */
import React from "react";
import { HStack, VStack } from "native-base/src/components/primitives/Stack";
import { View, Text } from "native-base";
import {
    Pressable,
    IPressableProps,
} from "native-base/src/components/primitives/Pressable";
import Image from "../../../../../packages/image-container-plus/components/Image";
import { uri } from "../../../../utils/uri";

export type CategoryProps = {} & IPressableProps;
const Category: React.FC<CategoryProps> = ({ ...props }) => {
    return (
        <Pressable {...props}>
            {({ isPressed }) => (
                <View
                    bg={isPressed ? "coolGray.100" : "transparent"}
                    p="2"
                    flex={1}
                >
                    <HStack alignItems="center" space="4" flex={1}>
                        <View borderRadius="md" bg="coolGray.200" h="10" w="10">
                            <Image source={uri} />
                        </View>
                        <VStack flex={1}>
                            <Text color="coolGray.700" fontSize="md">
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
