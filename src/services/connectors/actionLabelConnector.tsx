/** @format */

import * as React from "react";

export function <T>(Components: React.ComponentType<T>) {
    return (props: T & { label : number|string }) => {
        
        return (
            <Components
                {...props}
            />
        );
    };
}
