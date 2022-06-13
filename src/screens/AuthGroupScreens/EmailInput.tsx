/** @format */

import { View, Text } from "react-native";
import React from "react";
import RootContainer from "../../components/Primitive/RootContainer/Container";

export type EmailInputProps = {};
const EmailInput: React.FC<EmailInputProps> = () => {
    return (
        <RootContainer>
            <View>
                <Text>EmailInput</Text>
            </View>
        </RootContainer>
    );
};

export default EmailInput;
