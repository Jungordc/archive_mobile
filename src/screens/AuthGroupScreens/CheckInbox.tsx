/** @format */

import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Heading from "native-base/src/components/primitives/Heading";
import { View } from "native-base/src/components/basic/View";
import { VStack } from "native-base/src/components/primitives/Stack";
import Text from "native-base/src/components/primitives/Text";
import { Button } from "native-base/src/components/primitives/Button";
import { RootStackScreenProps } from "../../navigation/types";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import useEmailCheckAnimations from "../../hooks/animations/useEmailCheckAnimation";
import { getTextCheckEmailCode } from "../../services/accounts/hooks/messagesAuth";

import { useResendCode } from "../../services/queries/authentication";

export type CheckInboxProps = {} & RootStackScreenProps<"CheckInbox">;

const AText = Animated.createAnimatedComponent(Button);

const CheckInbox: React.FC<CheckInboxProps> = ({ navigation, route }) => {
    const lottieRef = useRef<LottieView | null>(null);
    const emailCheckText = getTextCheckEmailCode();

    const mutation = useResendCode({
        onSuccess(args) {
            onGoNext();
        },
    });

    const {
        animatedTextStyle,
        animatedTextResendStyle,
        onAnimationStart,
        onAnimationFinish: handlerAnimationFinish,
    } = useEmailCheckAnimations();

    const onResend = React.useCallback(() => {
        mutation.mutate(route.params.session);
        lottieRef.current?.play();
        onAnimationStart();
    }, []);

    const onAnimationFinish = React.useCallback((isCancelled: boolean) => {
        handlerAnimationFinish();
    }, []);

    const onGoNext = React.useCallback(() => {
        navigation.navigate("ConfimCodeAuth", {
            session: route.params.session,
        });
    }, []);

    console.log(JSON.stringify(mutation.error, null, 4));
    return (
        <RootContainer>
            <View flex={1} px="5" py="16">
                <VStack space="10">
                    <Heading
                        fontSize="3xl"
                        textAlign="center"
                        fontFamily="serif"
                    >
                        Check your inbox
                    </Heading>
                    <Text textAlign="center">{emailCheckText}</Text>
                    <View h="24" position="relative">
                        <AText
                            style={animatedTextStyle}
                            zIndex={1}
                            variant="link"
                            size="lg"
                            colorScheme="green"
                            onPress={onGoNext}
                        >
                            Inserer le code
                        </AText>
                        <AText
                            position="absolute"
                            top={0}
                            left={0}
                            right={0}
                            onPress={onResend}
                            variant="link"
                            colorScheme="green"
                            style={animatedTextResendStyle}
                        >
                            Renvoyer le code de confirmation
                        </AText>
                        {mutation.isError && (
                            <Text mt="10" textAlign="center" color="error.400">
                                Il y a eu une erreur
                            </Text>
                        )}
                    </View>
                </VStack>
                <View flex={1} p="16">
                    <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onAnimationFinish}
                        ref={lottieRef}
                        source={require("../../../assets/lottie/92867-email-sent.json")}
                    />
                </View>
            </View>
        </RootContainer>
    );
};
export default observer(CheckInbox);
