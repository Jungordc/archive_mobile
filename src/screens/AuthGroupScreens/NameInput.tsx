/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";
import { useNameInputAuth } from "../../services/accounts/hooks/authentication";

export type NameInputProps = {} & RootStackScreenProps<"UsernameAuth">;

const NameInput: React.FC<NameInputProps> = ({ navigation }) => {
    const { onChangeValue, onSubmit, value } = useNameInputAuth({
        onSubmit() {
            navigation.navigate("CheckInbox");
        },
    });

    return (
        <RootContainer>
            <InputContainer
                title="What's your name"
                inputLabel="Full name"
                inputProps={{
                    value,
                    onChangeText: onChangeValue,
                }}
                btnProps={{
                    onPress: onSubmit,
                }}
            />
        </RootContainer>
    );
};

export default observer(NameInput);
