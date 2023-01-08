/** @format */

import React from "react";
import { FlatList } from "react-native";
import { VStack, Skeleton, View, HStack, Divider } from "native-base";
import HomeAnimatedContainer from "../screens/HomeAnimatedContainer";

type HomeLoaderProps = {};

export const HonrizontalCard = () => {
    return (
        <View m="2">
            <VStack flex={1} space="3">
                <HStack space="2" alignItems="center">
                    <Skeleton h="7" w="7" rounded="full" />
                    <Skeleton h="3" w="32" rounded="full" />
                </HStack>
                <HStack space="2">
                    <VStack flex={1} space="2" justifyContent="space-between">
                        <VStack flex={1} space={2}>
                            <Skeleton.Text />
                        </VStack>
                    </VStack>
                    <Skeleton h="20" w="20" rounded="md" />
                </HStack>
            </VStack>
        </View>
    );
};

const Title = () => {
    return (
        <View mx="2">
            <Skeleton h="8" w="24" rounded="full" />
        </View>
    );
};

const HomeLoader: React.FC<HomeLoaderProps> = ({ ...props }) => {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <View flex={1} my="2">
            <HomeAnimatedContainer
                topics={
                    <View my="3">
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            keyExtractor={(i) => i.toString()}
                            data={data}
                            renderItem={() => <Title />}
                        />
                    </View>
                }
                flatListProps={{
                    data,
                    renderItem: ({ index, item }) => (
                        <>
                            {index !== 0 && <Divider color="amber.300" />}
                            <HonrizontalCard />
                        </>
                    ),
                }}
            />
        </View>
    );
};

export default HomeLoader;
