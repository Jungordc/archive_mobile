/** @format */
import * as React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
    Button,
    IButtonProps,
} from "native-base/src/components/primitives/Button";
import { RootStackParamList } from "../../navigation/types";

export type useBtnSaveRefType = {
    canSave?(): void;
    cantSave?(): void;
};

export type ParamsBtnSaveType<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T, undefined>;
    btnProps?: IButtonProps;
    title?: string;
    ref?: React.Ref<useBtnSaveRefType>;
};

export default function useBtnSaveEffect<T extends keyof RootStackParamList>({
    navigation,
    btnProps,
    ref,
    title = "Enregistrer",
}: ParamsBtnSaveType<T>) {
    const [disabled, setEnable] = React.useState<boolean>(false);

    const canSave = React.useCallback(() => setEnable(false), []);
    const cantSave = React.useCallback(() => setEnable(true), []);

    React.useImperativeHandle(ref, () => ({
        canSave,
        cantSave,
    }));

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight() {
                return (
                    <Button
                        isDisabled={disabled}
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
    }, [navigation, disabled]);
}
