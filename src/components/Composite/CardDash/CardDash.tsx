/** @format */

import React from "react";
import { VStack, Text, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import { View } from "native-base/src/components/basic/View";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import Icon, { IconProps } from "../../Primitive/Icons/Icon";
import Image from "../../../../packages/image-container-plus/components/Image";
import { uri } from "../../../utils/uri";

export type CardDashProps = {
    onPress?(): void;
    title: string;
    subTitle?: string;
    vstackContainerProps?: InterfaceVStackProps;
    iconProps?: IconProps;
} & InterfaceViewProps;

const CardDash: React.FC<CardDashProps> = ({
    title,
    subTitle,
    vstackContainerProps,
    iconProps,
    onPress,
    ...props
}) => {
    return (
        <View
            shadow="2"
            flex={1}
            borderRadius="sm"
            overflow="hidden"
            {...props}
        >
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.94}
                style={{
                    flex: 1,
                }}
            >
                <View position="relative" flex={1} bg="white">
                    <View flex={1}>
                        <Image borderRadius="sm" source={uri} />
                    </View>

                    <View position="absolute" bottom="0" right="0" left="0">
                        <VStack
                            flex={1}
                            position="relative"
                            px="2"
                            pb="1.5"
                            bg="white"
                            space={2}
                            style={{
                                height: "50%",
                            }}
                            {...vstackContainerProps}
                        >
                            <View
                                shadow="2"
                                position="absolute"
                                top={-20}
                                left="1"
                                p="2"
                                bgColor="white"
                                rounded="full"
                            >
                                <Icon
                                    size="xl"
                                    color="primary.500"
                                    iconName="bookmark"
                                    {...iconProps}
                                />
                            </View>
                            <Heading
                                mt="4"
                                isTruncated
                                fontSize="md"
                                color="coolGray.800"
                                textTransform="capitalize"
                            >
                                {title}
                            </Heading>
                            {subTitle && (
                                <Text fontSize="2xs" color="coolGray.600">
                                    {subTitle}
                                </Text>
                            )}
                        </VStack>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

CardDash.displayName = "CardDash";
export default CardDash;
