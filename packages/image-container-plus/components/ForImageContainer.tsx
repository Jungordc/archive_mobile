/** @format */

import React from "react";
import { View, HStack, VStack, Heading } from "native-base";
import Image from "./Image";
import { ComonTypeContainerImage } from "../Types";

export type ForImageContainerProps = {} & ComonTypeContainerImage;

const LENGHT_SIZE = 4;

const ForImageContainer: React.FC<ForImageContainerProps> = ({
    images,
    ...props
}) => {
    const lenght = images?.length || 0;
    return (
        <HStack
            flex={1}
            space={1}
            overflow="hidden"
            borderRadius="md"
            {...props}
        >
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
                    {lenght > LENGHT_SIZE && (
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
                            borderRadius="md"
                        >
                            <Heading fontSize="3xl" color="coolGray.200">
                                {lenght - LENGHT_SIZE} +
                            </Heading>
                        </View>
                    )}
                </View>
            </VStack>
        </HStack>
    );
};

export default ForImageContainer;
