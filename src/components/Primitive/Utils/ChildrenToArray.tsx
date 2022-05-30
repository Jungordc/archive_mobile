/** @format */

import React from "react";
import { isFragment } from "react-is";

export const ChildrenToArray = (
    children: React.ReactNode | React.ReactNode[]
) => {
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
