/** @format */

import React from "react";
import { FlatListProps } from "react-native";
import { View } from "native-base/src/components/basic/View";
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from "react-native-reanimated";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Header, { HeaderProps } from "../../components/Composite/Headers/Header";

const AView = Animated.createAnimatedComponent(View);

type HeaderAnimationContainerProps<T> = {
    flatListProps?: FlatListProps<T>;
    headerProps?: HeaderProps;
    input?: number[];
    output?: number[];
};

export default function HeaderAnimationContainer<T>({
    input = [0, 80],
    output = [0, -20],
    flatListProps,
    headerProps,
}: HeaderAnimationContainerProps<T>) {
    const scrollY = useSharedValue(0);

    const onScrollY = useAnimatedScrollHandler((handlers) => {
        scrollY.value = handlers.contentOffset.y;
    });

    const AStyleHeader = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(
                    scrollY.value,
                    input,
                    output,
                    Extrapolate.CLAMP
                ),
            },
        ],
    }));
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
                style={AStyleHeader}
            >
                <Header title="Categorie" {...headerProps} />
            </AView>
            <Animated.FlatList onScroll={onScrollY} {...flatListProps} />
        </RootContainer>
    );
}
