/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    RootStackParamList,
    RootStackScreenProps,
} from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useEmailInputAuth } from "../../services/accounts/hooks/authentication";
import {
    useEmailLogin,
    useEmailSignin,
} from "../../services/queries/authentication";

export type EmailInputProps = {} & RootStackScreenProps<"EmailAuth">;

function handerNavigation(
    navigation: NativeStackNavigationProp<
        RootStackParamList,
        "EmailAuth",
        undefined
    >
) {
    return (args: any) => {
        const session = args.data.accessTokenConfirmation;
        if (args.data.accessTokenConfirmation) {
            navigation.navigate("CheckInbox", { session });
        }
    };
}

const EmailInput: React.FC<EmailInputProps> = ({ navigation, route }) => {
    // query mutation
    const mutationEmailLogin = useEmailLogin({
        onSuccess: handerNavigation(navigation),
    });
    const mutationEmailSignin = useEmailSignin({
        onSuccess: handerNavigation(navigation),
    });

    // loader auth...
    const isLoading = React.useMemo(
        () => mutationEmailLogin.isLoading || mutationEmailSignin.isLoading,
        [mutationEmailLogin.isLoading, mutationEmailSignin.isLoading]
    );

    // text of error responces
    const textError = React.useMemo(() => {
        if (mutationEmailLogin.isError)
            return mutationEmailLogin.error?.message as string;
        if (mutationEmailSignin.isError)
            return mutationEmailSignin.error?.message as string;
        return undefined;
        // console.log(
        //     "Error...",
        //     JSON.stringify(mutationEmailLogin.error?.responce, null, 4),
        //     JSON.stringify(mutationEmailSignin.error?.responce, null, 4)
        // );
        // return "error";
    }, [mutationEmailLogin.error, mutationEmailSignin.error]);

    //
    const { onChangeValue, onSubmit, value, isValid } = useEmailInputAuth({
        onSubmit() {
            route?.params?.type === "SIGIN"
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
