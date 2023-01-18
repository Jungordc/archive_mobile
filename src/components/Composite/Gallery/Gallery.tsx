/** @format */

import React from "react";
import { View, FlatList } from "native-base";
import { observer } from "mobx-react-lite";
import { IImageAsset, InstGallery } from "./Model.Gallery";
import ImageItem from "./ImageItem";
import * as FileSystem from "expo-file-system";
import { humanFileSize } from "../../../utils/humaneReadable";

type GalleryProps = {
    numColumns?: number;
    data?: IImageAsset[];
};

const OFlatList = observer(FlatList);

const Gallery: React.FC<GalleryProps> = ({
    numColumns = 3,
    data = InstGallery.images.toJSON(),
    ...props
}) => {
    //
    const handlerSelect = (item: IImageAsset, index: number) => {};

    return (
        <View>
            <OFlatList
                data={data}
                onEndReachedThreshold={0.5}
                onEndReached={() => {}}
                numColumns={numColumns}
                keyExtractor={(i) => i.id}
                renderItem={({ item, index }) => (
                    <ImageItem
                        onPress={async () => {
                            // item.toogleSelect();
                            console.log("Selected");
                            InstGallery.toogleSelect(item, index);
                            // const info = await FileSystem.getInfoAsync(
                            //     item.uri
                            // );
                            // console.log(
                            //     JSON.stringify(info, null, 3),
                            //     "\n",
                            //     "file: ",
                            //     fileExtension(info.uri),
                            //     humanFileSize(info.size || 0)
                            // );
                            // console.log(JSON.stringify(item, null, 2));
                        }}
                        selected={item.selected}
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

const fileExtension = (filename: string) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)?.pop() : undefined;
};
