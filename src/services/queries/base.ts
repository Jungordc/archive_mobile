/** @format */

import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
} from "react-query";

export function useBaseMutation<
    TData = unknown,
    TError = unknown,
    TVariables = void,
    TContext = unknown
>(options: UseMutationOptions<TData, TError, TVariables, TContext>) {
    return useMutation(options);
}
