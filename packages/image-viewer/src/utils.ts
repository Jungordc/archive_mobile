/** @format */

import { Platform } from "react-native";

export function getStylesConvertedToArray<T>(styles: T) {
    if (styles === undefined) return [{}];
    return Array.isArray(styles) ? styles : [styles];
}

export function callIfIsAndroid(callback?: () => void) {
    Platform.OS === "android" && callback?.();
}

export function timeSteper(prevValue: number, step: number = 1): number {
    return prevValue + step;
}

export function clampHidden(isHidden: boolean, isTimeOut: boolean): boolean {
    return isHidden && !isTimeOut;
}

export function timerCallBackProcess(
    isToped: boolean,
    timeOut: number = 3,
    step: number = 1,
    initializer: number = 0
): (e: number) => number {
    return (prevTimer: number) => {
        if (prevTimer >= timeOut) return initializer;
        return isToped ? prevTimer : timeSteper(prevTimer, step);
    };
}
