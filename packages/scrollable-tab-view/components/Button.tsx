/** @format */

import React from "react";
import { Platform } from "react-native";
import ButtonIos, { ButtonIosProps } from "./Button.ios";
import ButtonAndroid, { ButtonAndroidProps } from "./Button.android";

interface ButtonProps extends ButtonIosProps, ButtonAndroidProps {}

export function createButton<T extends ButtonProps>(
    Components1: React.ComponentType<T>,
    Components2: React.ComponentType<T>
) {
    return (hocPros: T) => {
        const Cpnt = Platform.OS === "android" ? Components1 : Components2;
        return React.cloneElement(Cpnt as any, hocPros);
    };
}

const Button = createButton(ButtonAndroid, ButtonIos);
export default Button;
