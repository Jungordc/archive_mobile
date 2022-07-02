/** @format */

import { FlatList, TouchableOpacity } from "react-native";
import { View } from "native-base";
import React from "react";
import Heading from "native-base/src/components/primitives/Heading";
import Image from "../../../../packages/image-container-plus/components/Image";
import { uri } from "../../../utils/uri";

export type PopularCatProps = {};
const PopularCat: React.FC<PopularCatProps> = ({}) => {
    const data = [0, 1, 2, 3, 4, 5];
    return (
        <View>
            <FlatList
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={<View mx="1" bg="amber.200" flex={1} />}
                renderItem={() => {
                    return (
                        <TouchableOpacity activeOpacity={0.7}>
                            <View
                                h="48"
                                w="32"
                                m="1"
                                borderRadius="md"
                                overflow="hidden"
                            >
                                <Image source={uri} />
                                <View
                                    position="absolute"
                                    top="0"
                                    bottom="0"
                                    left="0"
                                    right="0"
                                    bg="green.700"
                                    opacity={0.7}
                                />
                                <Heading
                                    color="coolGray.100"
                                    fontSize="md"
                                    position="absolute"
                                    bottom="2"
                                    right="2"
                                    textAlign="center"
                                >
                                    CategoryName databasae
                                </Heading>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default PopularCat;
