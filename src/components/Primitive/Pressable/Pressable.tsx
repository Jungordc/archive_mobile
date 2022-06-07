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

type PropsTouchable = "";
const TOpacityStyled: any = makeStyledComponent(TouchableOpacity);
const TNativeStyled: any = makeStyledComponent(TouchableNativeFeedback);

const TouchablePlatform = Platform.select({
    android: TNativeStyled,
    ios: TOpacityStyled,
    macos: TOpacityStyled,
    native: TOpacityStyled,
    web: TOpacityStyled,
    windows: TOpacityStyled,
});

export type PressableProps = {};

const Pressable = React.forwardRef<any, PressableProps>(({ ...props }, ref) => {
    const resolvedProps = usePropsResolution("TouchableOpacity", props);
    return null;
});

export default Pressable;
