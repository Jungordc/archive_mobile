/** @format */

import React from "react";
import { View, Text } from "native-base";

type CameraProps = {};

const Camera: React.FC<CameraProps> = ({ ...props }) => {
    return (
        <View>
            <Text>Hello World from Camera</Text>
        </View>
    );
};

export default Camera;
