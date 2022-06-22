/** @format */

import React from "react";
import {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

export default function useEmailCheckAnimations() {
    const animatedValue = useSharedValue(0);

    const animatedTextStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedValue.value,
            [0.4, 1],
            [0, 1],
            Extrapolate.CLAMP
        ),
    }));

    const animatedTextResendStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(
                    animatedValue.value,
                    [0, 1],
                    [0, 40],
                    Extrapolate.CLAMP
                ),
            },
        ],
    }));

    const onAnimationStart = React.useCallback(
        () => (animatedValue.value = withSpring(0)),
        []
    );

    const onAnimationFinish = React.useCallback(
        () => (animatedValue.value = withSpring(1)),
        []
    );

    return {
        animatedTextStyle,
        animatedTextResendStyle,
        onAnimationFinish,
        onAnimationStart,
    };
}
