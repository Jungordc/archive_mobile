/** @format */

import { Camera as EXPOCamera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

const nextFlashMode = {
    [FlashMode.off]: FlashMode.on,
    [FlashMode.on]: FlashMode.auto,
    [FlashMode.auto]: FlashMode.torch,
    [FlashMode.torch]: FlashMode.off,
};

/**
 *
 * @param currentFlastMode
 * @returns
 */

export const getNextFlashMode = (currentFlastMode: FlashMode): FlashMode =>
    nextFlashMode[currentFlastMode] || FlashMode.off;

/**
 *
 * @param camera
 * @returns
 */
export const getNextCameraType = (camera: CameraType) =>
    camera === CameraType.back ? CameraType.front : CameraType.back;

/**
 *
 * @param currentFlastMode
 * @returns
 */
export const getIconFlashMode = (currentFlastMode: FlashMode) =>
    currentFlastMode === FlashMode.off ? "md-flash-off" : "md-flash";

/**
 *
 * @param photoUrl
 * @returns
 */
export const downloadPhoto = async (photoUrl: string) => {
    const fileName = photoUrl.replace(/^.*[\\\/]/, "");
    let imageFullPathInLocalStorage = FileSystem.documentDirectory + fileName;
    return new Promise(async (resolve) => {
        FileSystem.downloadAsync(photoUrl, imageFullPathInLocalStorage).then(
            async ({ uri }) => {
                MediaLibrary.saveToLibraryAsync(imageFullPathInLocalStorage);
                return resolve(imageFullPathInLocalStorage);
            }
        );
    });
};
