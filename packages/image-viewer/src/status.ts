/** @format */

import * as NavigationBar from "expo-navigation-bar";
import { StatusBar as RNStatusBar } from "react-native";
import { callIfIsAndroid } from "./utils";

export function initializeNavigationBar(color: string = "rgba(0,0,0,0)") {
    RNStatusBar.setTranslucent(true);
    RNStatusBar.setBarStyle("light-content");
    RNStatusBar.setBackgroundColor(color);
    callIfIsAndroid(() => {
        NavigationBar.setBackgroundColorAsync(color);
        NavigationBar.setPositionAsync("absolute");
        NavigationBar.setVisibilityAsync("hidden");
        NavigationBar.setButtonStyleAsync("light");
    });
}

export function hiddenBars() {
    RNStatusBar.setHidden(true, "slide");
    callIfIsAndroid(() => {
        NavigationBar.setVisibilityAsync("hidden");
    });
}

export function showBars() {
    RNStatusBar.setHidden(false, "slide");
    callIfIsAndroid(() => {
        NavigationBar.setVisibilityAsync("visible");
    });
}
