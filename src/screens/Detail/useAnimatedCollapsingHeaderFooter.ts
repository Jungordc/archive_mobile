/** @format */
import { useCallback, useEffect } from "react";
import { LayoutChangeEvent, LayoutRectangle } from "react-native";
import {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

const MAX_HEIGHT = 90;
const DEFAULT_BREAKPOINT_LAYOUT: LayoutRectangle = {
    height: 90,
    width: 360,
    x: 0,
    y: 64,
};

type AnimatedShareValueType = {
    scrollY: number;
    backup: number;
};

const useShareScrollValue = () => {
    return useSharedValue<AnimatedShareValueType>({
        backup: 0,
        scrollY: 0,
    });
};

export function useAnimatedCollapsingHeaderFooter() {
    const scrollY = useSharedValue<number>(0);
    const animatedValue = useShareScrollValue();

    const breakPoints = useSharedValue<number>(DEFAULT_BREAKPOINT_LAYOUT.y);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
            const newValueHeader =
                animatedValue.value.scrollY +
                event.contentOffset.y -
                animatedValue.value.backup;

            animatedValue.value = {
                backup: Math.max(0, event.contentOffset.y),
                scrollY: Math.min(Math.max(newValueHeader, 0), MAX_HEIGHT),
            };
        },
    });

    const headerRightAnimatedStyles = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [
                    breakPoints.value - 10,
                    breakPoints.value + DEFAULT_BREAKPOINT_LAYOUT.height,
                ],
                [0, 1],
                Extrapolate.CLAMP
            ),
        };
    });

    const headerAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(
                    animatedValue.value.scrollY,
                    [0, MAX_HEIGHT],
                    [0, -MAX_HEIGHT],
                    Extrapolate.CLAMP
                ),
            },
        ],
    }));
    const footerAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(
                    animatedValue.value.scrollY,
                    [0, MAX_HEIGHT],
                    [0, MAX_HEIGHT],
                    Extrapolate.CLAMP
                ),
            },
        ],
    }));

    const setBreakPoints = useCallback(
        (event: LayoutChangeEvent) => {
            console.log("setBreakPoints", event.nativeEvent.layout);
            breakPoints.value = event.nativeEvent.layout.y;
        },
        [breakPoints]
    );

    return {
        footerAnimatedStyles,
        headerAnimatedStyles,
        headerRightAnimatedStyles,
        scrollHandler,
        setBreakPoints,
    };
}
