/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 *
 * @format
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList {}
    }
}

// route bottom tab
export type RootTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList> | undefined;
    Edit: NavigatorScreenParams<EditionStackParamList> | undefined;
    MeDash: NavigatorScreenParams<MeDashParamsList> | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<MeDashParamsList>
    >;

// Medash
export type MeDashParamsList = {
    DashList: undefined;
    NewLib: undefined;
    About: undefined;
    Profile: { author: number | string };
    Help: undefined;
    Save: undefined;
};

export type MeDashScreenProps<Screen extends keyof MeDashParamsList> =
    CompositeScreenProps<
        NativeStackScreenProps<MeDashParamsList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >;

// Home type
export type HomeStackParamList = {
    Index: undefined;
    Search: undefined;
    Detail: { post: string | number };
};

export type HomeScreenProps<Screen extends keyof HomeStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<HomeStackParamList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >;

// Edition type
export type EditionStackParamList = {
    SelectCategorie: undefined;
    Edition: { category: string | number };
};

export type EditionScreenProps<Screen extends keyof EditionStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<EditionStackParamList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >;
