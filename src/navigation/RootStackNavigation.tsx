/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Detail from "../screens/Detail/Detail";
import Search from "../screens/Search/Search";
import HomeTabNavigation from "./HomeTabNavigation";
import Edit from "../screens/Edit/Edit";

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                options={{
                    title: "Archive",
                    headerShadowVisible: false,
                }}
                name="Home"
                component={HomeTabNavigation}
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
            <HomeStack.Screen name="Edition" component={Edit} />
        </HomeStack.Navigator>
    );
};
