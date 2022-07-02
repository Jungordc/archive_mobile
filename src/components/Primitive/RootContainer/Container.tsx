/** @format */

import React from "react";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";

export type RootContainerProps = {
    statubarProps?: StatusBarProps;
    withStatusBar?: boolean;
} & SafeAreaViewProps;

const RootContainer: React.FC<RootContainerProps> = ({
    children,
    statubarProps,
    withStatusBar = true,
    ...props
}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
            {...props}
        >
            {withStatusBar && (
                <StatusBar
                    backgroundColor="#fff"
                    style="dark"
                    {...statubarProps}
                />
            )}
            {children}
        </SafeAreaView>
    );
};

export default RootContainer;
