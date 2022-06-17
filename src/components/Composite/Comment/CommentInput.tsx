/** @format */
import React from "react";
import { View, Text, HStack, Input } from "native-base";
import {
    StyleSheet,
    TextInputProps,
    TouchableOpacity,
    TextInput,
} from "react-native";
import TextDotSeparator from "../../Primitive/TextDotSeparator/TextDotSeparator";
import { useTheme } from "native-base/src/hooks";
import IconButton from "native-base/src/components/composites/IconButton";
import { Icon } from "native-base/src/components/primitives/Icon";
import { Ionicons } from "@expo/vector-icons";

export type ResonseTextProps = {
    onCancelResponse?(): void;
    reponseTo?: string;
};

export type CommentInputProps = {
    inputProps?: TextInputProps;
    onSubmit?(): void;
} & ResonseTextProps;

const ResonseText: React.FC<ResonseTextProps> = ({
    onCancelResponse,
    reponseTo,
}) => {
    const [response, setResponse] = React.useState<string | undefined>(
        reponseTo
    );

    const handlerCancelResponse = React.useCallback(() => {
        onCancelResponse?.();
        setResponse(undefined);
    }, []);

    return (
        <HStack ml="4">
            {response && (
                <TextDotSeparator>
                    <HStack space={1}>
                        <Text color="coolGray.800">Reponces a</Text>
                        <Text color="coolGray.800" fontWeight="bold">
                            {response}
                        </Text>
                    </HStack>
                    <TouchableOpacity onPress={handlerCancelResponse}>
                        <Text color="coolGray.800" fontWeight="bold">
                            Annuler
                        </Text>
                    </TouchableOpacity>
                </TextDotSeparator>
            )}
        </HStack>
    );
};

const CommentInput = React.forwardRef<any, CommentInputProps>(
    (
        {
            reponseTo = "Bienfait Shomari",
            inputProps,
            onSubmit,
            onCancelResponse,
        },
        ref
    ) => {
        const theme = useTheme();

        return (
            <View flex={1} p="2" ref={ref}>
                <ResonseText
                    reponseTo={reponseTo}
                    onCancelResponse={onCancelResponse}
                />
                <HStack mt="3" flex={1} space={2} alignItems="flex-end">
                    <TextInput
                        style={[
                            styles.input,
                            {
                                backgroundColor: theme.colors.coolGray[200],
                            },
                        ]}
                        {...inputProps}
                    />
                    <View>
                        <IconButton
                            variant="solid"
                            rounded="full"
                            colorScheme="green"
                            icon={<Icon as={Ionicons} name="send" />}
                        />
                    </View>
                </HStack>
            </View>
        );
    }
);

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        borderRadius: 60,
        fontSize: 16,
        paddingHorizontal: 30,
        lineHeight: 20,
        minHeight: 40,
        flex: 1,
        width: "100%",
    },
});
export default CommentInput;
