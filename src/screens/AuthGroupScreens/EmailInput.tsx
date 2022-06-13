/** @format */

import React from "react";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";

export type EmailInputProps = {} & RootStackScreenProps<"EmailAuth">;
const EmailInput: React.FC<EmailInputProps> = ({ navigation }) => {
    const onContinue = React.useCallback(
        () => navigation.navigate("UsernameAuth"),
        []
    );
    return (
        <InputContainer
            btnProps={{
                onPress: onContinue,
            }}
        />
    );
};

export default EmailInput;
