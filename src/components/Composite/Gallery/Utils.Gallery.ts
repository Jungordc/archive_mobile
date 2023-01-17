/** @format */

import * as MediaLibrary from "expo-media-library";

type PageInfoImage = MediaLibrary.PagedInfo<MediaLibrary.Asset>;
type PermissionResponse = MediaLibrary.PermissionResponse;
type CallCackTypePermission = (value: PermissionResponse) => void;
type TInitLoadValue =
    | { loaded: true; data: PageInfoImage }
    | { loaded: false; code: string };

/**
 *
 * @param callback
 */

export async function requestPermistion(callback: CallCackTypePermission) {
    const permission = await MediaLibrary.requestPermissionsAsync();
    callback(permission);
}

/**
 *
 * @param callback
 */

export async function canLoad(callback: CallCackTypePermission) {
    const permission = await MediaLibrary.getPermissionsAsync();
    callback(permission);
}

/**
 * get images
 * @param callback
 * @param assetsOptions
 */

export async function getAssyncImages(
    callback: (value: PageInfoImage) => void,
    assetsOptions?: MediaLibrary.AssetsOptions
) {
    const valueAssets = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.photo,
        sortBy: "creationTime",
        first: 21,
        ...assetsOptions,
    });
    callback(valueAssets);
}

/**
 *
 * @param lastImage MediaLibrary.AssetRef
 * the image to fetch after
 * @param callback (MediaLibrary.Asset)
 * @returns Void
 */
export function onEndReached(
    lastImage: MediaLibrary.AssetRef,
    callback?: (value: PageInfoImage) => void
) {
    return async (info: { distanceFromEnd: number }) => {
        const imageId =
            typeof lastImage === "string" ? lastImage : lastImage.id;
        console.log("onEndReachedThreshold", info.distanceFromEnd, imageId);
    };
}

/**
 * Init loader of image
 */

export async function initLoadImage(callback: (value: TInitLoadValue) => void) {
    canLoad((permission) => {
        if (permission.granted) {
            getAssyncImages((value) => callback({ loaded: true, data: value }));
        } else if (permission.canAskAgain) {
            requestPermistion((value) => {
                if (value.granted) {
                    getAssyncImages((value) =>
                        callback({ loaded: true, data: value })
                    );
                } else {
                    initLoadImage(callback);
                }
            });
        } else {
            callback({ loaded: false, code: "permission" });
        }
    });
}
