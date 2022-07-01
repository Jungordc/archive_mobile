/** @format */

import React from "react";
import { View, Text } from "react-native";
import {
    Controller as RHFController,
    Control,
    FieldValues,
} from "react-hook-form";

interface UseFormHookConnectorProps {}

export type ControllerTypeProps = {
    children: React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
    >;
    control: Control<FieldValues, any>;
    name: string;
};

export const Controller: React.FC<ControllerTypeProps> = ({
    control,
    name,
    children,
}) => {
    return (
        <RHFController
            control={control}
            rules={{
                required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) =>
                React.cloneElement(children, {
                    onBlur: onBlur,
                    onChangeText: onChange,
                    value: value,
                })
            }
            name={name}
        />
    );
};

const UseFormHookConnector: React.FC<UseFormHookConnectorProps> = ({
    ...props
}) => {
    return (
        <View>
            <Text>Hello World from UseFormHookConnector</Text>
        </View>
    );
};

export default UseFormHookConnector;
