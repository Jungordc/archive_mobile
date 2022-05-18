/** @format */

import * as React from "react";

export function createPager<T extends { tabLabel: string }>(
    Components: React.ComponentType<T>
) {
    return (hocPros: T) => {
        return React.cloneElement(Components, hocPros);
    };
}
