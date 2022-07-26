/** @format */

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { useTheme } from "native-base/src/hooks/useTheme";
import { HomeTabPramList } from "../types";

type ThemeBottomOptionType =
    | BottomTabNavigationOptions
    | ((props: {
          route: RouteProp<HomeTabPramList, keyof HomeTabPramList>;
          navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined;

export default function useBottomTabTheme(): ThemeBottomOptionType {
    const theme = useTheme();
    return {
        headerShown: false,
        tabBarActiveTintColor: theme.colors.coolGray[800],
        tabBarInactiveTintColor: theme.colors.coolGray[500],
        tabBarShowLabel: false,
        tabBarStyle: {
            borderTopWidth: 0,
        },
    };
}
