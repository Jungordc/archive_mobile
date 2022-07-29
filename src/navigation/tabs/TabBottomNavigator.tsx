/** @format */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home/Home";
import Search from "../../screens/Search/Search";
import SelectCategorie from "../../screens/SelectCategorie/SelectCategorie";
import MeDash from "../../screens/MeDash/MeDash";
import { HomeTabPramList } from "../types";

import {
    BottomTabIconEdit,
    BottomTabIconHome,
    BottomTabIconMenu,
    BottomTabIconSearch,
} from "./bottomTabIcons";
import useBottomTabTheme from "./useBottomTabTheme";

export const BottomTab = createBottomTabNavigator<HomeTabPramList>();

export type TabBottomNavigatorProps = {};

const TabBottomNavigator: React.FC<TabBottomNavigatorProps> = () => {
    const screenOptionsThemed = useBottomTabTheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Index"
            screenOptions={screenOptionsThemed}
            sceneContainerStyle={{
                backgroundColor: "white",
            }}
        >
            <BottomTab.Screen
                options={{
                    tabBarIcon: BottomTabIconHome,
                }}
                name="Index"
                component={Home}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: BottomTabIconSearch,
                }}
                name="Search"
                component={Search}
            />
            <BottomTab.Screen
                name="Edit"
                component={SelectCategorie}
                options={{
                    tabBarIcon: BottomTabIconEdit,
                }}
            />
            <BottomTab.Screen
                name="MeDash"
                component={MeDash}
                options={{
                    tabBarIcon: BottomTabIconMenu,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabBottomNavigator;
