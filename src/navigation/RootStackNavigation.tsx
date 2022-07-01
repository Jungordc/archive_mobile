/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";

import { HomeStack } from "./NavigatorCreator";

import Detail from "../screens/Detail/Detail";
import Search from "../screens/Search/Search";
import HomeTabNavigation from "./HomeTabNavigation";
import Edit from "../screens/Edit/Edit";
import Profile from "../screens/Profile/Profile";
import Help from "../screens/Help/Help";
import About from "../screens/About/About";
import NewLib from "../screens/NewLib/NewLib";
import Comments from "../screens/Comments/Comments";

import {
    CategoryLoginScreen,
    UserNameScreen,
    EmailScreen,
    CategorySigninScreen,
    ConfirmCodeScreen,
    CheckInboxScreen,
} from "../screens/AuthGroupScreens";

import {
    creatorScreenOptions,
    modalScreenOptions,
} from "./options/rootStackNavigationOptions";
import Reading from "../screens/Reading/Reading";
import EditingDocs from "../screens/EditingDocs/EditingDocs";

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
            <HomeStack.Screen name="Reading" component={Reading} />
            <HomeStack.Screen name="SearchDetail" component={Search} />

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

            {/* Edition and Creator Group */}
            <HomeStack.Group screenOptions={creatorScreenOptions}>
                <HomeStack.Screen
                    options={{
                        title: "Nouvel archive",
                    }}
                    name="Edition"
                    component={Edit}
                />
                <HomeStack.Screen
                    // options={{
                    //     headerTransparent: true,
                    // }}
                    name="EditionDocs"
                    component={EditingDocs}
                />
                <HomeStack.Screen
                    options={{
                        title: "Nouvelle Bibliotheque",
                    }}
                    name="NewLib"
                    component={NewLib}
                />
            </HomeStack.Group>

            {/* Info Group */}
            <HomeStack.Screen name="Help" component={Help} />
            <HomeStack.Screen
                options={{
                    title: "Apropos",
                }}
                name="About"
                component={About}
            />

            {/* Modal actions.... */}
            <HomeStack.Group screenOptions={modalScreenOptions}>
                <HomeStack.Screen name="Comments" component={Comments} />
            </HomeStack.Group>
        </HomeStack.Navigator>
    );
};
