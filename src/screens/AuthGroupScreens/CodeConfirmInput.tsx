/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useCodeInputAuth } from "../../services/accounts/hooks/authentication";

export type CodeConfirmInputProps = {} & RootStackScreenProps<"ConfimCodeAuth">;

const CodeConfirmInput = () => {
    const { onChangeValue, onSubmit, value } = useCodeInputAuth({
        onSubmit() {},
    });
    return (
        <InputContainer
            title="Confirmation"
            btnText="Confirmer"
            inputLabel="Votre code de confirmation"
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

export default observer(CodeConfirmInput);
