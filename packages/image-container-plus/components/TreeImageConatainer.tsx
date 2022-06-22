/** @format */

import React from "react";
import { HStack, VStack } from "native-base";
import { InterfaceHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import { ComonTypeContainerImage } from "../Types";
import Image from "./Image";

export type TreeImageContainerProps = {} & InterfaceHStackProps &
    ComonTypeContainerImage;
const TreeImageContainer: React.FC<TreeImageContainerProps> = ({
    images,
    ...props
}) => {
    return (
        <HStack space={1} overflow="hidden" borderRadius="md" {...props}>
            <Image />
            <VStack flex={1} space={1}>
                <Image />
                <Image />
            </VStack>
        </HStack>
    );
};

export default TreeImageContainer;
