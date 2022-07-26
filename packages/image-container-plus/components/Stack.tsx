/** @format */

import React from "react";
import { View, ViewStyle, ViewProps } from "react-native";
import { isFragment } from "react-is";

type directionType = ViewStyle["flexDirection"];
type ViewStylePropsType = Pick<ViewProps, "style">;
const defaultDirection: directionType = "column";

export type StackProps = {
    space?: number;
    direction?: directionType;
} & ViewProps;

const Stack: React.FC<StackProps> = ({
    direction = defaultDirection,
    space = 0,
    style,
    children,
    ...props
}) => {
    const valideChild = filterValideChild(children);
    const styles = getStyles({ style });

    return (
        <View
            {...props}
            style={[{ flex: 1, flexDirection: direction }, ...styles]}
        >
            {valideChild.map((child: any, index) => {
                const stylesList = getStyles({ style: child.props.style });
                const spaceValue = getSpace({
                    match: index !== 0,
                    direction,
                    space,
                });
                return React.cloneElement(child, {
                    ...child.props,
                    style: [spaceValue, ...stylesList],
                });
            })}
        </View>
    );
};

export default Stack;

const filterValideChild = (children: any) => {
    return React.Children.toArray(children).filter((child) => {
        if (process.env.NODE_ENV !== "production") {
            if (isFragment(child)) {
                console.error(
                    [
                        "The AvatarGroup component doesn't accept a Fragment as a child.",
                        "Consider providing an array instead.",
                    ].join("\n")
                );
            }
        }
        return React.isValidElement(child);
    });
};

const getStyles = ({ style }: ViewStylePropsType) => {
    return Array.isArray(style) ? style : [style];
};

type getSpaceParamsType = {
    match?: boolean;
    direction?: directionType;
    space?: number;
};

const getSpace = ({
    match,
    space = 0,
    direction = defaultDirection,
}: getSpaceParamsType): ViewStyle => {
    if (match) {
        const directionMatched =
            direction == "row" || direction == "row-reverse";
        return directionMatched ? { marginLeft: space } : { marginTop: space };
    }
    return {};
};
