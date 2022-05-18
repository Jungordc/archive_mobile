/** @format */

import { View, Text } from "react-native";
import React from "react";

export type AboutProps = {};
const About: React.FC<AboutProps> = ({}) => {
    return (
        <View>
            <Text>About</Text>
        </View>
    );
};

About.displayName = "About";
export default About;
