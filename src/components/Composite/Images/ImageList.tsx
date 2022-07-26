/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
import Image from "native-base/src/components/primitives/Image";

import ImageFlatList, {
    ImageFlatListProps,
} from "../../../../packages/image-container-plus/components/ImageFlatList";
import { SharedElement } from "react-navigation-shared-element";

type ImageListProps<T> = {
    onImagePress(e: T): void;
    getShareElementId(e: T): string;
} & Omit<ImageFlatListProps<T>, "render">;

export default function ImageList<T extends { uri: string }>({
    data = [],
    onImagePress,
    getShareElementId,
    ...props
}: ImageListProps<T>) {
    const onPress = React.useCallback((img) => {
        return () => {
            onImagePress(img);
        };
    }, []);

    return (
        <ImageFlatList
            data={data}
            {...props}
            render={(img) => {
                return (
                    <TouchableOpacity
                        onPress={onPress(img)}
                        activeOpacity={0.7}
                        style={{
                            flex: 1,
                        }}
                    >
                        <SharedElement
                            id={getShareElementId(img)}
                            style={{ flex: 1 }}
                        >
                            <Image
                                flex={1}
                                alt="docs"
                                source={{
                                    uri: img.uri,
                                }}
                            />
                        </SharedElement>
                    </TouchableOpacity>
                );
            }}
        />
    );
}
