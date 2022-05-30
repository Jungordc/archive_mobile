/** @format */

import { FlatList } from "react-native";
import { View, Text } from "native-base";
import React from "react";

export type PopularCatProps = {};
const PopularCat: React.FC<PopularCatProps> = ({}) => {
    const data = new Array(5).fill(0);
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={() => {
                    return (
                        <View
                            h="48"
                            w="32"
                            bg="green.700"
                            m="1"
                            borderRadius="md"
                        ></View>
                    );
                }}
            />
        </View>
    );
};

export default PopularCat;
