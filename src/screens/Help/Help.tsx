/** @format */

import { View, Text } from "react-native";
import React from "react";

export type HelpProps = {};
const Help: React.FC<HelpProps> = ({}) => {
    return (
        <View>
            <Text>Help</Text>
        </View>
    );
};

Help.displayName = "Help";
export default Help;
