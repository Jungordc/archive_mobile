/** @format */

import { View, Text, HStack, VStack } from "native-base";
import React from "react";
import { ComonTypeContainerImage } from "../Types";
import Image from "./Image";

export type TreeImageContainerProps = {} & ComonTypeContainerImage;
const TreeImageContainer: React.FC<TreeImageContainerProps> = ({ images }) => {
    return (
        <HStack space={1} height={150} overflow="hidden" borderRadius="md">
            <Image />
            <VStack flex={1} space={1}>
                <Image />
                <Image />
            </VStack>
        </HStack>
    );
};

export default TreeImageContainer;
