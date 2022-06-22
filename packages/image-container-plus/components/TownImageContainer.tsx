/** @format */

import { View, Text, HStack } from "native-base";
import { InterfaceHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import React from "react";
import { ComonTypeContainerImage } from "../Types";
import Image from "./Image";

export type TownImageContainerProps = {} & InterfaceHStackProps &
    ComonTypeContainerImage;
const TownImageContainer: React.FC<TownImageContainerProps> = ({
    images,
    ...props
}) => {
    return (
        <HStack space={2} overflow="hidden" borderRadius="md" {...props}>
            <Image />
            <Image />
        </HStack>
    );
};

export default TownImageContainer;
