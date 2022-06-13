/** @format */

import React, { useRef } from "react";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Heading from "native-base/src/components/primitives/Heading";
import { View } from "native-base/src/components/basic/View";
import { VStack } from "native-base/src/components/primitives/Stack";
import Text from "native-base/src/components/primitives/Text";
import { RootStackScreenProps } from "../../navigation/types";
import LottieView from "lottie-react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import useEmailCheckAnimations from "../../animations/useEmailCheckAnimation";

export type CheckInboxProps = {} & RootStackScreenProps<"CheckInbox">;

const AText = Animated.createAnimatedComponent(Text);

const CheckInbox: React.FC<CheckInboxProps> = ({ navigation }) => {
    const lottieRef = useRef<LottieView | null>(null);
    const {
        animatedTextStyle,
        animatedTextResendStyle,
        onAnimationStart,
        onAnimationFinish: handlerAnimationFinish,
    } = useEmailCheckAnimations();

    const onResend = React.useCallback(() => {
        lottieRef.current?.play();
        onAnimationStart();
    }, []);

    const onGoNext = React.useCallback(() => {
        navigation.navigate("ConfimCodeAuth");
    }, []);

    const onAnimationFinish = React.useCallback((isCancelled: boolean) => {
        handlerAnimationFinish();
    }, []);
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
                    <Text textAlign="center">
                        Please check your email email.contact@gmail.com for a
                        link to sign up to Archive
                    </Text>
                    <View h="24" position="relative">
                        <AText
                            style={animatedTextStyle}
                            color="green.700"
                            fontSize="md"
                            textAlign="center"
                            zIndex={1}
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
                            color="green.700"
                            textAlign="center"
                            style={animatedTextResendStyle}
                        >
                            Resend the link to sign in
                        </AText>
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

export default CheckInbox;
