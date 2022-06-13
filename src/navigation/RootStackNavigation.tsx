/** @format */

import React from "react";
import { HomeStack } from "./navigatorCreator";

import Detail from "../screens/Detail/Detail";
import Search from "../screens/Search/Search";
import HomeTabNavigation from "./HomeTabNavigation";
import Edit from "../screens/Edit/Edit";
import Profile from "../screens/Profile/Profile";
import Help from "../screens/Help/Help";
import About from "../screens/About/About";
import NewLib from "../screens/NewLib/NewLib";
import {
    CategoryLoginScreen,
    UserNameScreen,
    EmailScreen,
    CategorySigninScreen,
    ConfirmCodeScreen,
} from "../screens/AuthGroupScreens";

export const RootStackNavigation: React.FC = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: "#FFF",
                },
            }}
        >
            <HomeStack.Group
                screenOptions={{
                    headerShown: false,
                }}
            >
                <HomeStack.Screen
                    name="Login"
                    component={CategoryLoginScreen}
                />
                <HomeStack.Screen
                    name="Signin"
                    component={CategorySigninScreen}
                />
                <HomeStack.Screen name="EmailAuth" component={EmailScreen} />
                <HomeStack.Screen
                    name="UsernameAuth"
                    component={UserNameScreen}
                />
                <HomeStack.Screen
                    name="ConfimCodeAuth"
                    component={ConfirmCodeScreen}
                />
            </HomeStack.Group>
            <HomeStack.Screen
                options={{
                    title: "Archive",
                    header: () => null,
                    headerShown: false,
                }}
                name="Home"
                component={HomeTabNavigation}
            />
            <HomeStack.Screen
                options={{
                    headerShown: false,
                    header: () => null,
                    headerTransparent: true,
                }}
                name="Detail"
                component={Detail}
            />
            <HomeStack.Screen name="SearchDetail" component={Search} />
            <HomeStack.Screen
                options={{
                    title: "Nouvel archive",
                }}
                name="Edition"
                component={Edit}
            />
            <HomeStack.Screen name="Profile" component={Profile} />
            <HomeStack.Screen
                options={{
                    title: "Nouvelle Bibliotheque",
                }}
                name="NewLib"
                component={NewLib}
            />
            <HomeStack.Screen name="Help" component={Help} />
            <HomeStack.Screen
                options={{
                    title: "Apropos",
                }}
                name="About"
                component={About}
            />
        </HomeStack.Navigator>
    );
};
