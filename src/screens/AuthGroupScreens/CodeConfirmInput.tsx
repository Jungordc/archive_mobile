/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useCodeInputAuth } from "../../services/accounts/hooks/authentication";
import { useConfirmCode } from "../../services/queries/authentication";

export type CodeConfirmInputProps = {} & RootStackScreenProps<"ConfimCodeAuth">;

const CodeConfirmInput: React.FC<CodeConfirmInputProps> = ({
    navigation,
    route,
}) => {
    const mutation = useConfirmCode({
        onSuccess(args) {
            console.log("success", args);
        },
    });
    const { onChangeValue, onSubmit, value } = useCodeInputAuth({
        onSubmit() {
            mutation.mutate({
                code: value,
                session: route.params.session,
            });
        },
    });
    return (
        <InputContainer
            textError={mutation.isError && "Il y eu erreur..."}
            title="Confirmation"
            btnText="Confirmer"
            inputLabel="Votre code de confirmation"
            inputProps={{
                value,
                onChangeText: onChangeValue,
            }}
            btnProps={{
                onPress: onSubmit,
                isLoading: mutation.isLoading,
            }}
        />
    );
};

export default observer(CodeConfirmInput);
