/** @format */
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import ThemeProvider from "./src/Theme/ThemeProvider";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = "light"; //useColorScheme();

    const setBackgroundButtonNavigation = React.useCallback(async () => {
        NavigationBar.setBackgroundColorAsync("white");
        NavigationBar.setBorderColorAsync("white");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);

    React.useEffect(() => {
        setBackgroundButtonNavigation();
    }, []);

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <ThemeProvider>
                <SafeAreaProvider>
                    <StatusBar />
                    <Navigation colorScheme={colorScheme} />
                </SafeAreaProvider>
            </ThemeProvider>
        );
    }
}
