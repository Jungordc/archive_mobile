/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    RootStackParamList,
    RootStackScreenProps,
    AuthOrgineType,
} from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useEmailInputAuth } from "../../services/accounts/hooks/authentication";
import {
    useEmailLogin,
    useEmailSignin,
} from "../../services/queries/authentication";
import { parserResultError } from "../../utils/parser";

export type EmailInputProps = {} & RootStackScreenProps<"EmailAuth">;

function handerNavigation(
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        "EmailAuth",
        undefined
    >,
    orgin?: AuthOrgineType
) {
    return (args: any) => {
        const session = args.data.accessTokenConfirmation;
        if (args.data.accessTokenConfirmation) {
            navigation.navigate("CheckInbox", { session, type: orgin });
        }
    };
}

const EmailInput: React.FC<EmailInputProps> = ({ navigation, route }) => {
    // query mutation
    const mutationEmailLogin = useEmailLogin({
        onSuccess: handerNavigation(navigation, route.params?.type),
    });
    const mutationEmailSignin = useEmailSignin({
        onSuccess: handerNavigation(navigation, route.params?.type),
    });

    // loader auth...
    const isLoading = React.useMemo(
        () => mutationEmailLogin.isLoading || mutationEmailSignin.isLoading,
        [mutationEmailLogin.isLoading, mutationEmailSignin.isLoading]
    );

    // text of error responces
    const textError = React.useMemo(() => {
        if (mutationEmailLogin.isError) {
            return parserResultError(mutationEmailLogin.error);
        }
        if (mutationEmailSignin.isError) {
            return parserResultError(mutationEmailSignin.error);
        }

        return undefined;
    }, [mutationEmailLogin.error, mutationEmailSignin.error]);

    //
    const { onChangeValue, onSubmit, value, isValid } = useEmailInputAuth({
        onSubmit() {
            route?.params?.type === "SIGNIN"
                ? mutationEmailSignin.mutate(value)
                : mutationEmailLogin.mutate(value);
        },
    });

    return (
        <InputContainer
            textError={textError}
            inputProps={{
                value,
                onChangeText: onChangeValue,
                keyboardType: "email-address",
            }}
            btnProps={{
                onPress: onSubmit,
                isDisabled: !isValid,
                isLoading: isLoading,
            }}
        />
    );
};

export default observer(EmailInput);
