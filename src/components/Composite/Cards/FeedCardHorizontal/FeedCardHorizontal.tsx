/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageSourcePropType } from "react-native";
import { View, Text } from "native-base";
import { InterfacePressableProps } from "native-base/src/components/primitives/Pressable/types";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import Heading from "native-base/src/components/primitives/Heading";
import { Icon } from "native-base/src/components/primitives/Icon";
import IconButton from "native-base/src/components/composites/IconButton";
import AvatarLabel from "../../../Primitive/AvatarLabel/AvatarLabel";
import Image from "../../../../../packages/image-container-plus/components/Image";
import { uri } from "../../../../utils/uri";
import TextDotSeparator from "../../../Primitive/TextDotSeparator/TextDotSeparator";
// import Pressable from "../../../Primitive/Pressable/Pressable";

const WIDTH: number | string = "20";

export type FeedCardHorizontalProps = {
    avatar?: ImageSourcePropType;
    username?: string;
    cover?: ImageSourcePropType;
    title?: string;
    baseOnText?: string;
    infos?: string[];
    actions?: React.ReactNode;
} & InterfacePressableProps;

const TextInfo: React.FC = (props) => (
    <Text color="coolGray.700" fontSize={12} {...props} />
);

const FeedCardHorizontal: React.FC<FeedCardHorizontalProps> = ({
    title = "unknown title",
    avatar = uri,
    cover = uri,
    username = "Archive user",
    infos,
    baseOnText,
    actions,
    ...props
}) => {
    return (
        <View flex={1}>
            <VStack flex={1} space="2" px={2} m={2}>
                <AvatarLabel
                    avatarProps={{
                        size: 6,
                    }}
                    titleProps={{
                        fontSize: 14,
                        color: "coolGray.600",
                    }}
                    source={avatar}
                    title={username}
                />
                <HStack flex={1} space="2" justifyContent="space-between">
                    <VStack flex={1} space={2}>
                        <Heading color="coolGray.700" fontSize="md">
                            {title}
                        </Heading>
                        <TextDotSeparator dotProps={{ bg: "coolGray.700" }}>
                            {infos?.map((infoText, index) => (
                                <TextInfo key={`${index}${infoText}`}>
                                    {infoText}
                                </TextInfo>
                            ))}
                        </TextDotSeparator>
                    </VStack>
                    {cover && (
                        <View h="20" w={WIDTH}>
                            <Image />
                        </View>
                    )}
                </HStack>
                {(baseOnText || actions) && (
                    <HStack justifyContent="space-between" alignItems="center">
                        {baseOnText && (
                            <Text fontSize="2xs" color="coolGray.500">
                                {baseOnText}
                            </Text>
                        )}
                        {actions && (
                            <View w={WIDTH}>
                                <HStack
                                    space={2}
                                    justifyContent="space-between"
                                >
                                    {actions}
                                </HStack>
                            </View>
                        )}
                    </HStack>
                )}
            </VStack>
        </View>
    );
};

FeedCardHorizontal.displayName = "FeedCardHorizontal";
export default FeedCardHorizontal;
