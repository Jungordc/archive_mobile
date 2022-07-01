/** @format */

import {
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Text from "native-base/src/components/primitives/Text";
import { IHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import IconLabel from "../IconLabel/IconLabel";
import InputTitleUtils from "./InputTitleUtils";

export type InputTitleProps = {
    textInputProps?: TextInputProps;
    maxLength?: number;
} & IHStackProps;

const TIME_DOUBLE_CLICK: number = 250;

const InputTitle: React.FC<InputTitleProps> = ({
    textInputProps,
    maxLength = 200,
    ...props
}) => {
    const InputRef = React.useRef<TextInput>(null);
    const [state, setState] = React.useState<string>("");
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [lastPress, setLastPress] = React.useState<number>(0);

    const value = React.useMemo(
        () => textInputProps?.value || state,
        [textInputProps?.value, state]
    );

    const onEdit = React.useCallback(() => {
        InputRef.current?.focus();
        setIsEditing(true);
    }, []);

    //double press
    const onDoublePress = React.useCallback(() => {
        const timeClicked = new Date().getTime();
        const delta = timeClicked - lastPress;
        //
        delta < TIME_DOUBLE_CLICK && onEdit();
        //
        setLastPress(timeClicked);
    }, [lastPress]);

    const onBlur = React.useCallback(() => {
        setIsEditing(false);
    }, []);
    return (
        <InputTitleUtils
            placeholder={textInputProps?.placeholder}
            value={value.length}
            max={maxLength}
            {...props}
        >
            {isEditing && (
                <TextInput
                    maxLength={maxLength}
                    ref={InputRef}
                    value={value}
                    onChangeText={setState}
                    onBlur={onBlur}
                    style={[styles.input]}
                    {...textInputProps}
                />
            )}
            {!isEditing && (
                <VStack flex={1} space={1}>
                    <TouchableOpacity
                        onLongPress={onEdit}
                        onPress={onDoublePress}
                    >
                        <Text
                            style={[styles.input, textInputProps?.style]}
                            fontSize="xl"
                        >
                            {value.length > 0 ? (
                                value
                            ) : (
                                <Text color="text.500">
                                    {textInputProps?.placeholder}
                                </Text>
                            )}
                        </Text>
                    </TouchableOpacity>
                    <IconLabel
                        icon="pencil"
                        label="Maintener ou doubler clicker pour modifier..."
                        iconProps={{
                            size: "xs",
                        }}
                        labelProps={{
                            fontSize: "2xs",
                        }}
                    />
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
