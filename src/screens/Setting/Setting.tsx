/** @format */

import { View, Text } from "react-native";
import React from "react";

export type SettingProps = {};

const Setting: React.FC<SettingProps> = ({}) => {
    return (
        <View>
            <Text>Setting</Text>
        </View>
    );
};

Setting.displayName = "Setting";
export default Setting;
