/** @format */

import { View, Text } from "react-native";
import React from "react";

export type BaseImageProfileProps = {
    edit?: boolean;
};

const BaseImageProfile: React.FC<BaseImageProfileProps> = ({}) => {
    return (
        <View>
            <Text>BaseImageProfile</Text>
        </View>
    );
};

export default BaseImageProfile;
