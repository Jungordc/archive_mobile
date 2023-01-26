/** @format */

import { types, getEnv, cast } from "mobx-state-tree";
import { CameraType, FlashMode } from "expo-camera";
import { getNextFlashMode, getNextCameraType } from "./Utils.Camera";

type InjectDepType = {
    getNextFlashMode: (flash: FlashMode) => FlashMode;
    getNextCameraType: (camera: CameraType) => CameraType;
};

const _CameraType = types.union(types.literal("front"), types.literal("back"));

const _FlashMode = types.union(
    types.literal("on"),
    types.literal("off"),
    types.literal("auto"),
    types.literal("torch")
);

export const ModelCameraState = types
    .model("ModelCameraState", {
        cameraType: _CameraType,
        flashMode: _FlashMode,
        image: types.maybeNull(types.string),
        imagesValidated: types.array(types.string),
    })
    .actions((self) => {
        const envInjection = getEnv<InjectDepType>(self);
        const cancelImage = () => (self.image = null);

        const changeCameraType = () =>
            (self.cameraType =
                envInjection?.getNextCameraType?.(self.cameraType as any) ||
                self.cameraType);

        const changeFlashMode = () =>
            (self.flashMode =
                envInjection?.getNextFlashMode?.(self.flashMode as any) ||
                self.flashMode);

        const capture = (image: string) => (self.image = image);
        const valideCurrentImage = () => {
            self.image && self.imagesValidated.push(self.image);
            cancelImage();
        };

        const reset = () => {
            cancelImage();
            self.imagesValidated = cast([]);
        };
        return {
            changeCameraType,
            changeFlashMode,
            capture,
            reset,
            valideCurrentImage,
            cancelImage,
        };
    });

export const InstanceCameraState = ModelCameraState.create(
    {
        cameraType: "back",
        flashMode: "off",
    },
    {
        getNextFlashMode,
        getNextCameraType,
    }
);
