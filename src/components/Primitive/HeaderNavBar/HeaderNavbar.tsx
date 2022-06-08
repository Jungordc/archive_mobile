/** @format */

import React from "react";
import { HStack } from "native-base";
import { InterfaceHStackProps } from "native-base/src/components/primitives/Stack/HStack";

export type HeaderNavbarProps = {
    backButton?: React.ReactNode;
    rightHeader?: React.ReactNode;
} & InterfaceHStackProps;

const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
    backButton,
    rightHeader,
    ...props
}) => {
    return (
        <HStack
            p={2}
            alignItems="center"
            justifyContent="space-between"
            {...props}
        >
            {backButton}
            {rightHeader}
        </HStack>
    );
};

export default HeaderNavbar;
