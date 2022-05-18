/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import Home from "../screens/Home/Home";
import Detail from "../screens/Detail/Detail";
import Search from "../screens/Search/Search";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                options={{
                    title: "Archive",
                    headerShadowVisible: false,
                }}
                name="Index"
                component={Home}
            />
            <HomeStack.Screen
                options={{
                    headerShadowVisible: false,
                    title: "",
                }}
                name="Detail"
                component={Detail}
            />
            <HomeStack.Screen name="Search" component={Search} />
        </HomeStack.Navigator>
    );
};
