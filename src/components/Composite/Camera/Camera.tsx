/** @format */

import { Camera as EXPOCamera, CameraType, FlashMode } from "expo-camera";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "native-base";

import { InstanceCameraState } from "./Model.Camera";
import { getNextFlashMode } from "./Utils.Camera";

import { ActionBottomCameraObserved } from "./ActionBottomCamera";
import { OImageCamera } from "./ImageCamera";

type CameraProps = {
    flashMode?: FlashMode;
};

const Camera: React.FC<CameraProps> = ({
    flashMode = FlashMode.off,
    ...props
}) => {
    const cameraRef = React.useRef<EXPOCamera>(null);
    const [flashModeState, setflashMode] = React.useState<FlashMode>(flashMode);

    const [permission, requestPermission] = EXPOCamera.useCameraPermissions();

    const handlerFlashMode = React.useCallback(() => {
        setflashMode(getNextFlashMode);
    }, []);

    const handlerCapturePicture = React.useCallback(async () => {
        cameraRef.current?.takePictureAsync().then((res) => {
            InstanceCameraState.capture(res.uri);
            // MediaLibrary.saveToLibraryAsync(res.uri);
        });
        // cameraRef.current?.takePictureAsync().then((res) => {
        //     MediaLibrary.saveToLibraryAsync(res.uri);
        //     console.log(JSON.stringify(res, null, 2));
        // });
    }, []);

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View justifyContent="center" flex={1}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    if (InstanceCameraState.image) {
        return (
            <OImageCamera
                image={InstanceCameraState.image}
                onSaveAndContinue={InstanceCameraState.valideCurrentImage}
                onCancel={InstanceCameraState.cancelImage}
                onSave={() => {}}
            />
        );
    }

    return (
        <View position="relative" flex={1}>
            <EXPOCamera
                ref={cameraRef}
                flashMode={flashModeState}
                style={{
                    flex: 1,
                }}
            >
                {InstanceCameraState.imagesValidated.length > 0 && (
                    <Text position="absolute" top={0} zIndex={2}>
                        {InstanceCameraState.imagesValidated.length}
                    </Text>
                )}
                <ActionBottomCameraObserved
                    flashMode={flashMode || "off"}
                    onChangeFlashMode={handlerFlashMode}
                    onTakePicture={handlerCapturePicture}
                />
            </EXPOCamera>
        </View>
    );
};

export const CameraObserved = observer(Camera);
export default Camera;
