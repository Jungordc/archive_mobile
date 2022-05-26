/** @format */

import { View, Text } from "react-native";
import React from "react";
import TownImageContainer from "./components/TownImageContainer";
import TreeImageContainer from "./components/TreeImageConatainer";
import ForImageContainer from "./components/ForImageContainer";
import Image from "./components/Image";
import { ComonTypeContainerImage } from "./Types";

export type ImageContainers = {} & ComonTypeContainerImage;

const ImageContainers: React.FC<ImageContainers> = ({ images }) => {
    const lenght = images?.length || 0;
    if (lenght >= 4) return <ForImageContainer images={images} />;
    if (lenght === 3) return <TreeImageContainer images={images} />;
    if (lenght === 2) return <TownImageContainer images={images} />;
    return (
        <View>
            <Image />
        </View>
    );
};

export default ImageContainers;
