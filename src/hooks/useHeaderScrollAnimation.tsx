/** @format */

import {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export const useHeaderScrollAnimation = () => {
    const scrollY = useSharedValue<number>(0);
    // offset
    const offset = useSharedValue<"down" | "up">("down");

    const onScrollHandler = useAnimatedScrollHandler((handler) => {
        const yValue = handler.contentOffset.y;
        if (yValue < 0) return;
        offset.value = yValue > scrollY.value ? "up" : "down";
        scrollY.value = yValue;
    });

    const headerAnimatedStyle = useAnimatedStyle(() => ({
        backgroundColor: "white",
        transform: [
            {
                translateY:
                    offset.value === "up" ? withTiming(-90) : withTiming(0),
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
