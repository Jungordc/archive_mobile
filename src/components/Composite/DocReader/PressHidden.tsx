/** @format */

import React from "react";
import { Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { runOnJS, useSharedValue } from "react-native-reanimated";

type PressHiddenProps = {};

const BGBarColor = "#000";

const PressHidden: React.FC<PressHiddenProps> = ({ children, ...props }) => {
    NavigationBar.setBackgroundColorAsync(BGBarColor);
    NavigationBar.setBorderColorAsync(BGBarColor);
    NavigationBar.setButtonStyleAsync("light");

    const [hiddenStatusBarValue, setIddenStatusBarValue] =
        React.useState<boolean>(false);

    const onToogleStatusAndNavigationBar = React.useCallback(async () => {
        const newValue = !hiddenStatusBarValue;
        setIddenStatusBarValue(newValue);
        console.log("onToogleStatusAndNavigationBar>>>>", newValue);
        await NavigationBar.setVisibilityAsync(newValue ? "hidden" : "visible");
    }, [hiddenStatusBarValue]);

    const handlerTap = Gesture.Tap().onStart(() => {
        console.log("tap....");
        runOnJS(onToogleStatusAndNavigationBar)();
    });

    return (
        <GestureDetector gesture={handlerTap}>
            <React.Fragment>
                <StatusBar
                    style="light"
                    hideTransitionAnimation="slide"
                    backgroundColor={BGBarColor}
                    hidden={hiddenStatusBarValue}
                    animated={true}
                    translucent={true}
                />
                <React.Fragment>{children}</React.Fragment>
            </React.Fragment>
        </GestureDetector>
    );
};

export default PressHidden;
