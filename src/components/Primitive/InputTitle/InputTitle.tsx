/** @format */

import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { IHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import InputTitleUtils from "./InputTitleUtils";

export type InputTitleProps = {
    textInputProps?: TextInputProps;
} & IHStackProps;

const InputTitle: React.FC<InputTitleProps> = ({
    textInputProps,
    ...props
}) => {
    const [state, setState] = React.useState<string>("");
    return (
        <InputTitleUtils
            placeholder={textInputProps?.placeholder}
            value={state.length}
            max={200}
            {...props}
        >
            <TextInput
                value={state}
                onChangeText={setState}
                style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    flex: 1,
                    width: "100%",
                    // height: 50,
                }}
                {...textInputProps}
            />
        </InputTitleUtils>
    );
};

export default InputTitle;
