/** @format */

import React from "react";
import { View, Text } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import Heading from "native-base/src/components/primitives/Heading";
import IconButton from "native-base/src/components/composites/IconButton";
import AvatarLabel from "../../../Primitive/AvatarLabel/AvatarLabel";
import Image from "../../../../../packages/image-container-plus/components/Image";
import { uri } from "../../../../utils/uri";
import TextDotSeparator from "../../../Primitive/TextDotSeparator/TextDotSeparator";
import { Icon } from "native-base/src/components/primitives/Icon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImageSourcePropType } from "react-native";

const WIDTH: number | string = "20";

export type FeedCardHorizontalProps = {
    onMenu?(e: any): void;
    onSave?(e: any): void;
    avatar?: ImageSourcePropType;
    username?: string;
    saved?: boolean;
    cover?: ImageSourcePropType;
    title?: string;
    baseOnText?: string;
    infos?: string[];
} & InterfaceViewProps;

const TextInfo: React.FC = (props) => (
    <Text color="coolGray.700" fontSize={12} {...props} />
);
const FeedCardHorizontal: React.FC<FeedCardHorizontalProps> = ({
    title = "unknown title",
    avatar = uri,
    cover = uri,
    username = "Archive user",
    saved = false,
    infos,
    baseOnText,
    onSave,
    onMenu,
    ...props
}) => {
    return (
        <View flex={1} px={2} m={2} {...props}>
            <VStack flex={1} space="2">
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
                <HStack justifyContent="space-between" alignItems="center">
                    <Text fontSize="2xs" color="coolGray.500">
                        {baseOnText}
                    </Text>
                    <View w={WIDTH}>
                        <HStack space={2} justifyContent="space-between">
                            <IconButton
                                onPress={onSave}
                                size="sm"
                                fontVariant="small-caps"
                                colorScheme="coolGray"
                                icon={
                                    <Icon
                                        as={Ionicons}
                                        name={
                                            saved
                                                ? "md-bookmark"
                                                : "md-bookmark-outline"
                                        }
                                    />
                                }
                            />
                            <IconButton
                                onPress={onMenu}
                                size="sm"
                                fontVariant="small-caps"
                                colorScheme="coolGray"
                                icon={
                                    <Icon
                                        as={Ionicons}
                                        name="ellipsis-vertical"
                                    />
                                }
                            />
                        </HStack>
                    </View>
                </HStack>
            </VStack>
        </View>
    );
};

FeedCardHorizontal.displayName = "FeedCardHorizontal";
export default FeedCardHorizontal;
