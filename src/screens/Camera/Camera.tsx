/** @format */

import React from "react";
import { View, Text } from "native-base";
import { CameraObserved } from "../../components/Composite/Camera/Camera";

type CameraProps = {};

const Camera: React.FC<CameraProps> = ({ ...props }) => {
    return (
        <View flex="1">
            <CameraObserved />
        </View>
    );
};

export default Camera;
