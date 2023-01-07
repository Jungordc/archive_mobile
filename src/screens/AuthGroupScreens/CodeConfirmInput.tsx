/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useCodeInputAuth } from "../../services/accounts/hooks/authentication";
import { useConfirmCode } from "../../services/queries/authentication";
import { parserResultError } from "../../utils/parser";
import { authenticate, setToken } from "../../services/accounts/utils";

export type CodeConfirmInputProps = {} & RootStackScreenProps<"ConfimCodeAuth">;

const CodeConfirmInput: React.FC<CodeConfirmInputProps> = ({
    navigation,
    route,
}) => {
    const mutation = useConfirmCode({
        onSuccess(args) {
            setToken(args.data);
            if (route.params.type === "SIGNIN") {
                navigation.navigate("UsernameAuth");
                return;
            }
            console.log("success", args);
            authenticate();
        },
    });
    const { onChangeValue, onSubmit, value } = useCodeInputAuth({
        onSubmit() {
            console.log("CodeConfirmInput", route.params);
            mutation.mutate({
                code: value,
                session: route.params.session,
            });
        },
    });

    const textError = React.useMemo(() => {
        if (mutation.isError) {
            return parserResultError(mutation.error);
        }
    }, [mutation.isError]);
    return (
        <InputContainer
            textError={textError}
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
