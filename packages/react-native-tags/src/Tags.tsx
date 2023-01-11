/** @format */

import React from "react";
import {
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
    View,
    ViewStyle,
} from "react-native";
import Input, { InputProps, TextInputProps } from "./Input";
import styles from "./style";
import { converStyleArrayToObject, canAddTag, getLastTag } from "./utils";

type FuncT<T> = (tag: T, index: number) => void;
type VStyle = ViewStyle | ViewStyle[];

type StateType<T> = {
    tags: T;
    text: string;
};

export type TagsProps<T = string> = {
    initialTags: T[]; // initial tags
    initialText?: string; // initial text
    emptystringPlaceHolder?: string;
    maxNumberOfTags?: number; // maximun number of tags
    createTagOnString?: string[]; // value for creating tags, default is [","," "]
    createTagOnReturn?: boolean; // create tags on submit or on press key return
    readonly?: boolean; // mode edition or reading
    // function ...
    onAdd?(tag: T): void;
    onRemove?: FuncT<T>;
    onPress?: FuncT<T>;
    renderItem(value: {
        tag: T;
        index: number;
        onPress(): void;
        onDelete(): void;
    }): React.ReactNode;
    // Props styles
    containerStyles?: VStyle;
    inputContainerStyle?: VStyle;
    // props
    textInputProps?: TextInputProps;
    // component,
    /** default text input component */
    InputComponent?: React.FC<InputProps>;
};

const Tags: React.FC<TagsProps> = ({
    initialTags = [],
    initialText = "",
    emptystringPlaceHolder = " Taguer encore...",
    maxNumberOfTags = Number.POSITIVE_INFINITY,
    createTagOnString = [",", " "],
    createTagOnReturn = true,
    readonly = false,
    InputComponent = Input,
    textInputProps,
    onPress,
    onRemove,
    onAdd,
    renderItem,
    ...props
}) => {
    const [state, setState] = React.useState<StateType<typeof initialTags>>({
        tags: initialTags,
        text: initialText,
    });

    /** show the last tag */
    const showLastTag = React.useCallback(() => {
        setState((prevstate) => {
            const lastTag = getLastTag(prevstate.tags);
            return {
                tags: prevstate.tags.slice(0, -1),
                text: lastTag || emptystringPlaceHolder,
            };
        });
    }, []);

    /**
     * adding the tag in the list
     */
    const addTag = React.useCallback((tag: string) => {
        setState((prevState) => ({
            tags: [...prevState.tags, tag.trim()],
            text: emptystringPlaceHolder,
        }));
        onAdd?.(tag);
    }, []);

    const handlerPressTag = React.useCallback((tag: unknown, index: number) => {
        console.log("handlerPressTag", tag, index);
    }, []);

    const handlerDeleteTag = React.useCallback((tag: string, index: number) => {
        setState((prevState) => ({
            text: prevState.text,
            tags: prevState.tags.filter((tag, i) => i !== index),
        }));
        onRemove?.(tag, index);
    }, []);

    /** text input and event process */
    const onChangeText = React.useCallback(
        (text: string) => {
            if (text.length === 0) {
                // show and remove the last tag
                onRemove?.(getLastTag(state.tags), state.tags.length - 1);
                showLastTag();
            } else if (canAddTag(text, state.tags, createTagOnString)) {
                // adding a new tag
                addTag(text.slice(0, -1));
            } else {
                // you can complet ah ah ah....
                setState((prevState) => ({ ...prevState, text }));
            }
        },
        [state.tags]
    );

    /**
     * add tags on press key enter or on submiting a tag
     */
    const onSubmitEditing = React.useCallback(
        (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
            if (createTagOnReturn) {
                addTag(state.text);
            }
        },
        [state.text]
    );

    return (
        <View
            style={[
                styles.container,
                converStyleArrayToObject(props.containerStyles),
            ]}
        >
            {state.tags.map((tag, index) => {
                return renderItem({
                    tag,
                    index,
                    onDelete() {
                        handlerDeleteTag(tag, index);
                    },
                    onPress() {
                        handlerPressTag(tag, index);
                    },
                });
            })}
            {!readonly && maxNumberOfTags > state.tags.length && (
                <InputComponent
                    value={state.text}
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    inputContainerStyle={props.inputContainerStyle}
                    {...textInputProps}
                />
            )}
        </View>
    );
};

export default Tags;
