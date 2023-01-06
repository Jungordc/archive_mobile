/** @format */
import * as React from "react";
import * as ImagePicker from "expo-image-picker";

export type TypeImage = {
    uri: string;
};

export type pickerImageType = {
    initialSource?: TypeImage;
    onSelectImage?(image: TypeImage): void;
    aspect?: [number, number];
};

export function connetorPickImage<T>(Component: React.ComponentType<T>) {
    return (
        props: T & { image?: TypeImage; onChange?(image: TypeImage): void }
    ) => {
        const { onpenSelectorImage, source } = usePickImage({
            initialSource: props.image,
            onSelectImage: props.onChange,
        });
        return <Component />;
    };
}

/**
 * **Image launcher function**
 * @param param0
 * @returns
 */
async function launchImagePicker<T extends ImagePicker.ImagePickerOptions>({
    quality = 1,
    mediaTypes = ImagePicker.MediaTypeOptions.Images,
    aspect = [4, 3],
    allowsEditing = true,
    ...params
}: T) {
    return await ImagePicker.launchImageLibraryAsync({
        quality,
        mediaTypes,
        aspect,
        allowsEditing,
        ...params,
    });
}

/**
 * usePickImage hooks
 * @param param0
 * @returns
 */
export default function usePickImage({
    aspect = [4, 3],
    initialSource,
    onSelectImage,
}: pickerImageType) {
    const [source, setSource] = React.useState<TypeImage | undefined>(
        initialSource
    );

    const onpenSelectorImage = React.useCallback(async () => {
        let result = await launchImagePicker({ aspect });
        if (!result.cancelled) {
            console.log(result);
            // const newSource = {
            //     uri: result.uri,
            // };
            // setSource(newSource);
            // onSelectImage?.(newSource);
        }
    }, []);

    return {
        source,
        onpenSelectorImage,
    };
}
