/** @format */

import React from "react";
import { HStack, VStack } from "native-base";
import { InterfaceHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import { ComonTypeContainerImage } from "../Types";
import Image from "./Image";
import useGetAndSelectFirstImage from "../useGetAndSelectFirstImage";

export type TreeImageContainerProps = {} & InterfaceHStackProps &
    ComonTypeContainerImage;
const TreeImageContainer: React.FC<TreeImageContainerProps> = ({
    images,
    ...props
}) => {
    const { onPressImage, firstImageSource } = useGetAndSelectFirstImage({
        images,
        onPress: props.onPress,
    });
    return (
        <HStack space={1} overflow="hidden" borderRadius="md" {...props}>
            <Image source={firstImageSource} onPress={onPressImage} />
            <VStack flex={1} space={1}>
                {images?.slice(1, 3).map((image, index) => (
                    <Image
                        key={index}
                        source={image}
                        onPress={() => props.onPress?.(image)}
                    />
                ))}
            </VStack>
        </HStack>
    );
};

export default TreeImageContainer;
