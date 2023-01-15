/**
 * @format
 * @param inputProps
 * @returns
 */

export function inputAdaptorProcess(inputProps: any) {
    return {
        value: inputProps?.value,
        onChangeText: (value: string) => {
            inputProps.onChange({ target: { value } });
        },
    };
}
