/** @format */

import { View } from "react-native";
import * as React from "react";
import { isFragment } from "react-is";
import HStack from "native-base/src/components/primitives/Stack/HStack";

const SPACINGS = {
    small: -16,
    medium: null,
};

//
export type AvatarGroupProps = {
    total?: number;
    max?: number;
    variant?: "circular" | "rounded" | "square";
    spacing?: "medium" | "small" | number;
};

//
const AvatarGroup: React.FC<AvatarGroupProps> = ({
    children: childrenProp,
    max = 5,
    total,
    variant,
    spacing = "small",
}) => {
    //

    const children = React.Children.toArray(childrenProp).filter((child) => {
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

    let clampedMax = max < 2 ? 2 : max;
    const totalAvatars = total || children.length;

    if (totalAvatars === clampedMax) {
        clampedMax += 1;
    }

    clampedMax = Math.min(totalAvatars + 1, clampedMax);

    const maxAvatars = Math.min(children.length, clampedMax - 1);
    const extraAvatars = Math.max(
        totalAvatars - clampedMax,
        totalAvatars - maxAvatars,
        0
    );

    const marginLeft =
        typeof spacing === "string" ? SPACINGS[spacing] : spacing;
    return (
        <HStack>
            {children
                .slice(0, maxAvatars)
                .reverse()
                .map((child, index) => {
                    return React.cloneElement(child, {
                        ...child.props,
                        style: {
                            marginLeft: index === 0 ? undefined : marginLeft,
                            ...child.props.style,
                            // zIndex: maxAvatars - index,
                        },
                    });
                })}
        </HStack>
    );
};

export default AvatarGroup;
