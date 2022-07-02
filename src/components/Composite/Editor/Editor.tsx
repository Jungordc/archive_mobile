/** @format */
import React from "react";
import { ScrollView } from "react-native";
import { Button } from "native-base/src/components/primitives/Button";
import { View } from "native-base/src/components/basic/View";
import Text from "native-base/src/components/primitives/Text";
import VStack from "native-base/src/components/primitives/Stack/VStack";

import ImageContainers from "../../../../packages/image-container-plus/ImageContainers";
import InputTitle from "../../Primitive/InputTitle/InputTitle";
import Icon from "../../Primitive/Icons/Icon";
import InputTags from "./InputTags";
import ProfileImageConnector from "../ProfileImages/ProfileImageConnector";

export type EditorDataType = {
    title: string;
    description: string;
    cover: string;
    tags: string[];
    docs: string[];
};

export type ControllerTypeProps<CType = any, T = EditorDataType> = {
    controller: CType;
    render: (value: {
        value: any;
        onChange(value: any): void;
    }) => React.ReactNode;
    name: keyof T;
};

export type EditorProps<T = { uri: string }> = {
    handlerEditingDocs?(): void;
    onPressImage?(image: T): void;
    controllerComponent: React.ComponentType<ControllerTypeProps>;
    controller: any;
};

const Editor: React.FC<EditorProps> = ({
    handlerEditingDocs,
    onPressImage,
    controller,
    controllerComponent: Controller,
    ...props
}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Controller
                name="cover"
                controller={controller}
                render={({ onChange, value }) => {
                    return (
                        <ProfileImageConnector
                            edit
                            showAvatar={false}
                            initialCover={value ? { uri: value } : undefined}
                            onChangeCover={({ uri }) => onChange(uri)}
                        />
                    );
                }}
            />
            <View flex={1}>
                <View mx={1}>
                    <Controller
                        controller={controller}
                        name="title"
                        render={({ onChange, value }) => (
                            <InputTitle
                                maxLength={75}
                                textInputProps={{
                                    placeholder: "Titre",
                                    multiline: true,
                                    value,
                                    onChangeText: onChange,
                                }}
                            />
                        )}
                    />
                </View>
                <View mx={1}>
                    <Controller
                        controller={controller}
                        name="description"
                        render={({ onChange, value }) => {
                            console.log("description: ", value);
                            return (
                                <InputTitle
                                    textInputProps={{
                                        placeholder: "Description",
                                        multiline: true,
                                        style: {
                                            fontSize: 16,
                                            color: "#626262",
                                        },
                                        value,
                                        onChangeText: onChange,
                                    }}
                                />
                            );
                        }}
                    />
                </View>
                <View flex={1}>
                    <Controller
                        controller={controller}
                        name="tags"
                        render={({ onChange, value }) => {
                            const newValue =
                                typeof value === "object"
                                    ? { ...value }
                                    : { value };
                            return (
                                <InputTags {...newValue} onChange={onChange} />
                            );
                        }}
                    />
                </View>
                <View m="4" ml="16">
                    <VStack space="3">
                        <Button
                            onPress={handlerEditingDocs}
                            variant="outline"
                            colorScheme="text"
                            rounded="full"
                            leftIcon={<Icon name="document-attach-outline" />}
                            _text={{
                                fontSize: "2xs",
                                ml: "1",
                            }}
                            _icon={{
                                size: "xs",
                            }}
                        >
                            Ajouter une document...
                        </Button>
                        <Controller
                            controller={controller}
                            name="docs"
                            render={({ value }) => (
                                <ImageContainers
                                    h="64"
                                    onPress={onPressImage}
                                    images={value?.map((i: string) => ({
                                        uri: i,
                                    }))}
                                />
                            )}
                        />

                        <Text
                            mt="5"
                            fontSize="2xs"
                            color="coolGray.400"
                            textAlign="justify"
                            lineHeight="2xl"
                        >
                            <Text fontWeight="bold">Note : </Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis tempora eligendi enim distinctio
                            unde eaque doloremque! Eum ipsum libero, id sequi
                            odit incidunt voluptates molestiae blanditiis
                            ratione sunt ullam quos.
                        </Text>
                    </VStack>
                </View>
            </View>
        </ScrollView>
    );
};

export default Editor;
