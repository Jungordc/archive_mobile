/** @format */

import React from "react";
import { View, Text, Image, VStack, HStack, FlatList } from "native-base";
import Icon from "../../Primitive/Icons/Icon";
import IconButton from "../../Primitive/IconButton/IconButton";

type EditBottomActionProps = {};

const ImageItemSelect = () => {
    return (
        <Image
            m="1"
            h="20"
            w="20"
            alignItems="center"
            justifyContent="center"
            borderColor="gray.300"
            borderWidth="1"
            borderRadius="lg"
            source={{
                uri: "data:image/jpeg;base64,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",
            }}
            height="20"
            width="20"
            alt="img"
        />
    );
};
const EditBottomAction: React.FC<EditBottomActionProps> = ({ ...props }) => {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <View>
            <VStack space="2">
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={
                        <View
                            m="1"
                            h="20"
                            w="20"
                            bg="white"
                            alignItems="center"
                            justifyContent="center"
                            borderColor="gray.300"
                            borderWidth="1"
                            borderRadius="lg"
                            key="header"
                        >
                            <Icon size="2xl" iconName="md-camera-outline" />
                            {/* <Image /> */}
                        </View>
                    }
                    ListFooterComponent={
                        <View
                            m="1"
                            h="20"
                            w="20"
                            bg="white"
                            alignItems="center"
                            justifyContent="center"
                            borderColor="gray.300"
                            borderWidth="1"
                            borderRadius="lg"
                            key="footer"
                        >
                            <VStack alignItems="center" justifyContent="center">
                                <Icon size="2xl" iconName="md-image-outline" />
                                <Text fontSize="sm">Galerie</Text>
                            </VStack>
                        </View>
                    }
                    data={data}
                    keyExtractor={(i) => i.toString()}
                    renderItem={({}) => <ImageItemSelect />}
                />

                <VStack
                    px="2"
                    space="2"
                    borderTopColor="coolGray.200"
                    borderTopWidth="1"
                >
                    <HStack py="1" pt="2" alignItems="center" space="1">
                        <Icon size="md" iconName="md-document-attach-outline" />
                        <Text>4 document attaches</Text>
                    </HStack>
                    <HStack
                        borderTopColor="coolGray.200"
                        borderTopWidth="1"
                        space="1"
                        py="1"
                    >
                        <IconButton
                            variant="subtle"
                            iconName="md-image-outline"
                        />
                        <IconButton
                            variant="subtle"
                            iconName="md-document-text-outline"
                        />
                    </HStack>
                </VStack>
            </VStack>
        </View>
    );
};

export default EditBottomAction;
