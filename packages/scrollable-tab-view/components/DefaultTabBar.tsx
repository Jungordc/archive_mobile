/** @format */

import React from "react";
import {
    View,
    StyleSheet,
    TextStyle,
    ViewStyle,
    ViewProps,
    ColorValue,
    Animated,
} from "react-native";
import TabBarRender, { TabBarRenderProps } from "./TabBarRender";

export interface DefaultTabBarProps extends ViewProps {
    goToPage?(page: number): void;
    activeTab: number;
    tabs: any[];
    backgroundColor?: ColorValue;
    activeTextColor?: string;
    inactiveTextColor?: string;
    textStyle?: TextStyle;
    tabStyle?: ViewStyle;
    renderTab?(props: TabBarRenderProps): any;
    underlineStyle?: ViewStyle;
    //
    containerWidth: any;
    scrollValue: any;
    tabBarUnderlineStyle?: ViewStyle;
}

const DefaultTabBar: React.FC<DefaultTabBarProps> = ({
    activeTextColor = "navy",
    inactiveTextColor = "black",
    backgroundColor,
    ...props
}) => {
    const containerWidth = props.containerWidth;
    const numberOfTabs = props.tabs.length;

    const tabUnderlineStyle: ViewStyle = {
        position: "absolute",
        width: containerWidth / numberOfTabs,
        height: 4,
        backgroundColor: "navy",
        bottom: 0,
    };

    const translateX = props.scrollValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, containerWidth / numberOfTabs],
    });
    return (
        <View style={[styles.tabs, { backgroundColor }, props.style]}>
            {props.tabs.map((name, page) => {
                const isTabActive = props.activeTab === page;
                if (props.renderTab)
                    return props.renderTab({
                        name,
                        page,
                        isTabActive,
                        onPressHandler: props.goToPage,
                        activeTextColor,
                        inactiveTextColor,
                        textStyle: props.textStyle,
                    });
                return (
                    <TabBarRender
                        name={name}
                        page={page}
                        isTabActive={isTabActive}
                        onPressHandler={props.goToPage}
                        activeTextColor={activeTextColor}
                        inactiveTextColor={inactiveTextColor}
                        textStyle={props.textStyle}
                    />
                );
            })}
            <Animated.View
                style={[
                    tabUnderlineStyle,
                    {
                        transform: [{ translateX }],
                    },
                    props.tabBarUnderlineStyle,
                ]}
            />
        </View>
    );
};

export default DefaultTabBar;
const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
    },
    tabs: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: "#ccc",
    },
});
