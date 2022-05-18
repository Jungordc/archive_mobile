/** @format */

import React from "react";
import {
    TouchableNativeFeedback,
    TouchableNativeFeedbackProps,
} from "react-native";

export interface ButtonAndroidProps extends TouchableNativeFeedbackProps {}
const ButtonAndroid: React.FC<ButtonAndroidProps> = (props) => {
    return (
        <TouchableNativeFeedback
            delayPressIn={0}
            background={TouchableNativeFeedback.SelectableBackground()}
            {...props}
        >
            {props.children}
        </TouchableNativeFeedback>
    );
};

export default ButtonAndroid;
