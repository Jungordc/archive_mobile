/** @format */

import React from "react";
import { View, FlatList } from "native-base";
import { observer } from "mobx-react-lite";
import { useLoadImages } from "./hooks.Gallery";
import ImageItem from "./ImageItem";

type GalleryProps = {
    numColumns?: number;
    data: ReturnType<typeof useLoadImages>;
};

const OFlatList = observer(FlatList);

const Gallery: React.FC<GalleryProps> = ({
    numColumns = 3,
    data,
    ...props
}) => {
    return (
        <View>
            <OFlatList
                data={data}
                onEndReachedThreshold={0.5}
                onEndReached={() => {}}
                numColumns={numColumns}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => (
                    <ImageItem
                        alt={item.filename}
                        source={{
                            uri: item.uri,
                        }}
                    />
                )}
            />
        </View>
    );
};

export const OGallery = observer(Gallery);
export default Gallery;
