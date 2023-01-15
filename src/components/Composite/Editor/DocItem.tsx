/** @format */

import React from "react";
import { View, Text, HStack, VStack, Image } from "native-base";
import TextDotSeparator from "../../Primitive/TextDotSeparator/TextDotSeparator";
import Icon from "../../Primitive/Icons/Icon";
import { ImageSourcePropType } from "react-native";
import IconButton from "../../Primitive/IconButton/IconButton";

export enum DocItemType {
    IMAGE = "IMAGE",
    DOC = "DOC",
}

type DocItemProps = {
    name: string;
    description?: string;
    type?: DocItemType;
    source?: ImageSourcePropType;
    infoText?: string[];
};

const DocItem: React.FC<DocItemProps> = ({
    name,
    description,
    infoText = [],
    source,
    type = DocItemType.DOC,
    ...props
}) => {
    return (
        <View
            borderRadius="2xl"
            borderTopLeftRadius="none"
            borderColor="coolGray.200"
            borderWidth="1"
            bg="coolGray.50"
            p="2"
            flex={1}
        >
            <HStack space="2" bg="coolGray.50" flex={1}>
                {type !== DocItemType.IMAGE && (
                    <View
                        height="16"
                        width="16"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="lg"
                        bg="coolGray.200"
                    >
                        <Icon size="2xl" iconName="md-document-outline" />
                    </View>
                )}
                {type === DocItemType.IMAGE && source && (
                    <Image
                        height="16"
                        width="16"
                        alt="docImage"
                        borderRadius="lg"
                        source={source}
                    />
                )}

                <View flex={1} justifyContent="center">
                    <HStack alignItems="center" justifyContent="space-between">
                        <View>
                            <Text fontWeight="semibold">{name}</Text>
                            {description && (
                                <Text fontSize="2xs">{description}</Text>
                            )}
                            <TextDotSeparator>
                                {infoText.map((info, index) => (
                                    <Text key={index} fontSize="2xs">
                                        {info}
                                    </Text>
                                ))}
                            </TextDotSeparator>
                        </View>
                        <View>
                            <IconButton
                                rounded="full"
                                variant="subtle"
                                iconName="close"
                            />
                        </View>
                    </HStack>
                </View>
            </HStack>
        </View>
    );
};

export default DocItem;
