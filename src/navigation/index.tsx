/**
 *
 *
 * @format
 */
import * as React from "react";
import { ColorSchemeName } from "react-native";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";

import LinkingConfiguration from "./LinkingConfiguration";
import RootStackNavigation from "./stacks/StackNavigation";
import { accountScreenNavigationConnector } from "../services/connectors/AccountConnector";

const StackConnected = accountScreenNavigationConnector(RootStackNavigation);

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <StackConnected />
        </NavigationContainer>
    );
}
