/** @format */

import React from "react";
import { Keyboard } from "react-native";
import { View, Text, Heading, Button, Input } from "native-base";
import { VStack } from "native-base/src/components/primitives/Stack";
import { IInputProps } from "native-base/src/components/primitives/Input/types";
import { IButtonProps } from "native-base/src/components/primitives/Button/types";
import RootContainer from "../../../components/Primitive/RootContainer/Container";
import { TextTermOfService } from "./CategoryContainer";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

export type InputContainerProps = {
    title?: string;
    subTitle?: string;
    btnText?: string;
    inputLabel?: string;
    inputProps?: IInputProps;
    btnProps?: IButtonProps;
    textError?: string | boolean;
};

const AView = Animated.createAnimatedComponent(View);
const InputContainer: React.FC<InputContainerProps> = ({
    title = "What's your email?",
    subTitle = "Creer un compte",
    btnText = "Continuer",
    inputLabel = "Your email",
    inputProps,
    btnProps,
    textError,
}) => {
    const animatedValue = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: animatedValue.value,
    }));

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            _keyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            _keyboardDidHide
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const _keyboardDidShow = React.useCallback(() => {
        animatedValue.value = 0;
    }, []);
    const _keyboardDidHide = React.useCallback(() => {
        animatedValue.value = withTiming(1);
    }, []);

    return (
        <RootContainer>
            <View flex={1} mt="7" mx="7">
                <VStack space="32" flex={0.8}>
                    <View mt="5">
                        <Text
                            textTransform="uppercase"
                            textAlign="center"
                            fontSize="md"
                        >
                            {subTitle}
                        </Text>
                        <View mt="16" mx="3">
                            <VStack space="12">
                                <Heading
                                    fontSize="4xl"
                                    fontFamily="serif"
                                    textAlign="center"
                                    fontWeight="medium"
                                >
                                    {title}
                                </Heading>
                                <VStack>
                                    <Text textAlign="center">{inputLabel}</Text>
                                    <Input
                                        variant="underlined"
                                        fontSize="lg"
                                        onSubmitEditing={Keyboard.dismiss}
                                        {...inputProps}
                                    />
                                    {/* Error text */}
                                    {textError && (
                                        <Text
                                            color="error.400"
                                            textAlign="center"
                                        >
                                            {textError}
                                        </Text>
                                    )}
                                </VStack>
                                <Button
                                    rounded="full"
                                    colorScheme="green"
                                    {...btnProps}
                                >
                                    {btnText}
                                </Button>
                            </VStack>
                        </View>
                    </View>
                </VStack>
                <AView flex={0.2} style={animatedStyle}>
                    <TextTermOfService textAlign="center" />
                </AView>
            </View>
        </RootContainer>
    );
};

export default InputContainer;
