/** @format */
import React from "react";
import { ScrollView } from "react-native";
import { Button } from "native-base/src/components/primitives/Button";
import { View } from "native-base/src/components/basic/View";
import Text from "native-base/src/components/primitives/Text";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import InputTitle from "../../Primitive/InputTitle/InputTitle";
import Icon from "../../Primitive/Icons/Icon";
import InputTags from "./InputTags";
import ProfileImageConnector from "../ProfileImages/ProfileImageConnector";
import ImageList from "../Images/ImageList";

type MediaType = {
    isNew?: boolean;
    uri: string;
    type?: string;
};

export type EditorDataType = {
    title: string;
    description: string;
    cover: MediaType;
    tags: { name: string }[];
    docs: MediaType[];
};

export type ControllerTypeProps<CType = any, T = EditorDataType> = {
    controller: CType;
    /**
     * S: Simple
     * Sub: Subform
     * Arr:Array form
     */
    type: "S" | "Sub" | "Arr";
    name: keyof T;
    render: (value: {
        value: any;
        onChange(value: any): void;
    }) => React.ReactNode;
};

export type EditorProps<T = { uri: string }> = {
    handlerEditingDocs?(): void;
    handlerDetailViewDocs?(item: any): void;
    onPressImage?(image: T): void;
    controllerComponent: React.FC<ControllerTypeProps>;
    controller: any;
};

const Editor: React.FC<EditorProps> = ({
    handlerEditingDocs,
    handlerDetailViewDocs,
    onPressImage,
    controller,
    controllerComponent: Controller,
    ...props
}) => {
    const handlerViewImgDocs = React.useCallback((item: any) => {
        handlerDetailViewDocs?.(item);
    }, []);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Controller
                type="S"
                name="cover"
                controller={controller}
                render={({ onChange, value }) => {
                    return (
                        <ProfileImageConnector
                            edit
                            showAvatar={false}
                            initialCover={
                                value ? { uri: value.uri } : undefined
                            }
                            onChangeCover={({ uri }) => onChange(uri)}
                        />
                    );
                }}
            />
            <View flex={1}>
                <View mx={1}>
                    <Controller
                        type="S"
                        name="title"
                        controller={controller}
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
                        type="S"
                        name="description"
                        controller={controller}
                        render={({ onChange, value }) => {
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
                        type="Arr"
                        name="tags"
                        controller={controller}
                        render={({ onChange, value }) => {
                            const newValue = coverToObject(value);
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
                            type="Arr"
                            name="docs"
                            controller={controller}
                            render={({ value }) => {
                                const images: any = parseToDataImageUrl(value);
                                return (
                                    <ImageList
                                        data={images}
                                        onImagePress={handlerViewImgDocs}
                                        getShareElementId={(e) => ""}
                                    />
                                );
                            }}
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

function coverToObject<T>(value: T) {
    return typeof value === "object" ? { ...value } : { value };
}

function parseToDataImageUrl<T>(value: T[]) {
    return value.map((i) => ({
        uri: i,
    }));
}
