/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MeDashParamsList } from "./types";
import MeDash from "../screens/MeDash/MeDash";
import About from "../screens/About/About";
import Help from "../screens/Help/Help";
import NewLib from "../screens/NewLib/NewLib";
import Profile from "../screens/Profile/Profile";

const MeDashStack = createNativeStackNavigator<MeDashParamsList>();

export const MeDashNavigator: React.FC = () => {
    return (
        <MeDashStack.Navigator initialRouteName="DashList">
            <MeDashStack.Screen
                name="DashList"
                options={{ title: "Archive" }}
                component={MeDash}
            />
            <MeDashStack.Screen name="Profile" component={Profile} />
            <MeDashStack.Screen name="About" component={About} />
            <MeDashStack.Screen name="Help" component={Help} />
            <MeDashStack.Screen name="NewLib" component={NewLib} />
        </MeDashStack.Navigator>
    );
};
