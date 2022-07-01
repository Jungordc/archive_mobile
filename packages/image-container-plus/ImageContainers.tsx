/** @format */

import React from "react";
import { View } from "native-base/src/components/basic/View/View";
import TownImageContainer from "./components/TownImageContainer";
import TreeImageContainer from "./components/TreeImageConatainer";
import ForImageContainer from "./components/ForImageContainer";
import Image from "./components/Image";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { ComonTypeContainerImage } from "./Types";
import useGetAndSelectFirstImage from "./useGetAndSelectFirstImage";

export type ImageContainers = {} & InterfaceViewProps & ComonTypeContainerImage;

const ImageContainers: React.FC<ImageContainers> = ({ images, ...props }) => {
    const lenght = images?.length || 0;
    if (lenght >= 4) return <ForImageContainer images={images} {...props} />;
    if (lenght === 3) return <TreeImageContainer images={images} {...props} />;
    if (lenght === 2) return <TownImageContainer images={images} {...props} />;

    //
    const { onPressImage, firstImageSource } = useGetAndSelectFirstImage({
        images,
        onPress: props.onPress,
    });

    return (
        <View {...props}>
            <Image source={firstImageSource} onPress={onPressImage} />
        </View>
    );
};

export default ImageContainers;
