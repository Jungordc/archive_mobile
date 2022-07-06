/** @format */

import React from "react";
import { View, Text } from "react-native";

type SubscriberProps = {};

const Subscriber: React.FC<SubscriberProps> = ({ ...props }) => {
    return (
        <View>
            <Text>Hello World from Subscriber</Text>
        </View>
    );
};

export default Subscriber;
