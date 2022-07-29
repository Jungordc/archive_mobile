/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useEmailInputAuth } from "../../services/accounts/hooks/authentication";

export type EmailInputProps = {} & RootStackScreenProps<"EmailAuth">;
const EmailInput: React.FC<EmailInputProps> = ({ navigation, route }) => {
    const { onChangeValue, onSubmit, value, isValid } = useEmailInputAuth({
        onSubmit() {
            navigationHandler();
        },
    });

    const navigationHandler = React.useCallback(() => {
        if (route?.params?.type === "SIGIN") {
            navigation.navigate("UsernameAuth");
            return;
        }
        navigation.navigate("CheckInbox");
    }, []);

    return (
        <InputContainer
            inputProps={{
                value,
                onChangeText: onChangeValue,
                keyboardType: "email-address",
            }}
            btnProps={{
                onPress: onSubmit,
                isDisabled: !isValid,
            }}
        />
    );
};

export default observer(EmailInput);
