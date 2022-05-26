/** @format */

import React from "react";
import { View, Text, HStack, VStack, Heading } from "native-base";
import Image from "./Image";
import { ComonTypeContainerImage } from "../Types";

export type ForImageContainerProps = {} & ComonTypeContainerImage;
const ForImageContainer: React.FC<ForImageContainerProps> = ({ images }) => {
    const lenght = images?.length || 0;
    return (
        <HStack flex={1} space={1} overflow="hidden" borderRadius="md">
            <VStack flex={1} space={1}>
                <Image />
                <Image />
            </VStack>
            <VStack flex={1} space={1}>
                <View flex={1}>
                    <Image />
                </View>
                <View position="relative" flex={1}>
                    <Image />
                    {lenght > 4 && (
                        <View
                            position="absolute"
                            flex={1}
                            bg="#040428ba"
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Heading fontSize="3xl" color="coolGray.200">
                                {lenght - 4} +
                            </Heading>
                        </View>
                    )}
                </View>
            </VStack>
        </HStack>
    );
};

export default ForImageContainer;
