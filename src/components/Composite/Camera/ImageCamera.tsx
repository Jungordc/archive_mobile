/** @format */

import React from "react";
import { View, Text, Image, VStack, HStack, Button } from "native-base";
import { observer } from "mobx-react-lite";

type ImageCameraProps = {
    image: string;
    onCancel?(): void;
    onSave?(): void;
    onSaveAndContinue?(): void;
};

const ImageCamera: React.FC<ImageCameraProps> = ({
    image,
    onCancel,
    onSave,
    onSaveAndContinue,
    ...props
}) => {
    return (
        <View flex={1}>
            <Image alt="Images" flex={1} source={{ uri: image }} />
            <View
                zIndex={2}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                alignItems="center"
                justifyContent="center"
                flex={1}
            >
                <View
                    // bg="red.400"
                    h="40"
                    w="full"
                    alignItems="center"
                    justifyContent="center"
                >
                    <VStack space="3" w="full" p="5" flex={1}>
                        <HStack
                            space="3"
                            justifyContent="space-between"
                            w="full"
                            flex={1}
                        >
                            <Button
                                variant="outline"
                                rounded="full"
                                flex={1}
                                onPress={onCancel}
                            >
                                Annuler
                            </Button>
                            <Button rounded="full" flex={1} onPress={onSave}>
                                Enregister
                            </Button>
                        </HStack>
                        <Button
                            rounded="full"
                            flex={1}
                            onPress={onSaveAndContinue}
                        >
                            Enregistrer et Prendre un autre
                        </Button>
                    </VStack>
                </View>
            </View>
        </View>
    );
};

export const OImageCamera = observer(ImageCamera);
export default ImageCamera;
