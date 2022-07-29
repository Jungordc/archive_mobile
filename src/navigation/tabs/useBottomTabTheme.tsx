/** @format */

import { PlatformPressable } from "@react-navigation/elements";
import { RouteProp } from "@react-navigation/native";
import { useTheme } from "native-base/src/hooks/useTheme";
import {
    BottomTabBarButtonProps,
    BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { HomeTabPramList } from "../types";

type ThemeBottomOptionType =
    | BottomTabNavigationOptions
    | ((props: {
          route: RouteProp<HomeTabPramList, keyof HomeTabPramList>;
          navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined;

export const tabBarButton = (props: BottomTabBarButtonProps) => (
    <PlatformPressable pressColor="rgba(0,0,0,0.1.5)" {...props} />
);

export default function useBottomTabTheme(): ThemeBottomOptionType {
    const theme = useTheme();
    return {
        tabBarButton,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.coolGray[800],
        tabBarInactiveTintColor: theme.colors.coolGray[500],
        tabBarShowLabel: false,
        tabBarStyle: {
            borderTopWidth: 0,
        },
    };
}
