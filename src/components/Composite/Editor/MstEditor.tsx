/** @format */

import React from "react";
import { View, Text, ScrollView, VStack, Button, HStack } from "native-base";
import { observer } from "mobx-react-lite";
import Icon from "../../Primitive/Icons/Icon";
import ProfileImageConnector from "../ProfileImages/ProfileImageConnector";
import InputTitle from "../../Primitive/InputTitle/InputTitle";
import InputTags from "./InputTags";

import {
    ArchiveEditModelInstance,
    ArchiveEditForm,
} from "../../../services/forms/editions";

export type EditorRefType = {
    handlerSubmit?(): void;
};

type MstEditorProps = {
    onSubmit(value: any): void;
};

/** Docs cover input */
const DocsCover = observer(ProfileImageConnector);
const OInputTitle = observer(InputTitle);
const OInputTags = observer(InputTags);

/**
 * <
    EditorRefType,
    {
        onSubmit?(data: any): void;
    }
>
 */
const MstEditor = React.forwardRef<EditorRefType, MstEditorProps>(
    ({ onSubmit }, ref) => {
        const state = ArchiveEditForm.state(ArchiveEditModelInstance);
        const cover = state.subForm("cover");
        const tagsField = state.repeatingForm("tags");
        const titleField = state.field("title");
        const descriptionField = state.field("description");

        const tags = ArchiveEditModelInstance.tags.map((_, index) =>
            tagsField.index(index)
        );

        // callback on submit
        const handlerSubmit = React.useCallback(() => {
            const values: any = state.value;
            onSubmit?.(values?.toJSON());
        }, []);

        React.useImperativeHandle(ref, () => ({
            handlerSubmit,
        }));
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <DocsCover
                    edit
                    showAvatar={false}
                    initialCover={{
                        uri: cover.field("uri").value,
                    }}
                />
                <VStack flex={1}>
                    <OInputTitle
                        maxLength={75}
                        textInputProps={{
                            placeholder: "Titre",
                            multiline: true,
                            ...processor(titleField.inputProps),
                        }}
                    />
                    <OInputTitle
                        textInputProps={{
                            placeholder: "Description",
                            multiline: true,
                            style: {
                                fontSize: 16,
                                color: "#626262",
                            },
                            ...processor(descriptionField.inputProps),
                        }}
                    />
                    <OInputTags
                        maxTags={6}
                        value={tags.map((i) => i.field("name").value)}
                        placeholder="Aa"
                        onChange={ArchiveEditModelInstance.addTag}
                        onRemove={ArchiveEditModelInstance.removeTag}
                    />
                </VStack>
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        <HStack space="3">
                            <Button
                                variant="outline"
                                colorScheme="text"
                                rounded="full"
                                w="64"
                                leftIcon={
                                    <Icon name="document-attach-outline" />
                                }
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
                            <Button
                                variant="outline"
                                colorScheme="text"
                                rounded="full"
                                leftIcon={<Icon name="images-outline" />}
                                _text={{
                                    fontSize: "2xs",
                                    ml: "1",
                                }}
                                _icon={{
                                    size: "xs",
                                }}
                            >
                                Une photo
                            </Button>
                        </HStack>
                    </ScrollView>
                </View>
                <View flex={1} m="4" ml="16">
                    <VStack flex={1} space="3">
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
            </ScrollView>
        );
    }
);

export default observer(MstEditor);

function processor(inputProps: any) {
    return {
        value: inputProps?.value,
        onChangeText: (value: string) => {
            inputProps.onChange({ target: { value } });
        },
    };
}
