/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 *
 * @format
 */

import {
    CompositeScreenProps,
    NavigatorScreenParams,
    RouteProp,
} from "@react-navigation/native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    NativeStackNavigationOptions,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

// route stack params list
export type RootStackParamList = {
    // Group Auth
    Login: undefined;
    Signin: undefined;
    EmailAuth: undefined;
    UsernameAuth: undefined;
    ConfimCodeAuth: undefined;
    CheckInbox: undefined;
    //
    Home: NavigatorScreenParams<HomeTabPramList>; //tab Route
    DashList: undefined;
    NewLib: undefined;
    About: undefined;
    Profile: { author: number | string };
    Help: undefined;
    Save: undefined;
    SearchDetail: undefined;
    Detail: { post: string | number };
    SelectCategorie: undefined;
    Edition: { category: string | number };
    Comments: { post: number | string }; // Modal
};

// tab params list
export type HomeTabPramList = {
    Index: undefined;
    Edit: undefined;
    MeDash: undefined;
    Search: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabPramList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabPramList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

//screen options type
export type ScreenOptionsType =
    | NativeStackNavigationOptions
    | ((props: {
          route: RouteProp<RootStackParamList, keyof RootStackParamList>;
          navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;