/** @format */

import React from "react";
import { View, Text, FlatList } from "native-base";
import * as MediaLibrary from "expo-media-library";
import GallerieImageItem from "./GallerieImageItem";

type GallerieProps = {};
type PageInfoImage = MediaLibrary.PagedInfo<MediaLibrary.Asset>;

async function getAssyncImages({
    assetsOptions,
    callback,
}: {
    assetsOptions?: MediaLibrary.AssetsOptions;
    callback?: (value: PageInfoImage) => void;
}) {
    const valueAssets = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.photo,
        sortBy: "creationTime",
        first: 21,
        ...assetsOptions,
    });
    callback?.(valueAssets);
}

const Gallerie: React.FC<GallerieProps> = ({ ...props }) => {
    const [images, setImages] = React.useState<MediaLibrary.Asset[]>([]);

    const requestPermition = React.useCallback(async () => {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            loadImages();
        }
    }, []);

    const loadMoreImages = React.useCallback(
        (lastImage: MediaLibrary.Asset) => {
            getAssyncImages({
                assetsOptions: {
                    after: lastImage.id,
                },
                callback(value) {
                    console.log("LoadMore", JSON.stringify(value, null, 4));
                    // setImages(assets);
                },
            });
        },
        []
    );

    const loadImages = React.useCallback(async () => {
        const permission = await MediaLibrary.getPermissionsAsync();
        if (permission.granted) {
            getAssyncImages({
                callback({ assets, ...dataRest }) {
                    setImages(assets);
                    console.log(
                        "loadImages",
                        JSON.stringify(dataRest, null, 4)
                    );
                },
            });
            // const { assets, ...dataRest } = await MediaLibrary.getAssetsAsync({
            //     mediaType: MediaLibrary.MediaType.photo,
            //     sortBy: "creationTime",
            // });
            // setImages(assets);
            // console.log("loadImages", JSON.stringify(dataRest, null, 4));
        } else {
            requestPermition();
        }
    }, []);

    React.useEffect(() => {
        loadImages();
    }, []);

    return (
        <View>
            <Text>Hello World from Gallerie</Text>
            <FlatList
                onEndReachedThreshold={0.5}
                onEndReached={async ({ distanceFromEnd }) => {
                    const last = images[images.length - 1];
                    console.log(
                        "onEndReachedThreshold",
                        distanceFromEnd,
                        last.id
                    );

                    loadMoreImages(last);
                    const d = await MediaLibrary.getAssetInfoAsync(last);
                    console.log("Info", JSON.stringify(d, null, 4));
                }}
                numColumns={3}
                data={images}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => <GallerieImageItem asset={item} />}
            />
        </View>
    );
};

export default Gallerie;
