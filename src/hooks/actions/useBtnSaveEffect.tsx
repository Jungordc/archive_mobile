/** @format */
import * as React from "react";
import {
    Button,
    IButtonProps,
} from "native-base/src/components/primitives/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

export type ParamsBtnSaveType<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T, undefined>;
    btnProps?: IButtonProps;
    title?: string;
};

export default function useBtnSaveEffect<T extends keyof RootStackParamList>({
    navigation,
    btnProps,
    title = "Enregistrer",
}: ParamsBtnSaveType<T>) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight() {
                return (
                    <Button
                        colorScheme="green"
                        rounded="full"
                        size="sm"
                        {...btnProps}
                    >
                        {title}
                    </Button>
                );
            },
        });
    }, [navigation]);
}
