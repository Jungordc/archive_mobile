/** @format */

import {
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import { View } from "native-base/src/components/basic/View";
import Heading from "native-base/src/components/primitives/Heading";
import Text from "native-base/src/components/primitives/Text";
import React from "react";
import { IHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import InputTitleUtils from "./InputTitleUtils";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "native-base/src/components/primitives/Icon/Icon";

export type InputTitleProps = {
    textInputProps?: TextInputProps;
} & IHStackProps;

const InputTitle: React.FC<InputTitleProps> = ({
    textInputProps,
    ...props
}) => {
    const InputRef = React.useRef<TextInput>(null);
    const [state, setState] = React.useState<string>(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    );
    const [isEditing, setIsEditing] = React.useState<boolean>(false);

    const onEdit = React.useCallback(() => {
        InputRef.current?.focus();
        setIsEditing(true);
    }, []);

    const onBlur = React.useCallback(() => {
        setIsEditing(false);
        console.log("blure....");
    }, []);
    return (
        <InputTitleUtils
            placeholder={textInputProps?.placeholder}
            value={state.length}
            max={200}
            {...props}
        >
            {isEditing && (
                <TextInput
                    ref={InputRef}
                    value={state}
                    onChangeText={setState}
                    onBlur={onBlur}
                    style={[styles.input]}
                    {...textInputProps}
                />
            )}
            {!isEditing && (
                <VStack flex={1} space={1}>
                    <TouchableOpacity onLongPress={onEdit}>
                        <Text
                            style={[styles.input, textInputProps?.style]}
                            fontSize="xl"
                        >
                            {state}
                        </Text>
                    </TouchableOpacity>
                    <HStack space={1} alignItems="center">
                        <Icon
                            size="xs"
                            as={Ionicons}
                            name="ios-document-outline"
                        />
                        <Text fontSize="2xs">Maintener pour modifier...</Text>
                    </HStack>
                </VStack>
            )}
        </InputTitleUtils>
    );
};

export default InputTitle;

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        fontWeight: "bold",
        flex: 1,
        width: "100%",
        // height: 50,
    },
});
