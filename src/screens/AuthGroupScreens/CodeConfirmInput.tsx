/** @format */

import { View, Text } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigation/types";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import InputContainer from "./containers/InputContainer";

export type CodeConfirmInputProps = {} & RootStackScreenProps<"ConfimCodeAuth">;
const CodeConfirmInput = () => {
    return (
        <InputContainer
            title="Confirmation"
            btnText="Confirmer"
            inputLabel="Votre code de confirmation"
        />
    );
};

export default CodeConfirmInput;
