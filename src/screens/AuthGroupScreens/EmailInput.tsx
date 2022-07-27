/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useEmailInputAuth } from "../../services/accounts/hooks/authentication";

export type EmailInputProps = {} & RootStackScreenProps<"EmailAuth">;
const EmailInput: React.FC<EmailInputProps> = ({ navigation }) => {
    const { onChangeValue, onSubmit, value } = useEmailInputAuth({
        onSubmit() {
            navigation.navigate("UsernameAuth");
        },
    });

    return (
        <InputContainer
            inputProps={{
                value,
                onChangeText: onChangeValue,
            }}
            btnProps={{
                onPress: onSubmit,
            }}
        />
    );
};

export default observer(EmailInput);
