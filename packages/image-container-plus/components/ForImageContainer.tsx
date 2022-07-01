/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
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
                {images?.slice(0, 2).map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        onPress={() => props.onPress?.(image)}
                    />
                ))}
            </VStack>
            <VStack flex={1} space={1}>
                {images?.slice(2, 4).map((image, index) => (
                    <View
                        key={index}
                        position={index === 0 ? "relative" : undefined}
                        flex={1}
                    >
                        <Image
                            source={image}
                            onPress={() => props.onPress?.(image)}
                        />
                        {index !== 0 && lenght > LENGHT_SIZE && (
                            <View
                                position="absolute"
                                flex={1}
                                bg="#040428ba"
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                borderRadius="md"
                            >
                                <TouchableOpacity
                                    onPress={() => props.onPress?.(image)}
                                    activeOpacity={0.7}
                                    style={{
                                        flex: 1,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Heading
                                        fontSize="3xl"
                                        color="coolGray.200"
                                    >
                                        {lenght - LENGHT_SIZE} +
                                    </Heading>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                ))}
            </VStack>
        </HStack>
    );
};

export default ForImageContainer;
