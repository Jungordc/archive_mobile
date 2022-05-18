/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditionScreenProps, EditionStackParamList } from "./types";
import Edit from "../screens/Edit/Edit";
import SelectCategorie from "../screens/SelectCategorie/SelectCategorie";

const Edition = createNativeStackNavigator<EditionStackParamList>();

export const EditionNavigator: React.FC = () => {
    return (
        <Edition.Navigator>
            <Edition.Screen
                name="SelectCategorie"
                component={SelectCategorie}
            />
            <Edition.Screen name="Edition" component={Edit} />
        </Edition.Navigator>
    );
};
