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
import Viewer from "./packages/image-viewer/src/Viewer";
import TestAuth from "./src/screens/AuthGroupScreens/Test.Auth";

/*
    a force de rester avec des chiens,
        je fini par aboyer!

        @bienfaitshm jungoteam
*/

export default function App() {
    const colorScheme = "light"; //useColorScheme();

    // return <Viewer />;
    return (
        <SplashLoader>
            <ThemeProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <BottomSheetModalProvider>
                        {/* <Viewer /> */}
                        {/* <TestAuth /> */}
                        <Navigation colorScheme={colorScheme} />
                    </BottomSheetModalProvider>
                </GestureHandlerRootView>
            </ThemeProvider>
        </SplashLoader>
    );
}
