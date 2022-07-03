/** @format */

import { View } from "native-base/src/components/basic/View";
import React from "react";
import { FlatListProps } from "react-native";
import Animated from "react-native-reanimated";
import Header, { HeaderProps } from "../../components/Composite/Headers/Header";
import RootContainer from "../../components/Primitive/RootContainer/Container";

import useAnimatedCollapsingHeader from "../../hooks/animations/useAnimatedCollapsingHeader";
import { keyExtractor } from "../../utils/core";

const AView = Animated.createAnimatedComponent(View);

type HomeAnimatedContainerProps<T> = {
    flatListProps?: FlatListProps<T>;
    headerProps?: HeaderProps;
    topics?: React.ReactNode;
};

export default function HomeAnimatedContainer<T>({
    flatListProps,
    headerProps,
    topics,
}: HomeAnimatedContainerProps<T>) {
    const headerAnimated = useAnimatedCollapsingHeader();
    return (
        <RootContainer>
            <AView
                position="absolute"
                my="5"
                top="0"
                left="0"
                right="0"
                zIndex="2"
                bg="white"
                style={headerAnimated.animatedStyles}
            >
                <Header showBtn {...headerProps} />
                <View my="1">{topics}</View>
            </AView>
            <Animated.FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<View my="20" />}
                onScroll={headerAnimated.scrollHandler}
                keyExtractor={keyExtractor}
                {...flatListProps}
            />
        </RootContainer>
    );
}
