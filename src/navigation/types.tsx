/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 *
 * @format
 */

import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

// route stack params list

export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeTabPramList>; //tab Route
    DashList: undefined;
    NewLib: undefined;
    About: undefined;
    Profile: { author: number | string };
    Help: undefined;
    Save: undefined;
    Search: undefined;
    Detail: { post: string | number };
    SelectCategorie: undefined;
    Edition: { category: string | number };
};

export type HomeTabPramList = {
    Index: undefined;
    Edit: undefined;
    MeDash: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabPramList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabPramList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;
