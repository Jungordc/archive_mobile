/** @format */
import { useCallback } from "react";
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
    height: 0,
    width: 0,
    x: 0,
    y: 0,
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

    const breakPoints = useSharedValue<LayoutRectangle>(
        DEFAULT_BREAKPOINT_LAYOUT
    );

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

    const headerRightAnimatedStyles = useAnimatedStyle(() => ({
        opacity: interpolate(
            scrollY.value,
            [
                breakPoints.value.y - breakPoints.value.height / 2,
                breakPoints.value.y,
            ],
            [0, 1],
            Extrapolate.CLAMP
        ),
    }));

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

    const setBreakPoints = useCallback((event: LayoutChangeEvent) => {
        breakPoints.value = event.nativeEvent.layout;
    }, []);
    return {
        footerAnimatedStyles,
        headerAnimatedStyles,
        headerRightAnimatedStyles,
        scrollHandler,
        setBreakPoints,
    };
}
