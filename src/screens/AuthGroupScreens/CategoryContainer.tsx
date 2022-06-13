/** @format */

import {
    View,
    Text,
    Button,
    Divider,
    IconButton,
    Icon,
    Heading,
    VStack,
} from "native-base";
import { HStack } from "native-base/src/components/primitives/Stack";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import TextLink from "../../components/Primitive/TextLink/TextLink";

const ButtonChoice: React.FC<{
    onPress?: (e: any) => void;
    iconName: string;
    title: string;
}> = ({ iconName, onPress, title }) => {
    return (
        <Button
            colorScheme="coolGray"
            onPress={onPress}
            leftIcon={<Icon as={Ionicons} name={iconName} />}
            size="lg"
            variant="outline"
            rounded="full"
            _text={{
                ml: "3",
            }}
        >
            {title}
        </Button>
    );
};

export type CategoryContainerProps = {
    title?: string;
    textGoogle?: string;
    textMail?: string;
    textOtherAuth?: string;
    textNotAccount?: string;
    textCategory?: string;
    onPressAuthGoogle?: () => void;
    onPressMail?: () => void;
    onPressFaceBook?: () => void;
    onPressTextCategory?: () => void;
};
const CategoryContainer: React.FC<CategoryContainerProps> = ({
    title = "Joindre Archive.",
    textOtherAuth = "Ou, sign up avec",
    textCategory = "Sign in",
    textNotAccount = "Already have an account?",
    textGoogle = "Sign up with Google",
    textMail = "Sign up with Email",
    onPressTextCategory,
    onPressAuthGoogle,
    onPressFaceBook,
    onPressMail,
}) => {
    return (
        <RootContainer>
            <View flex={1} px="7" py="10">
                <VStack space="6" flex={0.9}>
                    <Heading textAlign="center" color="coolGray.900">
                        Jungo Archive
                    </Heading>
                    <View mt="16">
                        <VStack space="7">
                            <Heading
                                textAlign="center"
                                fontSize="4xl"
                                fontWeight="medium"
                                fontFamily="serif"
                                color="coolGray.800"
                            >
                                {title}
                            </Heading>
                            <ButtonChoice
                                onPress={onPressAuthGoogle}
                                iconName="logo-google"
                                title={textGoogle}
                            />
                            <ButtonChoice
                                onPress={onPressMail}
                                iconName="mail"
                                title={textMail}
                            />
                        </VStack>
                    </View>
                    <HStack justifyContent="center">
                        <Divider flex={0.25} />
                        <Text
                            flex={0.5}
                            textAlign="center"
                            color="coolGray.500"
                        >
                            {textOtherAuth}
                        </Text>
                        <Divider flex={0.25} />
                    </HStack>
                    <HStack space={7} justifyContent="center">
                        <IconButton
                            onPress={onPressFaceBook}
                            colorScheme="darkBlue"
                            size="lg"
                            variant="outline"
                            borderRadius="full"
                            icon={<Icon as={Ionicons} name="logo-facebook" />}
                        />
                    </HStack>
                    <View mt="5">
                        <Text textAlign="center" color="coolGray.700">
                            {textNotAccount}{" "}
                            <TextLink onPress={onPressTextCategory}>
                                {textCategory}
                            </TextLink>
                        </Text>
                    </View>
                </VStack>
                <View flex={0.1}>
                    <Text color="coolGray.700">
                        By signing up, you agree to our{" "}
                        <TextLink>Terms of Service</TextLink> and acknowlodge
                        that our <TextLink>Privacy Policy</TextLink> applies to
                        you
                    </Text>
                </View>
            </View>
        </RootContainer>
    );
};

export default CategoryContainer;
