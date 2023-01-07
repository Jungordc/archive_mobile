/** @format */

import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HStack, Spinner, Heading } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export type SplashLoader = {
    children: React.ReactNode;
};

const SplashLoader: React.FC<SplashLoader> = ({ children }) => {
    const [appIsReady, setAppIsReady] = React.useState(false);

    React.useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync(Entypo.font);
                await Font.loadAsync(Ionicons.font);
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    React.useEffect(() => {
        onLayoutRootView();
    }, [appIsReady]);

    const onLayoutRootView = React.useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return (
            <HStack
                space={2}
                justifyContent="center"
                alignItems="center"
                flex={1}
            >
                <Spinner
                    color="primary.500"
                    accessibilityLabel="Loading posts"
                />
                <Heading color="primary.500" fontSize="md">
                    Loading
                </Heading>
            </HStack>
        );
    }
    return <>{children}</>;
};

export default SplashLoader;
