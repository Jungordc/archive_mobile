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
    CheckInboxScreen,
} from "../screens/AuthGroupScreens";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";

export const RootStackNavigation: React.FC = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
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
                    headerBackTitleVisible: false,
                    headerTitle: () => null,
                    headerTransparent: true,
                    headerShadowVisible: false,
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
                    name="CheckInbox"
                    component={CheckInboxScreen}
                    options={({ navigation }) => ({
                        presentation: "modal",
                        headerShadowVisible: false,
                        headerLeft: () => (
                            <Pressable
                                onPress={navigation.goBack}
                                style={({ pressed }) => ({
                                    opacity: pressed ? 0.5 : 1,
                                })}
                            >
                                <Ionicons
                                    name="close"
                                    size={25}
                                    style={{ marginRight: 15 }}
                                />
                            </Pressable>
                        ),
                    })}
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
            <HomeStack.Screen
                name="Profile"
                component={Profile}
                options={({ navigation }) => ({
                    headerBackTitleVisible: false,
                    headerTitle: () => null,
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Pressable
                            onPress={navigation.goBack}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <Ionicons
                                name="close"
                                size={25}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <HomeStack.Screen
                options={{
                    title: "Nouvelle Bibliotheque",
                    headerTitleAlign: "left",
                    headerTitleStyle: {
                        fontSize: 15,
                    },
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
