/** @format */

import {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const clamp = (value: number, lowerBound: number, upperBound: number) => {
    "worklet";
    return Math.min(Math.max(lowerBound, value), upperBound);
};

export const useHeaderScrollAnimation = () => {
    const scrollY = useSharedValue<number>(0);
    // offset
    const offset = useSharedValue<"down" | "up">("down");

    // const onScrollHandler = useAnimatedScrollHandler((handler) => {
    //     const yValue = handler.contentOffset.y;
    //     if (yValue < 0) return;
    //     offset.value = yValue > scrollY.value ? "up" : "down";
    //     scrollY.value = yValue;
    // });

    const onScrollHandler = useAnimatedScrollHandler<{ prevY: number }>({
        onScroll(event, context) {
            const diff = event.contentOffset.y - context.prevY;
            scrollY.value = clamp(scrollY.value + diff, 0, 100);
        },
        onBeginDrag(event, context) {
            context.prevY = event.contentOffset.y;
        },
    });
    const headerAnimatedStyle = useAnimatedStyle(() => ({
        backgroundColor: "white",
        transform: [
            {
                translateY: interpolate(
                    scrollY.value,
                    [0, 100],
                    [0, -100],
                    Extrapolate.CLAMP
                ),
                // offset.value === "up" ? withTiming(-90) : withTiming(0),
            },
        ],
    }));

    return {
        headerAnimatedStyle,
        onScrollHandler,
        scrollY,
        offset,
    };
};
