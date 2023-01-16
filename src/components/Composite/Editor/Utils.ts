/**
 * @format
 * @param inputProps
 * @returns
 */

export function inputApdatorProcess(inputProps: any) {
    return {
        value: inputProps?.value,
        onChangeText: (value: string) => {
            inputProps.onChange({ target: { value } });
        },
    };
}
