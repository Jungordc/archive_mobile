/** @format */

import React from "react";
import { SharedElement } from "react-navigation-shared-element";
import Image, {
    IImageProps,
} from "native-base/src/components/primitives/Image";

type ImageShareElementProps = {
    id: string;
    source?: IImageProps["source"];
    imageProps?: IImageProps;
};

const ImageShareElement: React.FC<ImageShareElementProps> = ({
    id,
    imageProps,
    source,
    ...props
}) => {
    return (
        <SharedElement
            style={{ flex: 1, height: "100%", width: "100%" }}
            id={id}
            {...props}
        >
            <Image
                resizeMode="contain"
                alt="Images"
                flex={1}
                borderRadius="none"
                source={source}
                {...imageProps}
            />
        </SharedElement>
    );
};

export default ImageShareElement;
