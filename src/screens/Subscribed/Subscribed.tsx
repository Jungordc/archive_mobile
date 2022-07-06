/** @format */

import React from "react";
import { View, Text } from "react-native";

type SubscribedProps = {};

const Subscribed: React.FC<SubscribedProps> = ({ ...props }) => {
    return (
        <View>
            <Text>Hello World from Subscribed</Text>
        </View>
    );
};

export default Subscribed;
