/** @format */

import React from "react";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import { RootStackScreenProps } from "../../navigation/types";
import InputContainer from "./containers/InputContainer";

export type NameInputProps = {} & RootStackScreenProps<"UsernameAuth">;

const NameInput: React.FC<NameInputProps> = ({ navigation }) => {
    const onGoNext = React.useCallback(() => {
        console.log("on go next");
        navigation.navigate("CheckInbox");
    }, []);
    return (
        <RootContainer>
            <InputContainer
                title="What's your name"
                inputLabel="Full name"
                btnProps={{
                    onPress: onGoNext,
                }}
            />
        </RootContainer>
    );
};

export default NameInput;
