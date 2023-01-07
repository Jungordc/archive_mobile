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
import { StackNavigationOptions } from "@react-navigation/stack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

type IDType = number | string;

// route stack params list
export type RootStackParamList = {
    // Group Auth
    Login: undefined;
    Signin: undefined;
    EmailAuth?: { type: "LOGIN" | "SIGIN" };
    UsernameAuth: undefined;
    ConfimCodeAuth: { session: string };
    CheckInbox: { session: string };
    //
    Home: NavigatorScreenParams<HomeTabPramList>; //tab Route
    DashList: undefined;
    About: undefined;
    Profile: { author: IDType };
    Help: undefined;
    Save: undefined;
    Subscribers: undefined;
    Subscribed: undefined;
    SearchDetail: undefined;
    Detail: { post: IDType };
    Reading: { post: IDType };
    // Edition...
    SelectCategorie: undefined;
    NewLib: undefined;
    Edition: { category: IDType };
    EditionDocs?: { index?: any };
    //modals
    Comments: { post: IDType }; // Modal
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

export type OptionType<T extends keyof RootStackParamList> =
    | StackNavigationOptions
    | ((props: {
          route: RouteProp<RootStackParamList, T>;
          navigation: any;
      }) => StackNavigationOptions)
    | undefined;
