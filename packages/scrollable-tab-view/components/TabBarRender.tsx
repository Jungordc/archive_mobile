/** @format */

import { View, Text, TextStyle, ViewStyle, StyleSheet } from "react-native";
import React from "react";
import Button from "./Button";

export interface TabBarRenderProps {
    name: string;
    page: any;
    isTabActive: boolean;
    activeTextColor: any;
    inactiveTextColor: any;
    onPressHandler?(page: any): void;
    textStyle?: TextStyle;
    tabStyle?: ViewStyle;
}

const TabBarRender: React.FC<TabBarRenderProps> = ({
    onPressHandler,
    page,
    isTabActive,
    name,
    activeTextColor,
    inactiveTextColor,
    textStyle,
    ...props
}) => {
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? "bold" : "normal";

    return (
        <Button
            style={{ flex: 1 }}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            onPress={() => onPressHandler?.(page)}
        >
            <View style={[styles.tab, props?.tabStyle]}>
                <Text style={[{ color: textColor, fontWeight }, textStyle]}>
                    {name}
                </Text>
            </View>
        </Button>
    );
};

export default TabBarRender;

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
    },
});
