/** @format */
// import "expo-dev-client";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import ThemeProvider from "./src/Theme/ThemeProvider";
import SplashLoader from "./src/containers/SplachLoader";
import BottomButtonNavigationColor from "./src/containers/BottomButtonNavigationColor";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
    const colorScheme = "light"; //useColorScheme();

    return (
        <BottomButtonNavigationColor>
            <SplashLoader>
                <ThemeProvider>
                    <SafeAreaProvider>
                        <StatusBar />
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <BottomSheetModalProvider>
                                <Navigation colorScheme={colorScheme} />
                            </BottomSheetModalProvider>
                        </GestureHandlerRootView>
                    </SafeAreaProvider>
                </ThemeProvider>
            </SplashLoader>
        </BottomButtonNavigationColor>
    );
}
