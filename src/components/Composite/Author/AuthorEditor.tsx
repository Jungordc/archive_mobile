/** @format */

import React from "react";
import { View } from "native-base/src/components/basic/View";
import { VStack } from "native-base/src/components/primitives";
import InputTitle from "../../Primitive/InputTitle/InputTitle";
import ProfileImageConnector from "../ProfileImages/ProfileImageConnector";

export type AuthorDataType = {
    name: string;
    description: string;
    cover: string | null;
    avatar: string | null;
    website: string | null;
    domaine: string | null;
};

export type ControllerTypeProps<CType = any, T = AuthorDataType> = {
    controller: CType;
    name: keyof T;
    render: (value: {
        value: any;
        onChange(value: any): void;
    }) => React.ReactNode;
};

type AuthorEditorProps = {
    controllerComponent: React.FC<ControllerTypeProps>;
    controller: any;
};

const AuthorEditor: React.FC<AuthorEditorProps> = ({
    controller,
    controllerComponent: Controller,
}) => {
    const handlerChangeAvatar = React.useCallback(
        (func?: (uri: string) => void) => {
            return (image: { uri: string }) => func?.(image.uri);
        },
        []
    );
    const handlerChangeCover = React.useCallback(
        (func?: (uri: string) => void) => {
            return (image: { uri: string }) => func?.(image.uri);
        },
        []
    );
    return (
        <VStack>
            <Controller
                controller={controller}
                name="cover"
                render={({ value: cover, onChange: onChangeCover }) => (
                    <Controller
                        controller={controller}
                        name="avatar"
                        render={({
                            value: avatar,
                            onChange: onChangeAvatar,
                        }) => (
                            <ProfileImageConnector
                                edit
                                showAvatar
                                initialAvatar={avatar}
                                initialCover={cover}
                                onChangeAvatar={handlerChangeAvatar(
                                    onChangeAvatar
                                )}
                                onChangeCover={handlerChangeCover(
                                    onChangeCover
                                )}
                            />
                        )}
                    />
                )}
            />

            <View p={2} my={50}>
                <VStack>
                    <Controller
                        name="name"
                        controller={controller}
                        render={() => (
                            <InputTitle
                                maxLength={50}
                                textInputProps={{
                                    placeholder: "Nom",
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="description"
                        controller={controller}
                        render={({ onChange, value }) => (
                            <InputTitle
                                maxLength={150}
                                textInputProps={{
                                    value,
                                    onChangeText: onChange,
                                    placeholder: "Description",
                                    multiline: true,
                                    style: {
                                        fontSize: 20,
                                        fontWeight: "400",
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="domaine"
                        controller={controller}
                        render={({ onChange, value }) => (
                            <InputTitle
                                maxLength={50}
                                textInputProps={{
                                    value,
                                    onChangeText: onChange,
                                    placeholder: "Domaine",
                                    style: {
                                        fontSize: 15,
                                        fontWeight: "400",
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="website"
                        controller={controller}
                        render={({ onChange, value }) => (
                            <InputTitle
                                maxLength={50}
                                textInputProps={{
                                    value,
                                    onChangeText: onChange,
                                    placeholder: "Site Web",
                                    style: {
                                        fontSize: 15,
                                        fontWeight: "400",
                                    },
                                }}
                            />
                        )}
                    />
                </VStack>
            </View>
        </VStack>
    );
};

AuthorEditor.displayName = "AuthorEditor";
export default AuthorEditor;
