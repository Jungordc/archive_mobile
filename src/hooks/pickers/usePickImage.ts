/** @format */
import * as React from "react";
import * as ImagePicker from "expo-image-picker";

export type TypeImage = {
    uri: string;
};

export type pickerImageType = {
    initialSource?: TypeImage;
    onSelectImage?(image: TypeImage): void;
};

export default function usePickImage(params?: pickerImageType) {
    const [source, setSource] = React.useState<TypeImage | undefined>(
        params?.initialSource
    );

    const onpenSelectorImage = React.useCallback(async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            const newSource = {
                uri: result.uri,
            };
            setSource(newSource);
            params?.onSelectImage?.(newSource);
        }
    }, []);

    return {
        source,
        onpenSelectorImage,
    };
}
