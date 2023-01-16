/** @format */

import React from "react";
import { View, Image } from "native-base";
import * as MediaLibrary from "expo-media-library";

type GallerieImageItemProps = {
    asset: MediaLibrary.Asset;
};

const GallerieImageItem: React.FC<GallerieImageItemProps> = ({
    asset,
    ...props
}) => {
    return (
        <View m="1" flex={1}>
            <Image
                rounded="lg"
                alt={asset.filename}
                height="32"
                width="32"
                source={{
                    uri: asset.uri,
                }}
            />
        </View>
    );
};

export default GallerieImageItem;
