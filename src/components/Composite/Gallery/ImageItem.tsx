/** @format */

import React from "react";
import { Image, IImageProps, Pressable } from "native-base";
import { observer } from "mobx-react-lite";

type ImageItemProps = {
    onPress?(): void;
} & IImageProps;

const ImageItem: React.FC<ImageItemProps> = ({ onPress, ...props }) => {
    return (
        <Pressable m="0.5" flex={1} onPress={onPress}>
            <Image rounded="lg" height="32" width="32" {...props} />
        </Pressable>
    );
};

export const OImageItem = observer(ImageItem);
export default ImageItem;
