/** @format */

import { View, Text, HStack } from "native-base";
import React from "react";
import { ComonTypeContainerImage } from "../Types";
import Image from "./Image";

export type TownImageContainerProps = {} & ComonTypeContainerImage;
const TownImageContainer: React.FC<TownImageContainerProps> = ({ images }) => {
    return (
        <HStack space={2} height={150} overflow="hidden" borderRadius="md">
            <Image />
            <Image />
        </HStack>
    );
};

export default TownImageContainer;
