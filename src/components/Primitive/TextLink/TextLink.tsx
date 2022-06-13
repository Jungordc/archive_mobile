/** @format */

import React from "react";
import { Text } from "native-base";
import { InterfaceTextProps } from "native-base/src/components/primitives/Text/types";

const TextLink: React.FC<InterfaceTextProps> = (props) => {
    return (
        <Text color="primary.500" textDecorationLine="underline" {...props} />
    );
};

export default TextLink;
