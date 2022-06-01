/** @format */

import React from "react";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";

const BottomButtonNavigationColor: React.FC = ({ children }) => {
    const setBackgroundButtonNavigation = React.useCallback(async () => {
        NavigationBar.setBackgroundColorAsync("white");
        NavigationBar.setBorderColorAsync("white");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);

    React.useEffect(() => {
        if (Platform.OS === "android") {
            setBackgroundButtonNavigation();
        }
    }, []);
    return <>{children}</>;
};

export default BottomButtonNavigationColor;
