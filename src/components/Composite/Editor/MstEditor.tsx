/** @format */

import React from "react";
import { View, Text, ScrollView, VStack, Button, HStack } from "native-base";
import { observer } from "mobx-react-lite";
import Icon from "../../Primitive/Icons/Icon";
import InputTitle from "../../Primitive/InputTitle/InputTitle";
import InputTags from "./InputTags";
import EditBottomAction from "./EditBottomAction";
import { inputApdatorProcess } from "./Utils";

import {
    ArchiveEditModelInstance,
    ArchiveEditForm,
} from "../../../services/forms/editions";
import CoverItem from "./CoverItem";
import DocItem, { DocItemType } from "./DocItem";

export type EditorRefType = {
    handlerSubmit?(): void;
};

type MstEditorProps = {
    onSubmit(value: any): void;
};

/** Docs cover input */
const OInputTitle = observer(InputTitle);
const OInputTags = observer(InputTags);
const OCoverItem = observer(CoverItem);

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
            <View flex={1} position="relative">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack flex={1}>
                        <OInputTitle
                            maxLength={75}
                            textInputProps={{
                                placeholder: "Titre",
                                multiline: true,
                                ...inputApdatorProcess(titleField.inputProps),
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
                                ...inputApdatorProcess(
                                    descriptionField.inputProps
                                ),
                            }}
                        />
                        <OInputTags
                            maxTags={6}
                            placeholder="Aa"
                            value={tags.map((i) => i.field("name").value)}
                            onChange={ArchiveEditModelInstance.addTag}
                            onRemove={ArchiveEditModelInstance.removeTag}
                        />
                        <VStack ml="16" flex={1} mb="16" space="2">
                            <OCoverItem />
                            <VStack mx="2" space="2">
                                <DocItem
                                    name="lorem.pdf"
                                    description="lorem daa ljjd hdhsfjho iiejio sjhkj"
                                    infoText={["6 pages", "2.34 ko", "pdf"]}
                                />
                                <DocItem
                                    name="image Yeti.jpg"
                                    type={DocItemType.IMAGE}
                                    source={{
                                        uri: "https://www.bing.com/th?id=OIP.-HEOxAoVM-1iCJjOJaa8MQHaEK&w=168&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                                    }}
                                />
                            </VStack>
                            <View h="32" bg="red.400" />
                        </VStack>
                    </VStack>
                </ScrollView>
                <View
                    position="absolute"
                    bg="white"
                    bottom="0"
                    left="0"
                    right="0"
                    py="2"
                >
                    <EditBottomAction />
                </View>
            </View>
        );
    }
);

export default observer(MstEditor);
