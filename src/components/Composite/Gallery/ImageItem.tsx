/** @format */

import React from "react";
import { View, Image, IImageProps } from "native-base";
import { observer } from "mobx-react-lite";

type ImageItemProps = {} & IImageProps;

const ImageItem: React.FC<ImageItemProps> = ({ ...props }) => {
    return (
        <View m="0.5" flex={1}>
            <Image rounded="lg" height="32" width="32" {...props} />
        </View>
    );
};

export const OImageItem = observer(ImageItem);
export default ImageItem;
