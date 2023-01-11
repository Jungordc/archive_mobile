/** @format */

import React from "react";
import { VStack, Skeleton, View, HStack, FlatList } from "native-base";
import HeaderAnimationContainer from "../screens/HeaderAnimationContainer";

type CategoryEditLoaderProps = {};

const CategoryEditLoader: React.FC<CategoryEditLoaderProps> = ({
    ...props
}) => {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <View flex={1} my="2">
            <HeaderAnimationContainer
                headerProps={{
                    title: "Categorie",
                }}
                flatListProps={{
                    data,
                    renderItem: () => {
                        return (
                            <HStack alignItems="center" my="1" mx="3">
                                <Skeleton h="12" w="12" rounded="md" />
                                <Skeleton ml="4" h="3" w="32" rounded="full" />
                            </HStack>
                        );
                    },
                    ListHeaderComponent: () => (
                        <View mb={2} mt="24">
                            <Skeleton ml="4" h="3" w="32" rounded="full" />
                            <FlatList
                                bounces={false}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={data}
                                keyExtractor={(i) => i.toString()}
                                renderItem={() => (
                                    <Skeleton
                                        m="3"
                                        h="40"
                                        w="24"
                                        rounded="md"
                                    />
                                )}
                            />
                            <Skeleton ml="4" h="3" w="32" rounded="full" />
                        </View>
                    ),
                }}
            />
        </View>
    );
};

export default CategoryEditLoader;
