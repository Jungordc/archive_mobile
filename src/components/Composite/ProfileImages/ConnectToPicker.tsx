/** @format */

import * as React from "react";
import * as ImagePicker from "expo-image-picker";

type TypeImage = {
    uri: string;
};

type FuncImageSelectorType = (callback?: (image: TypeImage) => void) => void;

type ConnectToPickerProps = {
    onSelectImage?(image: TypeImage): void;
};

const SelectorPickerImage: FuncImageSelectorType = async (callBack) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    if (!result.cancelled) {
        callBack?.({
            uri: result.uri,
        });
    }
};

export default function ConnectToPicker<T>(
    Components: React.ComponentType<T>,
    selector: FuncImageSelectorType = SelectorPickerImage
) {
    return ({ onSelectImage, ...props }: T & ConnectToPickerProps) => {
        const onPress = React.useCallback(
            async () => selector(onSelectImage),
            []
        );
        return <Components {...props} onPress={onPress} />;
    };
}
