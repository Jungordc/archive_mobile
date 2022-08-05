/** @format */

import { Platform } from "react-native";

export function callIfIsAndroid(callback?: () => void) {
    Platform.OS === "android" && callback?.();
}

export function timer(prevValue: number, step: number = 1) {
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
        return isToped ? prevTimer : timer(prevTimer, step);
    };
}
