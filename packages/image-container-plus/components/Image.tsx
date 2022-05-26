/** @format */

import { View, Text } from "react-native";
import React from "react";

export type ImageProps = {};
const Image: React.FC<ImageProps> = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#f34", padding: 20 }}>
            <Text>Image</Text>
        </View>
    );
};

export default Image;
