/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Detail from "../screens/Detail/Detail";
import Search from "../screens/Search/Search";
import HomeTabNavigation from "./HomeTabNavigation";
import Edit from "../screens/Edit/Edit";
import Profile from "../screens/Profile/Profile";
import Help from "../screens/Help/Help";
import About from "../screens/About/About";
import NewLib from "../screens/NewLib/NewLib";

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen
                options={{
                    title: "Archive",
                    headerShown: false,
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
            <HomeStack.Screen
                options={{
                    title: "Nouvel archive",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }}
                name="Edition"
                component={Edit}
            />
            <HomeStack.Screen
                options={{
                    contentStyle: {},
                    headerTransparent: true,
                }}
                name="Profile"
                component={Profile}
            />
            <HomeStack.Screen name="NewLib" component={NewLib} />
            <HomeStack.Screen name="Help" component={Help} />
            <HomeStack.Screen
                options={{
                    title: "Apropos",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                }}
                name="About"
                component={About}
            />
        </HomeStack.Navigator>
    );
};
