/** @format */

import * as React from "react";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { onEndReached, initLoadImage } from "./Utils.Gallery";

import { InstGallery } from "./Model.Gallery";

export function useLoadImages(deps: any[] = []) {
    React.useEffect(() => {
        console.log("initLoadImage......");
        initLoadImage((value) => {
            console.log("useLoadImages", value);
            if (value.loaded) {
                InstGallery.initImages(value.data);
            }
        });
    }, deps);

    return InstGallery.images;
}
