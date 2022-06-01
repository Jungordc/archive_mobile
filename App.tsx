/** @format */
// import "expo-dev-client";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import ThemeProvider from "./src/Theme/ThemeProvider";
import SplashLoader from "./src/containers/SplachLoader";
import BottomButtonNavigationColor from "./src/containers/BottomButtonNavigationColor";

export default function App() {
    const colorScheme = "light"; //useColorScheme();

    return (
        <BottomButtonNavigationColor>
            <SplashLoader>
                <ThemeProvider>
                    <SafeAreaProvider>
                        <StatusBar />
                        <Navigation colorScheme={colorScheme} />
                    </SafeAreaProvider>
                </ThemeProvider>
            </SplashLoader>
        </BottomButtonNavigationColor>
    );
}
