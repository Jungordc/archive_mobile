/** @format */

import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

export interface ButtonIosProps extends TouchableOpacityProps {}
const ButtonIos: React.FC<ButtonIosProps> = (props) => {
    return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

export default ButtonIos;
