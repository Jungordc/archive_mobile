/** @format */

import {
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    useSharedValue,
} from "react-native-reanimated";

export default function useAnimatedCollapsingHeader(MAX_HEIGHT: number = 90) {
    const animatedValue = useSharedValue<number>(0);
    const backupValue = useSharedValue<number>(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            const newValue =
                animatedValue.value + event.contentOffset.y - backupValue.value;

            animatedValue.value = Math.min(Math.max(newValue, 0), MAX_HEIGHT);
            backupValue.value = Math.max(0, event.contentOffset.y);
        },
    });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(
                    animatedValue.value,
                    [0, MAX_HEIGHT],
                    [0, -MAX_HEIGHT],
                    Extrapolate.CLAMP
                ),
            },
        ],
    }));

    return { scrollHandler, animatedStyles };
}
