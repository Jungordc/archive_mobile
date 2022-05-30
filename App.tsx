/** @format */
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import ThemeProvider from "./src/Theme/ThemeProvider";
import SplashLoader from "./src/containers/SplachLoader";

export default function App() {
    const colorScheme = "light"; //useColorScheme();

    const setBackgroundButtonNavigation = React.useCallback(async () => {
        NavigationBar.setBackgroundColorAsync("white");
        NavigationBar.setBorderColorAsync("white");
        NavigationBar.setButtonStyleAsync("dark");
    }, []);

    React.useEffect(() => {
        setBackgroundButtonNavigation();
    }, []);

    return (
        <SplashLoader>
            <ThemeProvider>
                <SafeAreaProvider>
                    <StatusBar />
                    <Navigation colorScheme={colorScheme} />
                </SafeAreaProvider>
            </ThemeProvider>
        </SplashLoader>
    );
}
