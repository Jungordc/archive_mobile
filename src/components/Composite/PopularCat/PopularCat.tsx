/** @format */

import { FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Heading from "native-base/src/components/primitives/Heading";
import Image from "../../../../packages/image-container-plus/components/Image";
import { uri } from "../../../utils/uri";
import { View } from "native-base/src/components/basic/View/";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { keyExtractor } from "../../../utils/core";

export type PopularCatProps = {
    data?: any[];
    onPressCategory?(category: number | string): void;
} & InterfaceViewProps;

const PopularCat: React.FC<PopularCatProps> = ({
    data = [0, 1, 2, 3, 4, 5],
    onPressCategory,
    ...props
}) => {
    const handlerSelectCategory = React.useCallback(
        (category: number | string) => {
            return () => onPressCategory?.(category);
        },
        []
    );

    const renderItem = React.useCallback(() => {
        return (
            <TouchableOpacity
                onPress={handlerSelectCategory("id")}
                activeOpacity={0.7}
            >
                <View h="48" w="32" m="1" borderRadius="md" overflow="hidden">
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
    }, []);

    return (
        <View {...props}>
            <FlatList
                horizontal
                bounces={false}
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={keyExtractor}
                ListHeaderComponent={<View mx="1" bg="amber.200" flex={1} />}
                renderItem={renderItem}
            />
        </View>
    );
};

export default PopularCat;
