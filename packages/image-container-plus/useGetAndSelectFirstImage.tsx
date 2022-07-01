/** @format */

import React from "react";
import { getFirstImage } from "./utils/utils";
import { ComonTypeContainerImage } from "./Types";

export default function useGetAndSelectFirstImage({
    images,
    onPress,
}: ComonTypeContainerImage) {
    const firstImageSource = getFirstImage(images);
    const onPressImage = React.useCallback(() => {
        firstImageSource && onPress?.(firstImageSource);
    }, [firstImageSource]);

    return {
        firstImageSource,
        onPressImage,
    };
}
