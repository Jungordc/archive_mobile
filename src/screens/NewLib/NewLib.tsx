/** @format */

import { View, Text } from "react-native";
import React from "react";

export type NewLibProps = {};
const NewLib: React.FC<NewLibProps> = ({}) => {
    return (
        <View>
            <Text>NewLib</Text>
        </View>
    );
};

NewLib.displayName = "NewLib";
export default NewLib;
