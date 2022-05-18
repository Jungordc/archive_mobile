/** @format */

import React from "react";
import DefaultTabBar, { DefaultTabBarProps } from "./DefaultTabBar";
import { TabBarPosition } from "../Types";

export interface TabBarRenderContainerProps extends DefaultTabBarProps {
    tabBarPosition?: TabBarPosition;
    tabBarBackgroundColor?: any;
    tabBarActiveTextColor?: any;
    tabBarInactiveTextColor?: any;
    tabBarTextStyle?: any;
    tabBarUnderlineStyle?: any;
    renderTabBar?(props: DefaultTabBarProps): React.ReactNode | false;
}

const TabBarRenderContainer: React.FC<TabBarRenderContainerProps> = ({
    tabBarPosition = "top",
    tabBarBackgroundColor,
    tabBarActiveTextColor,
    tabBarInactiveTextColor,
    tabBarTextStyle,
    tabBarUnderlineStyle,
    ...props
}) => {
    const innerTabBarProps: DefaultTabBarProps = {
        ...props,
        style: {
            position: "absolute",
            left: 0,
            right: 0,
            [tabBarPosition === "overlayTop" ? "top" : "bottom"]: 0,
        },
        ...(tabBarBackgroundColor && {
            backgroundColor: tabBarBackgroundColor,
        }),
        ...(tabBarActiveTextColor && {
            activeTextColor: tabBarActiveTextColor,
        }),
        ...(tabBarInactiveTextColor && {
            inactiveTextColor: tabBarInactiveTextColor,
        }),
        ...(tabBarTextStyle && {
            textStyle: tabBarTextStyle,
        }),
        ...(tabBarUnderlineStyle && {
            tabBarUnderlineStyle: tabBarUnderlineStyle,
        }),
    };
    const overlayTabs = React.useMemo(
        () =>
            tabBarPosition === "overlayTop" ||
            tabBarPosition === "overlayBottom",
        [tabBarPosition]
    );

    const renderTabBar = React.useCallback(() => {
        if (props.renderTabBar)
            return React.cloneElement(
                props.renderTabBar(innerTabBarProps),
                innerTabBarProps
            );
        if (props.renderTabBar === false) return null;
        return <DefaultTabBar {...innerTabBarProps} />;
    }, [innerTabBarProps, props.renderTabBar]);

    return (
        <React.Fragment>
            {tabBarPosition === "top" && renderTabBar()}
            {props.children}
            {(tabBarPosition === "bottom" || overlayTabs) && renderTabBar()}
        </React.Fragment>
    );
};

export default TabBarRenderContainer;
