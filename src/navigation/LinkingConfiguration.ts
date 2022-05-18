/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 *
 * @format
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootTabParamList } from "./types";

const linking: LinkingOptions<RootTabParamList> = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {},
    },
};

export default linking;
