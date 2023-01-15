/** @format */

import React from "react";
import { Pressable } from "react-native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Icon from "../../components/Primitive/Icons/Icon";
import { View } from "native-base/src/components/basic/View";
import About from "../../screens/About/About";
import {
    CategoryLoginScreen,
    CategorySigninScreen,
    CheckInboxScreen,
    ConfirmCodeScreen,
    EmailScreen,
    UserNameScreen,
} from "../../screens/AuthGroupScreens";
import Comments from "../../screens/Comments/Comments";
import Detail from "../../screens/Detail/Detail";
import Edit from "../../screens/Edit/Edit";
import EditingDocs from "../../screens/EditingDocs/EditingDocs";
import Help from "../../screens/Help/Help";
import NewLib from "../../screens/NewLib/NewLib";
import Profile from "../../screens/Profile/Profile";
import Reading from "../../screens/Reading/Reading";
import Save from "../../screens/Save/Save";
import Search from "../../screens/Search/Search";
import Subscribed from "../../screens/Subscribed/Subscribed";
import Subscriber from "../../screens/Subscriber/Subscriber";
import { ScreenManagerPropsType } from "../../Types/screens";
import TabBottomNavigator from "../tabs/TabBottomNavigator";
import { RootStackParamList } from "../types";
import { LoginAuthOption } from "./options";

export const HomeStack =
    createSharedElementStackNavigator<RootStackParamList>();

type StackNavigationProps = {} & Partial<ScreenManagerPropsType>;

const StackNavigation: React.FC<StackNavigationProps> = ({
    isAuthenticated = false,
    defaultUser,
    ...props
}) => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: "center",
                headerShadowVisible: false,
                cardStyle: {
                    backgroundColor: "#fff",
                },
            }}
        >
            {!isAuthenticated ? (
                <React.Fragment>
                    {/* <HomeStack.Group
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerTitle: () => null,
                    headerTransparent: true,
                    headerShadowVisible: false,
                }}
            > */}
                    <HomeStack.Screen
                        name="Login"
                        component={CategoryLoginScreen}
                        options={LoginAuthOption}
                    />
                    <HomeStack.Screen
                        name="Signin"
                        component={CategorySigninScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <HomeStack.Screen
                        name="EmailAuth"
                        component={EmailScreen}
                        options={{
                            headerTransparent: true,
                            headerTitle: () => null,
                        }}
                        initialParams={{
                            type: "LOGIN",
                        }}
                    />
                    <HomeStack.Screen
                        name="UsernameAuth"
                        component={UserNameScreen}
                        options={{
                            headerTransparent: true,
                            headerTitle: () => null,
                        }}
                    />
                    <HomeStack.Screen
                        name="CheckInbox"
                        component={CheckInboxScreen}
                        options={{
                            headerTransparent: true,
                            headerTitle: () => null,
                            headerBackImage: () => (
                                <View
                                    justifyContent="center"
                                    alignItems="center"
                                    p="1"
                                >
                                    <Icon
                                        color="black"
                                        size={27}
                                        iconName="close"
                                    />
                                </View>
                            ),
                        }}
                    />
                    <HomeStack.Screen
                        name="ConfimCodeAuth"
                        component={ConfirmCodeScreen}
                        options={{
                            headerTransparent: true,
                            headerTitle: () => null,
                            headerBackImage: () => (
                                <View
                                    justifyContent="center"
                                    alignItems="center"
                                    p="1"
                                >
                                    <Icon
                                        color="black"
                                        size={27}
                                        iconName="close"
                                    />
                                </View>
                            ),
                        }}
                    />
                    {/* </HomeStack.Group> */}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <HomeStack.Screen
                        options={{
                            title: "Archive",
                            header: () => null,
                            headerShown: false,
                        }}
                        name="Home"
                        component={TabBottomNavigator}
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
                    {/* user info */}
                    <HomeStack.Screen
                        name="Profile"
                        component={Profile}
                        initialParams={{ author: defaultUser }}
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
                                    <Icon size={25} iconName="close" mr="5" />
                                </Pressable>
                            ),
                        })}
                    />

                    <HomeStack.Screen
                        name="Subscribers"
                        component={Subscriber}
                    />
                    <HomeStack.Screen
                        name="Subscribed"
                        component={Subscribed}
                    />
                    <HomeStack.Screen name="Save" component={Save} />

                    {/* Edition and Creator Group */}
                    {/* <HomeStack.Group screenOptions={creatorScreenOptions}> */}
                    <HomeStack.Screen
                        options={({ navigation }) => ({
                            headerBackTitleVisible: false,
                            headerTitle: () => null,
                            // headerTransparent: true,
                            headerShadowVisible: false,
                            headerLeft: () => (
                                <View ml="2">
                                    <Pressable
                                        onPress={navigation.goBack}
                                        style={({ pressed }) => ({
                                            opacity: pressed ? 0.5 : 1,
                                            borderRadius: 100,
                                            height: 30,
                                            width: 30,
                                        })}
                                    >
                                        <View
                                            flex={1}
                                            justifyContent="center"
                                            alignItems="center"
                                            rounded="full"
                                        >
                                            <Icon
                                                size={25}
                                                iconName="close"
                                                color="black"
                                            />
                                        </View>
                                    </Pressable>
                                </View>
                            ),
                        })}
                        name="Edition"
                        component={Edit}
                    />
                    <HomeStack.Screen
                        options={{
                            headerTransparent: true,
                            presentation: "modal",
                            header() {
                                return null;
                            },
                        }}
                        name="EditionDocs"
                        // sharedElements={(route, otherRoute, showing) => {
                        //     const docs = route.params?.index;
                        //     console.log("Editing", route.params, docs);
                        //     return undefined;
                        //     // const { item } = route.params;
                        //     // return [`item.${item.uri}.photo-doc`];
                        // }}
                        component={EditingDocs}
                    />
                    <HomeStack.Screen
                        options={{
                            title: "Ma Bibliotheque",
                        }}
                        name="NewLib"
                        component={NewLib}
                    />
                    {/* </HomeStack.Group> */}

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
                    {/* <HomeStack.Group screenOptions={modalScreenOptions}> */}
                    <HomeStack.Screen name="Comments" component={Comments} />
                    {/* </HomeStack.Group> */}
                </React.Fragment>
            )}
        </HomeStack.Navigator>
    );
};

export default StackNavigation;
