/** @format */

import React from "react";
import { isValideEmail } from "../../../utils/validations";
import {
    AccountInstance as Auth,
    emailRegistrationInstance as EAuth,
} from "../instance";

type D<T> = {
    initialState: T;
    onSubmit?(e?: T): void;
    validator?(e: T): boolean;
};

export function useBaseInputAuth<T>(params: D<T>) {
    const [value, setState] = React.useState<T>(params.initialState);

    const onChangeValue = React.useCallback((text: T) => {
        setState(text);
    }, []);

    const onSubmit = React.useCallback(() => {
        params.onSubmit?.(value);
    }, [value]);

    const isValid = React.useMemo(() => {
        if (params.validator) return params.validator(value);
        return true;
    }, [value]);

    return {
        value,
        onChangeValue,
        onSubmit,
        isValid,
    };
}

export function useEmailInputAuth({
    onSubmit,
    validator,
    ...params
}: Partial<D<string>>) {
    return useBaseInputAuth({
        initialState: "",
        validator(value) {
            return isValideEmail(value);
        },
        onSubmit(value) {
            value && EAuth.setEmail(value);
            onSubmit?.();
        },
        ...params,
    });
}

export function useNameInputAuth({ onSubmit, ...params }: Partial<D<string>>) {
    return useBaseInputAuth({
        initialState: "",
        onSubmit(value) {
            onSubmit?.();
        },
        ...params,
    });
}

export function useCodeInputAuth({ onSubmit, ...params }: Partial<D<string>>) {
    return useBaseInputAuth({
        initialState: "",
        onSubmit() {
            // const value = EAuth.getValues();
            // Auth.authenticate();
            onSubmit?.();
        },
        ...params,
    });
}
