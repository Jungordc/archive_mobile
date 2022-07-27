/** @format */

import React from "react";
import { AccountInstance as Auth } from "../instance";

type D<T> = {
    initialState: T;
    onSubmit?(): void;
};

export function useBaseInputAuth<T>(params: D<T>) {
    const [value, setState] = React.useState<T>(params.initialState);

    const onChangeValue = React.useCallback((text: T) => {
        setState(text);
    }, []);

    const onSubmit = React.useCallback(() => {
        params.onSubmit?.();
        console.log(value);
    }, [value]);

    return {
        value,
        onChangeValue,
        onSubmit,
    };
}

export function useEmailInputAuth(params: Partial<D<string>>) {
    return useBaseInputAuth({ initialState: "", ...params });
}

export function useNameInputAuth(params: Partial<D<string>>) {
    return useBaseInputAuth({ initialState: "", ...params });
}

export function useCodeInputAuth({ onSubmit, ...params }: Partial<D<string>>) {
    return useBaseInputAuth({
        initialState: "",
        onSubmit() {
            Auth.authenticate();
            onSubmit?.();
        },
        ...params,
    });
}
