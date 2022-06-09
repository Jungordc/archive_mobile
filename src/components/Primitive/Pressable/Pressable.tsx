/** @format */

import React from "react";
import { makeStyledComponent } from "native-base/src/utils/styled";
import { usePropsResolution } from "native-base/src/hooks";
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableOpacityProps,
    TouchableNativeFeedbackProps,
    Platform,
} from "react-native";
import { View } from "native-base";

type PropsTouchable = "";
const TOpacityStyled: any = makeStyledComponent(TouchableOpacity);
const TNativeStyled: any = makeStyledComponent(TouchableNativeFeedback);

const TouchablePlatform = Platform.select({
    android: TNativeStyled,
    default: TOpacityStyled,
});

export type PressableProps = {};

const Pressable = React.forwardRef<any, PressableProps>(
    ({ children, ...props }, ref) => {
        // const resolvedProps = usePropsResolution("TouchableOpacity", props);
        return (
            <TouchableOpacity ref={ref} {...props}>
                <View>{children}</View>
            </TouchableOpacity>
        );
    }
);

export default Pressable;
